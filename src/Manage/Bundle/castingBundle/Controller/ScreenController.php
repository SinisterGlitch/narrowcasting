<?php

namespace Manage\Bundle\castingBundle\Controller;

use Manage\Bundle\castingBundle\Entity\Screen;
use Manage\Bundle\castingBundle\Form\ScreenType;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;


/**
 * Class ScreenController
 * @package Manage\Bundle\castingBundle\Controller
 * @Security("has_role('ROLE_USER')")
 */
class ScreenController extends Controller
{
    /**
     * @Route("/screen")
     */
    public function indexAction()
    {
        return $this->forward('ManagecastingBundle:Screen:list');
    }

    /**
     * @Route("/screen/index")
     * @Template()
     */
    public function listAction()
    {
        return array('screens' => $this->getUser()->getScreens());
    }

    /**
     * @Route("/screen/detail/{id}")
     * @ParamConverter("detail", class="ManagecastingBundle:Screen")
     * @Template()
     *
     * @param Screen $screen
     * @return array
     */
    public function detailAction(Screen $screen)
    {
        return array(
            'playlists' => $this->getUser()->getPlaylists(),
            'public_key' => $this->getUser()->getSalt(),
            'screen' => $screen
        );
    }

    /**
     * @Route("/screen/delete/{id}")
     * @ParamConverter("delete", class="ManagecastingBundle:Screen")
     * @Template()
     *
     * @param Screen $screen
     * @return array|RedirectResponse
     */
    public function deleteAction(Screen $screen)
    {
        try {
            $em = $this->getDoctrine()->getManager();
            $em->remove($screen);
            $em->flush();
        } catch (\Exception $e) {

            return $this->redirect(
                $this->generateUrl('manage_casting_screen_detail', array('id' => $screen->getId()), true)
            );
        }

        return $this->redirect($this->generateUrl('manage_casting_screen_list'));
    }

    /**
     * @Route("/screen/new")
     * @Template()
     *
     * @param Request $request
     * @return array|RedirectResponse
     */
    public function newAction(Request $request)
    {
        $screen = new Screen();
        $form = $this->createForm(new ScreenType(), $screen);
        $form->handleRequest($request);

        if ($form->isValid()) {
            $screen = $form->getData();

            $em = $this->getDoctrine()->getManager();
            $em->persist($screen);
            $em->flush();

            return $this->redirect('detail/'.$screen->getId());
        }

        return array('form' => $form->createView());
    }

    /**
     * @Route("/screen/edit/{id}")
     * @ParamConverter("edit", class="ManagecastingBundle:Screen")
     * @Template()
     *
     * @param Request $request
     * @param Screen $screen
     * @return array|RedirectResponse
     */
    public function editAction(Request $request, Screen $screen)
    {
        $form = $this->createForm(new ScreenType(), $screen);
        $form->handleRequest($request);

        $type = 'success';
        $message = 'Screen Saved';

        if ($form->isValid()) {
            /** @var Screen $slide */
            $screen = $form->getData();

            try {
                $em = $this->getDoctrine()->getManager();
                $em->persist($slide);
                $em->flush();
            } catch (\Exception $e) {
                $type = 'error';
                $message = 'Screen could not be saved';
            }

            $this->get('session')->getFlashBag()->add($type, $message);


            return $this->redirect(
                $this->generateUrl('manage_casting_screen_edit', array('id' => $screen->getId()), true)
            );
        }

        return array(
            'form' => $form->createView(),
            'screen' => $screen
        );
    }
}

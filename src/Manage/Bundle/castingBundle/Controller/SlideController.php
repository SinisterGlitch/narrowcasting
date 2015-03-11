<?php

namespace Manage\Bundle\castingBundle\Controller;

use Manage\Bundle\castingBundle\Entity\Slide;
use Manage\Bundle\castingBundle\Form\SlideType;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;


/**
 * Class SlideController
 * @package Manage\Bundle\castingBundle\Controller
 * @Security("has_role('ROLE_USER')")
 */
class SlideController extends Controller
{
    /**
     * @Route("/slide")
     */
    public function indexAction()
    {
        return $this->forward('ManagecastingBundle:Slide:list');
    }

    /**
     * @Route("/slide/index")
     * @Template()
     */
    public function listAction()
    {
        return array('slides' => $this->getUser()->getSlides());
    }

    /**
     * @Route("/slide/detail/{id}")
     * @ParamConverter("detail", class="ManagecastingBundle:Slide")
     * @Template()
     *
     * @param Slide $slide
     * @return array
     */
    public function detailAction(Slide $slide)
    {
        return array('slide' => $slide);
    }

    /**
     * @Route("/slide/delete/{id}")
     * @ParamConverter("delete", class="ManagecastingBundle:Slide")
     * @Template()
     *
     * @param Slide $slide
     * @return array|RedirectResponse
     */
    public function deleteAction(Slide $slide)
    {
        try {
            $em = $this->getDoctrine()->getManager();
            $em->remove($slide);
            $em->flush();
        } catch (\Exception $e) {

            return $this->redirect(
                $this->generateUrl('manage_casting_slide_detail', array('id' => $slide->getId()), true)
            );
        }

    return $this->redirect($this->generateUrl('manage_casting_slide_list'));
}

    /**
     * @Route("/slide/new")
     * @Template()
     *
     * @param Request $request
     * @return array|RedirectResponse
     */
    public function newAction(Request $request)
    {
        $slide = new Slide();
        $form = $this->createForm(new SlideType(), $slide);
        $form->handleRequest($request);

        if ($form->isValid()) {
            $slide->upload();

            // Autofill values based on uploaded document
            $slide->setResolution('1920x1080');
            $slide->setDataType('image');
            $slide->setSize('1mb');

            $slide = $form->getData();
            $em = $this->getDoctrine()->getManager();
            $em->persist($slide);
            $em->flush();

            return $this->redirect('detail/'.$slide->getId());
        }

        return array(
            'form' => $form->createView(),
            'slide' => $slide
        );
    }

    /**
     * @Route("/slide/edit/{id}")
     * @ParamConverter("edit", class="ManagecastingBundle:Slide")
     * @Template()
     *
     * @param Request $request
     * @param Slide $slide
     * @return array|RedirectResponse
     */
    public function editAction(Request $request, Slide $slide)
    {
        $form = $this->createForm(new SlideType(), $slide);
        $form->handleRequest($request);

        $message = 'Slide Saved';
        $type = 'success';

        if ($form->isValid()) {

            /** @var Slide $slide */
            $slide = $form->getData();
            $slide->upload();

            try {
                $em = $this->getDoctrine()->getManager();
                $em->persist($slide);
                $em->flush();
            } catch (\Exception $e) {
                $message = 'Slide could not be saved';
                $type = 'error';
            }

            $this->get('session')->getFlashBag()->add($type, $message);

            return $this->redirect(
                $this->generateUrl('manage_casting_slide_edit', array('id' => $slide->getId()), true)
            );
        }

        return array(
            'form' => $form->createView(),
            'slide' => $slide
        );
    }
}

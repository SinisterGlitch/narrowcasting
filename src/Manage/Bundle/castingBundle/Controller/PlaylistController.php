<?php

namespace Manage\Bundle\castingBundle\Controller;

use Manage\Bundle\castingBundle\Entity\Playlist;
use Manage\Bundle\castingBundle\Form\PlaylistType;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;


/**
 * Class PlaylistController
 * @package Manage\Bundle\castingBundle\Controller
 * @Security("has_role('ROLE_USER')")
 */
class PlaylistController extends Controller
{
    /**
     * @Route("/playlist")
     *
     * @return Response
     */
    public function indexAction()
    {
        return $this->forward('ManagecastingBundle:Playlist:list');
    }

    /**
     * @Route("/playlist/index")
     * @Template()
     *
     * @return array
     */
    public function listAction()
    {
        return array('playlists' => $this->getUser()->getPlaylists());
    }

    /**
     * @Route("/playlist/detail/{id}")
     * @ParamConverter("detail", class="ManagecastingBundle:Playlist")
     * @Template()
     *
     * @param Playlist $playlist
     * @return array
     */
    public function detailAction(Playlist $playlist)
    {
        return array(
            'slides' => $this->getUser()->getSlides(),
            'playlist' => $playlist
        );
    }

    /**
     * @Route("/playlist/delete/{id}")
     * @ParamConverter("delete", class="ManagecastingBundle:Playlist")
     * @Template()
     *
     * @param Playlist $playlist
     * @return array|RedirectResponse
     */
    public function deleteAction(Playlist $playlist)
    {
        try {
            $em = $this->getDoctrine()->getManager();
            $em->remove($playlist);
            $em->flush();
        } catch (\Exception $e) {

            return $this->redirect(
                $this->generateUrl('manage_casting_screen_detail', array('id' => $playlist->getId()), true)
            );
        }

        return $this->redirect($this->generateUrl('manage_casting_screen_list'));
    }


    /**
     * @Route("/playlist/new")
     * @Template()
     *
     * @param Request $request
     * @return array|RedirectResponse
     */
    public function newAction(Request $request)
    {
        $playlist = new Playlist();
        $form = $this->createForm(new PlaylistType(), $playlist);

        $form->handleRequest($request);

        if ($form->isValid()) {
            $playlist = $form->getData();

            $em = $this->getDoctrine()->getManager();
            $em->persist($playlist);
            $em->flush();

            return $this->redirect('detail/'.$playlist->getId());
        }

        return array('form' => $form->createView());
    }

    /**
     * @Route("/playlist/edit/{id}")
     * @ParamConverter("edit", class="ManagecastingBundle:Playlist")
     * @Template()
     *
     * @param Request $request
     * @param Playlist $playlist
     * @return array|RedirectResponse
     */
    public function editAction(Request $request, Playlist $playlist)
    {
        $form = $this->createForm(new PlaylistType(), $playlist);
        $form->handleRequest($request);

        $message = 'Playlist Saved';
        $type = 'success';

        if ($form->isValid()) {
            /** @var Playlist $playlist */
            $playlist = $form->getData();

            try {
                $em = $this->getDoctrine()->getManager();
                $em->persist($playlist);
                $em->flush();
            } catch (\Exception $e) {
                $message = 'Playlist could not be saved';
                $type = 'error';
            }

            $this->get('session')->getFlashBag()->add($type, $message);

            return $this->redirect(
                $this->generateUrl('manage_casting_playlist_edit', array('id' => $playlist->getId()), true)
            );
        }

        return array(
            'form' => $form->createView(),
            'playlist' => $playlist
        );
    }
}

<?php

namespace Manage\Bundle\castingBundle\Controller;

use Manage\Bundle\castingBundle\Entity\Screen;
use Manage\Bundle\castingBundle\Entity\User;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Component\Config\Definition\Exception\Exception;
use Symfony\Component\HttpFoundation\JsonResponse;

/**
 * Class DefaultController
 * @package Manage\Bundle\castingBundle\Controller
 */
class DefaultController extends Controller
{
    /**
     * @Route("/")
     * @Security("has_role('ROLE_USER')")
     * @Template()
     */
    public function indexAction()
    {
        return array();
    }

    /**
     * Get Json encoded playlist items for screen
     *
     * @Route("/webservice/screen/{id}/key/{key}")
     * @ParamConverter("screen", class="ManagecastingBundle:Screen")
     *
     * @param $id
     * @param $key
     * @return JsonResponse
     */
    public function webserviceAction(Screen $screen, $key)
    {
        $result = array('Error' => 'Invalid credentials');
        if ($this->isValidKey($key)) {
            $result = $this->getPlaylistItems($screen);
        }

        return new JsonResponse($result);
    }

    /**
     * Get active playlist items for screen
     *
     * @param Screen $screen
     * @return array
     */
    private function getPlaylistItems(Screen $screen)
    {
        $repo = $this->getDoctrine()->getManager()->getRepository('ManagecastingBundle:Playlist');
        $playlist = $repo->findOneBy(array('screen' => $screen->getId()));

        $result = array();
        foreach ($playlist->getSlides() as $slide) {
            $result[] = array(
                'id' => $slide->getId(),
                'name' => $slide->getName(),
                'description' => $slide->getDescription(),
                'type' => $slide->getDataType(),
                'file_name' => $slide->getPath(),
                'size' => $slide->getSize(),
                'path' => $slide->getPublicPath()
            );
        }

        return $result;
    }

    /**
     * Validates user key
     *
     * @param $key
     * @return bool
     */
    private function isValidKey($key)
    {
        try {
            $repo = $this->getDoctrine()->getManager()->getRepository('ManagecastingBundle:User');
            $user = $repo->findOneBySalt($key);

            if ($user instanceof User) {
                return true;
            }
        } catch (Exception $e) {
            // Do nothing
        }

        return false;
    }
}
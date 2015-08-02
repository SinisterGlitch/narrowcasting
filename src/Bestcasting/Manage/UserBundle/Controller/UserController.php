<?php

namespace Bestcasting\Manage\UserBundle\Controller;

use Bestcasting\Manage\UserBundle\Entity\User;
use FOS\RestBundle\Controller\Annotations\Get;
use FOS\RestBundle\Controller\Annotations\Post;
use FOS\RestBundle\Controller\Annotations\View;
use JMS\Serializer\Annotation\Groups;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\BrowserKit\Response;
use Symfony\Component\HttpFoundation\Request;

/**
 * Class UserController
 * @package Bestcasting\Manage\CoreBundle\Controller
 */
class UserController extends Controller
{
    /**
     * @Post("/users")
     * @View()
     *
     * @param Request $request
     * @return Response
     */
    public function postUserAction(Request $request)
    {
        $formData = $request->get('data');

        try {
            return $this->container
                ->get('manage_user_manager')
                ->create($formData['username'], $formData['password'], $formData['email']);

        } catch (\Exception $e) {
            return new Response($e->getMessage(), $e->getCode());
        }
    }

    /**
     * @Post("/login")
     * @View()
     *
     * @param Request $request
     * @return Response
     */
    public function postLoginAction(Request $request)
    {
        $formData = $request->get('data');

        try {
            return $this->container
                ->get('manage_user_manager')
                ->login($formData['username'], $formData['password']);

        } catch (\Exception $e) {
            return new Response($e->getMessage(), $e->getCode());
        }
    }

    /**
     * @Get("/users/{id}")
     *
     * @param $id
     * @return User
     */
    public function getUserAction($id)
    {
        try {
            return $this->container
                ->get('manage_user_manager')
                ->getUser($id);

        } catch (\Exception $e) {
            return new Response($e->getMessage(), $e->getCode());
        }
    }
}

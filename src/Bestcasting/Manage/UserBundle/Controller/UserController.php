<?php

namespace Bestcasting\Manage\UserBundle\Controller;

use Bestcasting\Manage\UserBundle\Entity\User;
use FOS\RestBundle\Controller\Annotations\Get;
use FOS\RestBundle\Controller\Annotations\Post;
use FOS\RestBundle\Controller\Annotations\View;
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
     * @return Response|User
     */
    public function postUserAction(Request $request)
    {
        $formData = $request->get('data');

        try {
            $user = $this->container
                ->get('manage_user_manager')
                ->create($formData['username'], $formData['password'], $formData['email']);

        } catch (\Exception $e) {
            return new Response($e->getMessage(), $e->getCode());
        }

        return $user;
    }

    /**
     * @Post("/users/login")
     * @View()
     *
     * @param Request $request
     * @return Response|User
     */
    public function postLoginAction(Request $request)
    {
        $formData = $request->get('data');

        $user = $this->container
            ->get('manage_user_manager')
            ->login($formData['username'], $formData['password']);

        if (!$user instanceof User) {
            return new Response('Wrong password or username', 400);
        }

        return $user;
    }

    /**
     * @Get("/users/{id}")
     *
     * @param $id
     * @return User
     * @throws Response
     */
    public function getUsersAction($id = null)
    {
        $user = $this->container->get('manage_user_manager')->getUser($id);

        if (!$user instanceof User) {
            return new Response('User not found with given id', 500);
        }

        return $user;
    }
}

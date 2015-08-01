<?php

namespace Bestcasting\Manage\UserBundle\Controller;

use Bestcasting\Manage\UserBundle\Entity\User;
use FOS\RestBundle\Controller\Annotations\Get;
use FOS\RestBundle\Controller\Annotations\Post;
use FOS\RestBundle\Controller\Annotations\View;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\BrowserKit\Response;

/**
 * Class UserController
 * @package Bestcasting\Manage\CoreBundle\Controller
 */
class UserController extends Controller
{
    /**
     * @Get("/user/create/{username}/{password}/{email}")

     * @param $username
     * @param $password
     * @param $email
     * @return Response
     */
    public function newUserAction($username, $password, $email)
    {
        try {
            $this->container
                ->get('manage_user_manager')
                ->create($username, $password, $email);

        } catch (\Exception $e) {
            return new Response($e->getMessage(), $e->getCode());
        }

        return new Response('Your account is ready to use', 200);
    }

    /**
     * @Post("/user/login/{username}/{password}")
     * @View()
     *
     * @param $username
     * @param $password
     * @return Response
     */
    public function loginUserAction($username, $password)
    {
        try {
            $this->container
                ->get('manage_user_manager')
                ->login($username, $password);

        } catch (\Exception $e) {
            return new Response($e->getMessage(), $e->getCode());
        }

        return new Response('Your account is logged in', 200);
    }

    /**
     * @Get("/user/get/{userId}")
     *
     * @param $userId
     * @return User
     */
    public function getUserAction($userId)
    {
        try {
            return $this->container
                ->get('manage_user_manager')
                ->getUser($userId);

        } catch (\Exception $e) {
            return new Response($e->getMessage(), $e->getCode());
        }
    }
}

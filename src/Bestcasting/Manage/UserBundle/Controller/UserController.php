<?php

namespace Bestcasting\Manage\UserBundle\Controller;

use FOS\RestBundle\Controller\Annotations\Get;
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
     *
     * @param $username
     * @param $password
     * @param $email
     * @return Response
     */
    public function createUserAction($username, $password, $email)
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
     * @Get("/user/login/{username}/{password}")
     *
     * @param $username
     * @param $password
     * @return Response
     */
    public function LoginUserAction($username, $password)
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
}

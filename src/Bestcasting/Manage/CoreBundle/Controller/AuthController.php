<?php

namespace Bestcasting\Manage\CoreBundle\Controller;

use Doctrine\ORM\ORMException;
use FOS\RestBundle\Controller\Annotations\Get;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

/**
 * Class AuthController
 * @package Bestcasting\Manage\CoreBundle\Controller
 */
class AuthController extends Controller
{
    /**
     * @Get("/user/create/{username}/{password}/{email}")
     *
     * @param $username
     * @param $password
     * @param $email
     * @return Response
     */
    public function UserAction($username, $password, $email)
    {
        $userManager = $this->container->get('fos_user.user_manager');

        if ($userManager->findUserByUsername($username)) {
            return new Response('Username is already in use', 400);
        }

        $user = $userManager->createUser()
            ->setPlainPassword($password)
            ->setUsername($username)
            ->setEmail($email);

        try {
            $userManager->updateUser($user);
        } catch (ORMException $e) {
            return new Response('Somthing went wrong while creating user', 500);
        }

        return new Response('Your account is ready to use', 200);
    }
}

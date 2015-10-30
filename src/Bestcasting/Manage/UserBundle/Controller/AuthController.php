<?php

namespace Bestcasting\Manage\UserBundle\Controller;

use Bestcasting\Manage\UserBundle\Entity\User;
use FOS\RestBundle\Controller\Annotations\Post;
use Symfony\Component\HttpFoundation\Request;

/**
 * Class AuthController
 * @package Bestcasting\Manage\UserBundle\Controller
 */
class AuthController extends BaseController
{
    /**
     * @Post("/auth")
     *
     * @param Request $request
     * @return User
     */
    public function postAction(Request $request)
    {
        $this->getUserManager()->login(
            $request->request->get('username'),
            $request->request->get('password')
        );

        return $this->getUser();
    }
}

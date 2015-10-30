<?php

namespace Bestcasting\Manage\UserBundle\Controller;

use Bestcasting\Manage\UserBundle\Entity\User;
use FOS\RestBundle\Controller\Annotations\Get;
use FOS\RestBundle\Controller\Annotations\Post;
use Symfony\Component\BrowserKit\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

/**
 * Class UserController
 * @package Bestcasting\Manage\CoreBundle\Controller
 */
class UserController extends BaseController
{
    /**
     * @Get("/users/{id}")
     *
     * @param User $user
     * @return User
     */
    public function getUsersAction(User $user)
    {
        return $user;
    }

    /**
     * @Post("/users")
     *
     * @param Request $request
     * @return Response|User
     */
    public function postUserAction(Request $request)
    {
        $formData = $request->get('data');

        try {
            $user = $this->getUserManager()->create(
                    $formData['username'],
                    $formData['password'],
                    $formData['email']
                );

        } catch (\Exception $e) {
            throw new BadRequestHttpException($e->getMessage());
        }

        return $user;
    }
}

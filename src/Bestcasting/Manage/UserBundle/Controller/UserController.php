<?php

namespace Bestcasting\Manage\UserBundle\Controller;

use Bestcasting\Manage\UserBundle\Entity\User;
use Bestcasting\Manage\UserBundle\UserManager\UserManager;
use FOS\RestBundle\Controller\Annotations\Get;
use FOS\RestBundle\Controller\Annotations\Post;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\BrowserKit\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

/**
 * Class UserController
 * @package Bestcasting\Manage\CoreBundle\Controller
 */
class UserController extends Controller
{
    /**
     * @Get("/users/{id}")
     *
     * @param User $user
     * @return User
     */
    public function getUsersAction(User $user)
    {
        return $this->validateUser($user);
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

    /**
     * @Post("/users/login")
     *
     * @param Request $request
     * @throws \Exception
     * @return User
     */
    public function postLoginAction(Request $request)
    {
        $formData = $request->get('data');

        return $this->validateUser($this->getUserManager()
            ->login($formData['username'], $formData['password']));
    }

    /**
     * @param User $user
     * @return bool
     */
    private function validateUser(User $user)
    {
        if (!$user instanceof User) {
            throw new BadRequestHttpException('User not found');
        }

        return $user;
    }

    /**
     * @return UserManager
     */
    private function getUserManager()
    {
        return $this->container->get('manage_user_manager');
    }
}

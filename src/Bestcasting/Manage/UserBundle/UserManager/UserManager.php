<?php

namespace Bestcasting\Manage\UserBundle\UserManager;

use Doctrine\ORM\ORMException;
use Bestcasting\Manage\UserBundle\Entity\User;
use FOS\UserBundle\Doctrine\UserManager as FosUserManager;
use FOS\UserBundle\Security\LoginManager;
use Symfony\Component\Config\Definition\Exception\Exception;

/**
 * Class UserManager
 * @package Bestcasting\Manage\UserBundle\UserManager
 */
class UserManager
{
    /**
     * @var FosUserManager
     */
    private $userManager;

    /**
     * @var LoginManager
     */
    private $loginManager;

    /**
     * @param FosUserManager $userManager
     * @param LoginManager $loginManager
     */
    public function __construct(FosUserManager $userManager, LoginManager $loginManager)
    {
        $this->userManager = $userManager;

        $this->loginManager = $loginManager;
    }

    /**
     * Create new user
     *
     * @param $username
     * @param $password
     * @param $email
     * @throws \Exception
     */
    public function create($username, $password, $email)
    {
        if ($this->ifExists($username, $email)) {
            throw new \Exception('Account already exists', 400);
        }

        $user = new User();
        $user
            ->setPlainPassword($password)
            ->setUsername($username)
            ->setEmail($email)
            ->setToken('test');

        try {
            $this->userManager->updateUser($user);
        } catch (ORMException $e) {
            throw new \Exception('Something went wrong while creating user', 500);
        }
    }

    /**
     * Login new user
     *
     * @param $username
     * @param $password
     * @throws \Exception
     */
    public function login($username, $password)
    {
        $user = $this->userManager->findUserBy([
            'username' => $username,
            'password' => $password
        ]);

        if (!$user instanceof User) {
            throw new \Exception('Wrong username or password', 500);
        }

        $this->loginManager->loginUser('main', $user);
    }

    /**
     * if user exists
     *
     * @param $username
     * @param $email
     * @return bool
     */
    private function ifExists($username, $email)
    {
        if ($this->userManager->findUserByUsername($username)
            || $this->userManager->findUserByEmail($email)) {
                return true;
        }
    }
}

<?php

namespace Bestcasting\Manage\UserBundle\UserManager;

use Doctrine\ORM\EntityManager;
use Doctrine\ORM\ORMException;
use Bestcasting\Manage\UserBundle\Entity\User;
use FOS\UserBundle\Doctrine\UserManager as FosUserManager;
use FOS\UserBundle\Security\LoginManager;

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
     * @var EntityManager
     */
    private $entityManager;

    /**
     * @param FosUserManager $userManager
     * @param LoginManager $loginManager
     * @param EntityManager $entityManager
     */
    public function __construct(FosUserManager $userManager, LoginManager $loginManager, EntityManager $entityManager)
    {
        $this->userManager = $userManager;

        $this->loginManager = $loginManager;

        $this->entityManager = $entityManager;
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
        if ($this->userManager->findUserBy(['username' => $username])
            && $this->userManager->findUserBy(['password' => $password])) {
            throw new \Exception('Account already exists', 400);
        }

        $user = new User();
        $user
            ->setPlainPassword($password)
            ->setUsername($username)
            ->setEmail($email)
            ->setToken(uniqid());

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
        try {
            $user = $this->entityManager->findBy([
                'username' => $username,
                'password' => $password
            ]);

        } catch (ORMException $e) {
            throw new \Exception('Something went wrong while findingUser user', 500);
        }

        if (!$user instanceof User) {
            throw new \Exception('Wrong username or password', 500);
        }

        $this->loginManager->loginUser('main', $user);
    }

    /**
     * Get user by id
     *
     * @param $id
     * @return User
     * @throws \Exception
     */
    public function getUser($id)
    {
        try {
            $user = $this->entityManager
                ->getRepository('ManageUserBundle:User')
                ->findOneBy(['id' => $id]);

        } catch (ORMException $e) {
            throw new \Exception('Something went wrong while fetching user', 500);
        }

        if (!$user instanceof User) {
            throw new \Exception('User not found with given id', 500);
        }

        return $user;
    }
}

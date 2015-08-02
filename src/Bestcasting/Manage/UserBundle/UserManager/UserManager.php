<?php

namespace Bestcasting\Manage\UserBundle\UserManager;

use Doctrine\ORM\EntityManager;
use Bestcasting\Manage\UserBundle\Entity\User;
use FOS\UserBundle\Doctrine\UserManager as FosUserManager;
use FOS\UserBundle\Security\LoginManager;
use Symfony\Component\Security\Core\Encoder\EncoderFactory;

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
     * @var EncoderFactory
     */
    private $encoderFactory;

    /**
     * @param FosUserManager $userManager
     * @param LoginManager $loginManager
     * @param EntityManager $entityManager
     * @param EncoderFactory $encoderFactory
     */
    public function __construct(
        FosUserManager $userManager,
        LoginManager $loginManager,
        EntityManager $entityManager,
        EncoderFactory $encoderFactory
    ) {
        $this->userManager = $userManager;
        $this->loginManager = $loginManager;
        $this->entityManager = $entityManager;
        $this->encoderFactory = $encoderFactory;
    }

    /**
     * Create new user
     *
     * @param $username
     * @param $password
     * @param $email
     * @throws \Exception
     * @return User
     */
    public function create($username, $password, $email)
    {
        if ($this->userManager->findUserBy(['username' => $username])
            && $this->userManager->findUserBy(['password' => $password])
        ) {
            throw new \Exception('Account already exists', 400);
        }

        $user = new User();
        $user
            ->setPlainPassword($password)
            ->setUsername($username)
            ->setEmail($email)
            ->setToken(uniqid());

        $this->userManager->updateUser($user);

        return $user;
    }

    /**
     * Login user
     *
     * @param $username
     * @param $password
     * @throws \Exception
     * @return array
     */
    public function login($username, $password)
    {
        $user = $this->userManager->findUserByUsername($username);

        if (!$user instanceof User) {
            throw new \Exception('Wrong username or password', 500);
        }

        $encoder = $this->encoderFactory->getEncoder($user);
        if ($encoder->isPasswordValid($user->getPassword(), $password, $user->getSalt())) {
            $this->loginManager->loginUser('main', $user);
        }

        throw new \Exception('Wrong username or password', 500);
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
        $user = $this->entityManager->getRepository('ManageUserBundle:User')->findOneBy(['id' => $id]);

        if (!$user instanceof User) {
            throw new \Exception('User not found with given id', 500);
        }

        return $user;
    }
}

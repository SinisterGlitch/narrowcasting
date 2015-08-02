<?php

namespace Bestcasting\Manage\UserBundle\UserManager;

use Symfony\Component\Security\Core\Encoder\EncoderFactory;
use FOS\UserBundle\Doctrine\UserManager as FosUserManager;
use Symfony\Component\DependencyInjection\Container;
use Bestcasting\Manage\UserBundle\Entity\User;
use FOS\UserBundle\Security\LoginManager;
use FOS\UserBundle\Util\TokenGenerator;
use Doctrine\ORM\EntityManager;

/**
 * Class UserManager
 * @package Bestcasting\Manage\UserBundle\UserManager
 */
class UserManager
{
    /**
     * @var Container
     */
    private $container;

    /**
     * @param Container $container
     */
    public function __construct(Container $container)
    {
        $this->container = $container;
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
        $user = $this->getUserManager()->findUserByUsername($username);

        if (!$user instanceof User) {
            throw new \Exception('Wrong username or password', 500);
        }

        if ($this->validateUser($user, $password)) {
            $this->getLoginManager()->loginUser('main', $user);
            $this->createToken($user);

            return $user;
        }

        throw new \Exception('Wrong username or password', 500);
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
        if ($this->getUserManager()->findUserBy(['username' => $username])) {
            throw new \Exception('Username already exists', 400);
        }

        if ($this->getUserManager()->findUserBy(['email' => $email])) {
            throw new \Exception('Email already exists', 400);
        }

        $user = new User();
        $user
            ->setPlainPassword($password)
            ->setUsername($username)
            ->setEmail($email)
            ->setToken(uniqid());

        $this->getUserManager()->updateUser($user);

        return $user;
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
        $user = $this
            ->getEntityManager()
            ->getRepository('ManageUserBundle:User')
            ->findOneBy(['id' => $id]);

        if (!$user instanceof User) {
            throw new \Exception('User not found with given id', 500);
        }

        return $user;
    }

    /**
     * Validate user with given password
     *
     * @param User $user
     * @param string $password
     * @return bool
     */
    private function validateUser(User $user, $password)
    {
        $encoder = $this->getEncoderFactory()->getEncoder($user);
        if ($encoder->isPasswordValid($user->getPassword(), $password, $user->getSalt())) {
            return true;
        }

        return false;
    }

    /**
     * Creates new token for user
     *
     * @param User $user
     * @return string
     */
    private function createToken(User $user)
    {
        $token = $this->getTokenGenerator()->generateToken();
        $user->setToken($token);
        $this->getEntityManager()->flush($user);

        return $token;
    }

    /**
     * @return EntityManager
     */
    private function getEntityManager()
    {
        return $this->container->get('doctrine.orm.default_entity_manager');
    }

    /**
     * @return TokenGenerator
     */
    private function getTokenGenerator()
    {
        return $this->container->get('fos_user.util.token_generator');
    }

    /**
     * @return LoginManager
     */
    private function getLoginManager()
    {
        return $this->container->get('fos_user.security.login_manager');
    }

    /**
     * @return FosUserManager
     */
    private function getUserManager()
    {
        return $this->container->get('fos_user.user_manager');
    }

    /**
     * @return EncoderFactory
     */
    private function getEncoderFactory()
    {
        return $this->container->get('security.encoder_factory');
    }
}

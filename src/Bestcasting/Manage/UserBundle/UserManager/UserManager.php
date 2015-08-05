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
        $user = $this->findUserBy(['username' => $username]);
        if ($user instanceof User && $this->validateUser($user, $password)) {
            $user->setToken($this->createToken());

            $this->getEntityManager()->flush($user);
            $this->getLoginManager()->loginUser('main', $user);

            return $user;
        }
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
            ->setToken($this->createToken());

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
        $user = $this->findUserBy(['id' => $id]);

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
     * @param array $params
     * @return User
     */
    private function findUserBy(array $params)
    {
        return $this->getEntityManager()->getRepository('ManageUserBundle:User')->findOneBy($params);
    }

    /**
     * Creates new token for user
     *
     * @return string
     */
    private function createToken()
    {
        return $this->getTokenGenerator()->generateToken();
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

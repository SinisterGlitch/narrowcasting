<?php

namespace Bestcasting\Manage\UserBundle\Security;

use Bestcasting\Manage\UserBundle\Entity\User;
use Bestcasting\Manage\UserBundle\User\UserManager;
use Symfony\Component\Security\Core\User\UserProviderInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\Exception\UnsupportedUserException;

/**
 * Class UserProvider
 * @package Bestcasting\Manage\UserBundle\Security
 */
class UserProvider implements UserProviderInterface
{
    /**
     * @var UserManager
     */
    private $userManager;

    /**
     * @param UserManager $userManager
     */
    public function __construct(UserManager $userManager)
    {
        $this->userManager = $userManager;
    }

    /**
     * @param string $token
     * @return string
     */
    public function getUsernameByToken($token)
    {
       $user = $this->userManager->getUserByToken($token);

        return $user instanceof User ? $user->getUsername() : '';
    }

    /**
     * @param string $username
     * @return User
     */
    public function loadUserByUsername($username)
    {
        return $this->userManager->getUserByUsername($username);
    }

    /**
     * @param UserInterface $user
     * @return UserInterface|void
     */
    public function refreshUser(UserInterface $user)
    {
        throw new UnsupportedUserException();
    }

    /**
     * @param string $class
     * @return bool
     */
    public function supportsClass($class)
    {
        return 'Bestcasting\Manage\UserBundle\Entity\User' === $class;
    }
}
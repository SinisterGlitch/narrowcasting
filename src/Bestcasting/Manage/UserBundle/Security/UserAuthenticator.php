<?php

namespace Bestcasting\Manage\UserBundle\Security;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Authentication\SimplePreAuthenticatorInterface;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authentication\Token\PreAuthenticatedToken;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Core\Exception\BadCredentialsException;
use Symfony\Component\Security\Core\User\UserProviderInterface;

/**
 * Class UserAuthenticator
 * @package Bestcasting\Manage\UserBundle\Security
 */
class UserAuthenticator implements SimplePreAuthenticatorInterface
{
    /**
     * @param Request $request
     * @param $providerKey
     * @return PreAuthenticatedToken
     */
    public function createToken(Request $request, $providerKey)
    {
        $apiKey = $request->headers->get('x-api-key');

        if (!$apiKey) {
            throw new BadCredentialsException('No API key found');
        }

        return new PreAuthenticatedToken('anon.', $apiKey, $providerKey);
    }

    /**
     * @param TokenInterface $token
     * @param UserProviderInterface $userProvider
     * @param $providerKey
     * @return PreAuthenticatedToken
     */
    public function authenticateToken(TokenInterface $token, UserProviderInterface $userProvider, $providerKey)
    {
        if (!$userProvider instanceof UserProvider) {
            throw new \InvalidArgumentException('The user provider must be an instance of UserProvider');
        }

        $token = $token->getCredentials();
        $username = $userProvider->getUsernameByToken($token);

        if (!$username) {
            throw new AuthenticationException('api key does not exist');
        }

        $user = $userProvider->loadUserByUsername($username);

        return new PreAuthenticatedToken(
            $user,
            $token,
            $providerKey,
            $user->getRoles()
        );
    }

    /**
     * @param Request $request
     * @param AuthenticationException $exception
     * @return Response
     */
    public function onAuthenticationFailure(Request $request, AuthenticationException $exception)
    {
        return new Response("Authentication Failed.", 403);
    }

    /**
     * @param TokenInterface $token
     * @param $providerKey
     * @return bool
     */
    public function supportsToken(TokenInterface $token, $providerKey)
    {
        return $token instanceof PreAuthenticatedToken && $token->getProviderKey() === $providerKey;
    }
}
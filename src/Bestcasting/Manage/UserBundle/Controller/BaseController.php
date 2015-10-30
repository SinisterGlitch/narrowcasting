<?php

namespace Bestcasting\Manage\UserBundle\Controller;

use Bestcasting\Manage\UserBundle\User\UserManager;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class BaseController
 * @package Bestcasting\Manage\UserBundle\Controller
 */
abstract class BaseController extends Controller
{
    /**
     * @return UserManager
     */
    protected function getUserManager()
    {
        return $this->container->get('manage_user_manager');
    }
}

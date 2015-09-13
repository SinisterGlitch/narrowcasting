<?php

namespace Bestcasting\Manage\CoreBundle\Controller;

use Bestcasting\Manage\CoreBundle\ModelManager\ModelManager;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 *
 * Class BaseController
 * @package Bestcasting\Manage\CoreBundle\Controller
 */
abstract class BaseController extends controller
{
    /**
     * @return ModelManager
     */
    public function getModelManager()
    {
        return $this->get('manage_model_manager');
    }
}
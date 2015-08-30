<?php

namespace Bestcasting\Manage\CoreBundle\Controller;

use Bestcasting\Manage\CoreBundle\ModelManager\ModelManager;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

/**
 *
 * Class BaseController
 * @package Bestcasting\Manage\CoreBundle\Controller
 */
abstract class BaseController extends controller implements ControllerInterface
{
    /**
     * {@inheritdoc}
     */
    abstract function getAction($entity);

    /**
     * {@inheritdoc}
     */
    abstract function getCollectionAction();

    /**
     * {@inheritdoc}
     */
    abstract function postAction(Request $request);

    /**
     * {@inheritdoc}
     */
    abstract function putAction(Request $request);

    /**
     * {@inheritdoc}
     */
    abstract function deleteAction($id);

    /**
     * @return ModelManager
     */
    public function getModelManager()
    {
        return $this->get('manage_model_manager');
    }
}
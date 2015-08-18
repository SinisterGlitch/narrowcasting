<?php

namespace Bestcasting\Manage\CoreBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Doctrine\Common\Persistence\ObjectRepository;
use Symfony\Component\HttpFoundation\Request;

/**
 * Class BaseController
 * @package Bestcasting\Manage\CoreBundle\Controller
 */
abstract class BaseController extends controller implements ControllerInterface
{
    /**
     * {@inheritdoc}
     */
    abstract function getAction($id);

    /**
     * {@inheritdoc}
     */
    abstract function getAllAction();

    /**
     * {@inheritdoc}
     */
    abstract function postAction(Request $request);

    /**
     * {@inheritdoc}
     */
    abstract function deleteAction($id);

    /**
     * Fetches repository by entity name
     *
     * @param string $entityName
     * @return ObjectRepository
     */
    public function getRepository($entityName)
    {
        return $this->getDoctrine()->getManager()->getRepository('ManageCoreBundle:'.$entityName);
    }
}

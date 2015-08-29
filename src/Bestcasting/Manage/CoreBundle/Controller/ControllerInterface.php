<?php

namespace Bestcasting\Manage\CoreBundle\Controller;

use Symfony\Component\HttpFoundation\Request;

/**
 * Interface ControllerInterface
 * @package Bestcasting\Manage\CoreBundle\Controller
 */
Interface ControllerInterface
{
    /**
     * Return object with given id by using ParamConverter()
     *
     * @param object $entity
     * @return null|Object
     */
    public function getAction($entity);

    /**
     * Return all objects
     *
     * @return null|Object[]
     */
    public function getCollectionAction();

    /**
     * Create new object
     *
     * @param Request $request
     * @return null|Object
     */
    public function postAction(Request $request);

    /**
     * Update single object
     *
     * @param Request $request
     * @return null|Object
     */
    public function putAction(Request $request);

    /**
     * Delete object with given id
     *
     * @param int $id
     * @return null
     */
    public function deleteAction($id);
}

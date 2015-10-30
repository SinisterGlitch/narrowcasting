<?php

namespace Bestcasting\Manage\CoreBundle\Controller;

use Bestcasting\Manage\CoreBundle\ModelManager\ModelManager;
use Doctrine\ORM\EntityManager;
use FOS\RestBundle\Controller\FOSRestController;

/**
 *
 * Class BaseController
 * @package Bestcasting\Manage\CoreBundle\Controller
 */
abstract class BaseController extends FOSRestController
{
    /**
     * @var EntityManager
     */
    private $entityManager;

    /**
     * @param  $entity
     */
    protected function saveEntity($entity)
    {
        $em = $this->getEntityManager();

        if ($entity->getId()) {
            $em->merge($entity);
        } else {
            $em->persist($entity);
        }

        $em->flush();
    }

    /**
     * @param $entity
     * @return Object
     */
    protected function removeEntity($entity)
    {
        $this->getEntityManager()->remove($entity);
    }

    /**
     * @return EntityManager
     */
    protected function getEntityManager()
    {
        return $this->entityManager;
    }
}
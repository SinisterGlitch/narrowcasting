<?php

namespace Bestcasting\Manage\CoreBundle\Controller;

use Bestcasting\Manage\UserBundle\Entity\User;
use Doctrine\ORM\EntityManager;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 *
 * Class BaseController
 * @package Bestcasting\Manage\CoreBundle\Controller
 */
abstract class BaseController extends Controller
{
    /**
     * @return User
     */
    public function getUser()
    {
        return parent::getUser();
    }

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
        return $this->getDoctrine()->getManager();
    }
}
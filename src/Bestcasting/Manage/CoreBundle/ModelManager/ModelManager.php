<?php

namespace Bestcasting\Manage\CoreBundle\ModelManager;

use Doctrine\ORM\EntityManager;
use JMS\Serializer\Serializer;

/**
 * Class ModelManager
 * @package Bestcasting\Manage\CoreBundle\ModelManager
 */
class ModelManager
{
    /**
     * @var EntityManager
     */
    private $entityManager;
    /**
     * @var Serializer
     */
    private $serializer;

    /**
     * @param EntityManager $entityManager
     * @param Serializer $serializer
     */
    public function __construct(EntityManager $entityManager, Serializer $serializer)
    {
        $this->entityManager = $entityManager;
        $this->serializer = $serializer;
    }

    /**
     * @param $entity
     * @return Object
     */
    public function remove($entity)
    {
        $this->getEntityManager()->remove($entity);

        return $entity;
    }

    /**
     * @param array $entity
     * @param string $classDir
     * @return object
     */
    public function save(array $entity, $classDir)
    {
        $entity = $this->deserialize($entity, $classDir);
        $em = $this->getEntityManager();

        if ($entity->getId()) {
            $em->merge($entity);
        } else {
            $em->persist($entity);
        }

        $em->flush();

        return $entity;
    }

    /**
     * @param array $entity
     * @param $class
     * @return object
     */
    public function deserialize(array $entity, $class)
    {
        return $this->getSerializer()->deserialize(json_encode($entity), $class, 'json');
    }

    /**
     * @return EntityManager
     */
    public function getEntityManager()
    {
        return $this->entityManager;
    }

    /**
     * @return Serializer
     */
    public function getSerializer()
    {
        return $this->serializer;
    }
}
<?php

namespace Bestcasting\Manage\CoreBundle\Controller;

use Doctrine\Common\Persistence\ObjectRepository;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class BaseController
 * @package Bestcasting\Manage\CoreBundle\Controller
 */
class BaseController extends Controller
{
    /**
     * @param string $entityName
     * @return ObjectRepository
     */
    public function getRepository($entityName)
    {
        return $this->getDoctrine()->getManager()->getRepository('ManageCoreBundle:'.$entityName);
    }
}

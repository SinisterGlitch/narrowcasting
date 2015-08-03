<?php

namespace Bestcasting\Manage\CoreBundle\Controller;

use Bestcasting\Manage\CoreBundle\Entity\Branch;
use FOS\RestBundle\Controller\Annotations\Get;

/**
 * Class BranchController
 * @package Bestcasting\Manage\CoreBundle\Controller
 */
class BranchController extends BaseController
{
    /**
     * @Get("/branches/{id}")
     *
     * @param $id
     * @return Branch[]
     */
    public function getBranchesAction($id = null)
    {
        if ($id) {
            $entities = [$this->getRepository('Branch')->find($id)];
        } else {
            $entities = $this->getRepository('Branch')->findAll();
        }

        return $entities;
    }
}

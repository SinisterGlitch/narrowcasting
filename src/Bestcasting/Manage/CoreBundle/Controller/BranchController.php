<?php

namespace Bestcasting\Manage\CoreBundle\Controller;

use Bestcasting\Manage\CoreBundle\Entity\Branch;
use FOS\RestBundle\Controller\Annotations\Delete;
use FOS\RestBundle\Controller\Annotations\Get;
use FOS\RestBundle\Controller\Annotations\Post;
use FOS\RestBundle\Controller\Annotations\Put;
use Symfony\Component\HttpFoundation\Request;

/**
 * Class BranchController
 * @package Bestcasting\Manage\CoreBundle\Controller
 */
class BranchController extends BaseController
{
    /**
     * TODO: check for when id doest not exist
     *
     * @Get("/branches/{id}")
     * @param int $id
     * @return Branch
     */
    public function getAction($id)
    {
        return $this->getRepository('Branch')->find($id);
    }

    /**
     * TODO: check for nothing is found
     *
     * @Get("/branches")
     * @return Branch[]
     */
    public function getAllAction()
    {
        return $this->getRepository('Branch')->findAll();
    }

    /**
     * TODO: add validator
     *
     * @Post("/branches")
     * @param Request $request
     * @return Branch
     */
    public function postAction(Request $request)
    {
        $formData = $request->get('data');

        $entity = new Branch();

        return $entity;
    }

    /**
     * TODO: add validator
     *
     * @Put("/branches")
     * @param Request $request
     * @return Branch
     */
    public function putAction(Request $request)
    {
        $formData = $request->get('data');

        $entity = new Branch();

        return $entity;
    }

    /**
     * TODO: add success response
     *
     * @Delete("/branches")
     * @param int $id
     * @return void
     */
    public function deleteAction($id)
    {
        $entity = $this->getRepository('Branch')->find($id);
        $this->getDoctrine()->getManager()->remove($entity);
    }
}

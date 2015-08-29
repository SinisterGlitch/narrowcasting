<?php

namespace Bestcasting\Manage\CoreBundle\Controller;

use Bestcasting\Manage\CoreBundle\Entity\Branch;
use FOS\RestBundle\Controller\Annotations\Delete;
use FOS\RestBundle\Controller\Annotations\Get;
use FOS\RestBundle\Controller\Annotations\Post;
use FOS\RestBundle\Controller\Annotations\Put;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Request;

/**
 * Class BranchController
 * @package Bestcasting\Manage\CoreBundle\Controller
 */
class BranchController extends BaseController
{
    /**
     * @Get("/branches/{id}")
     * @ParamConverter("branch", class="ManageCoreBundle:Branch")
     *
     * @param Branch $branch
     * @return Branch
     */
    public function getAction($branch)
    {
        return $branch;
    }

    /**
     * TODO: check for nothing is found
     *
     * @Get("/branches")
     * @return Branch[]
     */
    public function getCollectionAction()
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

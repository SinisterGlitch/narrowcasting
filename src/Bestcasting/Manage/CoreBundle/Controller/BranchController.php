<?php

namespace Bestcasting\Manage\CoreBundle\Controller;

use Bestcasting\Manage\CoreBundle\Entity\Branch;
use Bestcasting\Manage\CoreBundle\Entity\BranchRepository;
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
     * @Get("/branches")
     * @return Branch[]
     */
    public function getCollectionAction()
    {
        return $this->getBranchRepository()->getCollection();
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
     * TODO: check success response
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

    /**
     * @return BranchRepository
     */
    private function getBranchRepository()
    {
        return $this->getDoctrine()->getRepository('ManageCoreBundle:Branch');
    }
}

<?php

namespace Bestcasting\Manage\CoreBundle\Controller;

use Bestcasting\Manage\CoreBundle\Entity\BranchRepository;
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
    const CLASS_NAME = 'Bestcasting\Manage\CoreBundle\Entity\Branch';

    /**
     * @Get("/branches/{id}")
     *
     * @param Branch $branch
     * @return Branch
     */
    public function getAction(Branch $branch)
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
     * @Post("/branches")
     * @param Request $request
     * @return Branch
     */
    public function postAction(Request $request)
    {
        return $this->getModelManager()->save($request->get('data'), self::CLASS_NAME);
    }

    /**
     * @Put("/branches")
     * @param Request $request
     * @return Branch
     */
    public function putAction(Request $request)
    {
        return $this->getModelManager()->save($request->get('data'), self::CLASS_NAME);
    }

    /**
     * @Delete("/branches")
     *
     * @param Branch $branch
     * @return Branch
     */
    public function deleteAction(Branch $branch)
    {
        return $this->getModelManager()->remove($branch);
    }

    /**
     * @return BranchRepository
     */
    private function getBranchRepository()
    {
        return $this->getDoctrine()->getRepository('ManageCoreBundle:Branch');
    }
}

<?php

namespace Bestcasting\Manage\CoreBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Bestcasting\Manage\CoreBundle\Entity\BranchRepository;
use Bestcasting\Manage\CoreBundle\Entity\Branch;
use FOS\RestBundle\Controller\Annotations\Delete;
use FOS\RestBundle\Controller\Annotations\Get;
use FOS\RestBundle\Controller\Annotations\Post;
use FOS\RestBundle\Controller\Annotations\Put;

/**
 * Class BranchController
 * @package Bestcasting\Manage\CoreBundle\Controller
 */
class BranchController extends BaseController
{
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
     * @ParamConverter("branch", converter="fos_rest.request_body")
     *
     * @param Branch $branch
     * @return Branch
     */
    public function postAction(Branch $branch)
    {
        return $this->getModelManager()->save($branch);
    }

    /**
     * @Put("/branches")
     * @ParamConverter("branch", converter="fos_rest.request_body")
     *
     * @param Branch $branch
     * @return Branch
     */
    public function putAction(Branch $branch)
    {
        return $this->getModelManager()->save($branch);
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

<?php

namespace Bestcasting\Manage\CoreBundle\Controller;

use FOS\RestBundle\Controller\Annotations\View;
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
     * @View(serializerGroups={"details"})
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
     * @View(serializerGroups={"list"})
     * @return Branch[]
     */
    public function getCollectionAction()
    {
        return $this->getBranchRepository()->getCollection($this->getUser());
    }

    /**
     * @Post("/branches")
     * @ParamConverter("branch",
     *      converter="fos_rest.request_body",
     *      options={"deserializationContext"={"groups"={"details"}}}
     * )
     *
     * @param Branch $branch
     * @return Branch
     */
    public function postAction(Branch $branch)
    {
        $this->saveEntity($branch);

        return $branch;
    }

    /**
     * @Put("/branches")
     * @ParamConverter("branch",
     *      converter="fos_rest.request_body",
     *      options={"deserializationContext"={"groups"={"details"}}}
     * )
     *
     * @param Branch $branch
     * @return Branch
     */
    public function putAction(Branch $branch)
    {
        $this->saveEntity($branch);

        return $branch;
    }

    /**
     * @Delete("/branches")
     * @param Branch $branch
     */
    public function deleteAction(Branch $branch)
    {
        $this->removeEntity($branch);
    }

    /**
     * @return BranchRepository
     */
    private function getBranchRepository()
    {
        return $this->getDoctrine()->getRepository('ManageCoreBundle:Branch');
    }
}

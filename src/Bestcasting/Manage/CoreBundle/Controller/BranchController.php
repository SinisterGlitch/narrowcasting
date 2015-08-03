<?php

namespace Bestcasting\Manage\CoreBundle\Controller;

use Bestcasting\Manage\CoreBundle\Entity\Branch;
use FOS\RestBundle\Controller\Annotations\Get;
use Symfony\Component\HttpFoundation\Request;

/**
 * Class BranchController
 * @package Bestcasting\Manage\CoreBundle\Controller
 */
class BranchController extends BaseController
{
    /**
     * @Get("/branches/{id}")
     * @param int $id
     * @return Branch[]
     */
    public function getAction($id)
    {
        if ($id) {
            $result = $this->getRepository('Branch')->find($id);
        } else {
            $result = $this->getRepository('Branch')->findAll();
        }

        return $result;
    }

    /**
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
     * @param $id
     */
    public function deleteAction($id)
    {
        $entity = $this->getRepository('Branch')->find($id);
        $this->getDoctrine()->getManager()->remove($entity);
    }
}

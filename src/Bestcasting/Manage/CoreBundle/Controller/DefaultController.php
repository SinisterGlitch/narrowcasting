<?php

namespace Bestcasting\Manage\CoreBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class DefaultController
 * @package Bestcasting\Manage\CoreBundle\Controller
 */
class DefaultController extends Controller
{
    /**
     * @param $name
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function indexAction()
    {
        return $this->render('ManageCoreBundle:Default:index.html.twig');
    }
}

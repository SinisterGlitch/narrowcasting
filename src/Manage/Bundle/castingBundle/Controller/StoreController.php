<?php

namespace Manage\Bundle\castingBundle\Controller;

use Manage\Bundle\castingBundle\Entity\Store;
use Manage\Bundle\castingBundle\Form\StoreType;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;

/**
 * Class StoreController
 * @Security("has_role('ROLE_USER')")
 */
class StoreController extends Controller
{
    /**
     * Index
     *
     * @Route("/store")
     */
    public function indexAction()
    {
        return $this->forward('ManagecastingBundle:Store:list');
    }

    /**
     * List Stores
     *
     * @Route("/store/index")
     * @Template()
     */
    public function listAction()
    {
        return array('stores' => $this->getUser()->getStores());
    }

    /**
     * Show Store
     *
     * @Route("/store/detail/{id}")
     * @ParamConverter("detail", class="ManagecastingBundle:Store")
     * @Template()
     */
    public function detailAction(Store $store)
    {
        return array(
            'screens' => $store->getScreens(),
            'store' => $store
        );
    }

    /**
     * Delete Store
     * @Route("/store/delete/{id}")
     * @ParamConverter("delete", class="ManagecastingBundle:Store")
     * @Template()
     *
     * @param Store $store
     * @return array|RedirectResponse
     */
    public function deleteAction(Store $store)
    {
        try {
            $em = $this->getDoctrine()->getManager();
            $em->remove($store);
            $em->flush();
        } catch (\Exception $e) {

            return $this->redirect(
                $this->generateUrl('manage_casting_store_detail', array('id' => $store->getId()), true)
            );
        }

        return $this->redirect(
            $this->generateUrl('manage_casting_store_list')
        );
    }

    /**
     * New Store
     *
     * @Route("/store/new")
     * @Template()
     */
    public function newAction(Request $request)
    {
        $store = new Store();
        $form = $this->createForm(new StoreType(), $store);
        $form->handleRequest($request);

        if ($form->isValid()) {
            // Set and Save Store
            $store->setUser($this->getUser());
            $store = $form->getData();
            $this->saveStore($store);
        }

        return array(
            'form' => $form->createView()
        );
    }

    /**
     * Edit store
     *
     * @Route("/store/edit/{id}")
     * @ParamConverter("edit", class="ManagecastingBundle:Store")
     * @Template()
     */
    public function editAction(Request $request, Store $store)
    {
        $form = $this->createForm(new StoreType(), $store);
        $form->handleRequest($request);

        if ($form->isValid()) {
            // Set and Save Store
            $store = $form->getData();
            $this->saveStore($store);
        }

        return array(
            'form' => $form->createView(),
            'store' => $store
        );
    }

    /**
     * Save Store
     *
     * @param Store $store
     * @return RedirectResponse
     */
    private function saveStore(Store $store)
    {
        $message = 'Store Saved';
        $type = 'success';

        try {
            $em = $this->getDoctrine()->getManager();
            $em->persist($store);
            $em->flush();
        } catch (\Exception $e) {
            $message = 'Store could not be saved';
            $type = 'error';
        }

        $this->get('session')->getFlashBag()->add($type, $message);

        return $this->redirect(
            $this->generateUrl('manage_casting_store_detail', array('id' => $store->getId()), true)
        );
    }
}

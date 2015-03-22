<?php

namespace Manage\Bundle\castingBundle\Sidebar;

/**
 * Class SidebarBuilder
 * @package Manage\Bundle\castingBundle\Sidebar
 */
class SidebarBuilder
{
    protected $sidebarItems = [];

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->buildSidebar();
    }

    /*
     * Build sidebar items
     */
    private function buildSidebar()
    {
        $this->buildDefaulitems();
        $this->buildStoreItems();
    }


    /**
     * Build Default items for sidebar listing
     */
    private function buildDefaulitems()
    {
        $this->sidebarItems[] = [
            'label' => 'Dashboard',
            'path' => 'manage_casting_default_index'
        ];
    }

    /**
     * Build Store items for sidebar listing
     */
    private function buildStoreItems()
    {
        $this->sidebarItems[] = [
            'label' => 'Dashboard',
            'path'  => 'manage_casting_default_index',
            'subitems' => [
                'label' => 'New',
                'path'  => 'manage_casting_store_new',
            ], [
                'label' => 'List',
                'path'  => 'manage_casting_store_new',
            ]
        ];
    }
}
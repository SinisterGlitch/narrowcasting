<?php

namespace Manage\Bundle\castingBundle\Entity;

use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use FOS\UserBundle\Model\User as BaseUser;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * @ORM\Entity
 * @ORM\Table(name="User")
 */
class User extends BaseUser
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * @var Collection|Store[]
     *
     * @ORM\OneToMany(targetEntity="Store", mappedBy="user")
     **/
    private $stores;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->stores = new ArrayCollection();

        parent::__construct();
    }

    /**
     * @return Collection|Store[]
     */
    public function getStores()
    {
        return $this->stores;
    }

    /**
     * @param Store $store
     */
    public function addStore(Store $store)
    {
        $this->stores->add($store);
    }

    /**
     * @param Store $store
     */
    public function removeStore(Store $store)
    {
        $this->stores->remove($store);
    }

    /**
     * Returns all slides
     *
     * @return Slide[]
     */
    public function getSlides()
    {
        $result = array();
        foreach ($this->getPlaylists() as $playlist) {
            foreach ($playlist->getSlides() as $slide) {
                $result[] = $slide;
            }
        }

        return $result;
    }

    /**
     * Returns all screens
     *
     * @return Screen[]
     */
    public function getScreens()
    {
        $result = array();
        foreach ($this->getStores() as $store) {
            foreach ($store->getScreens() as $screen) {
                $result[] = $screen;
            }
        }

        return $result;
    }

    /**
     * Returns all playlists
     *
     * @return Playlist[]
     */
    public function getPlaylists()
    {
        $result = array();
        foreach ($this->getScreens() as $screen) {
            foreach ($screen->getPlaylists() as $playlist) {
                $result[] = $playlist;
            }
        }

        return $result;
    }
}
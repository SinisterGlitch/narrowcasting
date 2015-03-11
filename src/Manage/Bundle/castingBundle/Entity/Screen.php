<?php

namespace Manage\Bundle\castingBundle\Entity;

use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * Screen
 *
 * @ORM\Table()
 * @ORM\Entity(repositoryClass="Manage\Bundle\castingBundle\Entity\ScreenRepository")
 */
class Screen
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=255)
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="string", length=255)
     */
    private $description;

    /**
     * @var string
     *
     * @ORM\Column(name="type", type="string", length=255)
     */
    private $type;

    /**
     * @var string
     *
     * @ORM\Column(name="resolution", type="string", length=255)
     */
    private $resolution;

    /**
     * @ORM\ManyToOne(targetEntity="Store", inversedBy="screens")
     * @ORM\JoinColumn(name="store_id", referencedColumnName="id")
     **/
    private $store;

    /**
     * @var Collection|Playlist[]
     *
     * @ORM\OneToMany(targetEntity="Playlist", mappedBy="screen")
     **/
    private $playlists;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->playlists = new ArrayCollection();
    }

    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set name
     *
     * @param string $name
     * @return Screen
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string 
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set description
     *
     * @param string $description
     * @return Screen
     */
    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get description
     *
     * @return string 
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set type
     *
     * @param string $type
     * @return Screen
     */
    public function setType($type)
    {
        $this->type = $type;

        return $this;
    }

    /**
     * Get type
     *
     * @return string 
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * Set resolution
     *
     * @param string $resolution
     * @return Screen
     */
    public function setResolution($resolution)
    {
        $this->resolution = $resolution;

        return $this;
    }

    /**
     * Get resolution
     *
     * @return string 
     */
    public function getResolution()
    {
        return $this->resolution;
    }

    /**
     * @return mixed
     */
    public function getStore()
    {
        return $this->store;
    }

    /**
     * @param Store $store
     */
    public function setStore(Store $store)
    {
        $this->store = $store;
    }

    /**
     * @return Collection|Playlist[]
     */
    public function getPlaylists()
    {
        return $this->playlists;
    }

    /**
     * @param Playlist $playlist
     */
    public function addPlaylist(Playlist $playlist)
    {
        $this->playlists->add($playlist);
    }

    /**
     * @param Playlist $playlist
     */
    public function removePlaylist(Playlist $playlist)
    {
        $this->playlists->remove($playlist);
    }
}

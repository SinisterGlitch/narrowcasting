<?php

namespace Manage\Bundle\castingBundle\Entity;

use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * Playlist
 *
 * @ORM\Table()
 * @ORM\Entity(repositoryClass="Manage\Bundle\castingBundle\Entity\PlaylistRepository")
 */
class Playlist
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
     * @ORM\Column(name="active", type="boolean")
     */
    private $active;

    /**
     * @ORM\ManyToMany(targetEntity="Screen", inversedBy="playlists")
     * @ORM\JoinColumn(name="screen_id", referencedColumnName="id")
     **/
    private $screen;

    /**
     * @var Collection|Slide[]
     *
     * @ORM\OneToMany(targetEntity="Slide", mappedBy="playlist")
     **/
    private $slides;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->slides = new ArrayCollection();
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
     * @return Playlist
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
     * @return Playlist
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
     * Set active
     *
     * @param string $active
     * @return Playlist
     */
    public function setActive($description)
    {
        $this->active = $description;

        return $this;
    }

    /**
     * Get active
     *
     * @return string
     */
    public function getActive()
    {
        return $this->active;
    }

    /**
     * @return mixed
     */
    public function getScreen()
    {
        return $this->screen;
    }

    /**
     * @param Screen $screen
     */
    public function setScreen(Screen $screen)
    {
        $this->screen = $screen;
    }

    /**
     * @return Collection|Slide[]
     */
    public function getSlides()
    {
        return $this->slides;
    }

    /**
     * @param Slide $slide
     */
    public function addSlide(Slide $slide)
    {
        $this->slides->add($slide);
    }

    /**
     * @param Slide $slide
     */
    public function removeSlide(Slide $slide)
    {
        $this->slides->remove($slide);
    }
}

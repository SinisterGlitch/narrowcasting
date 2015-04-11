<?php

namespace Manage\Bundle\castingBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\HttpFoundation\File\UploadedFile;

/**
 * Slide
 *
 * @ORM\Table()
 * @ORM\Entity(repositoryClass="Manage\Bundle\castingBundle\Entity\SlideRepository")
 */
class Slide
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
     * @ORM\Column(name="resolution", type="string", length=255)
     */
    private $resolution;

    /**
     * @var string
     *
     * @ORM\Column(name="data_type", type="string", length=255)
     */
    private $dataType;

    /**
     * @var string
     *
     * @ORM\Column(name="size", type="string", length=255)
     */
    private $size;

    /**
     * @var null|UploadedFile
     *
     * @Assert\File(maxSize="6000000")
     */
    private $file;

    /**
     * @var string
     *
     * @ORM\Column(name="path", type="string", length=245, nullable=false)
     */
    private $path;

    /**
     * @ORM\ManyToMany(targetEntity="Playlist", inversedBy="slides")
     * @ORM\JoinColumn(name="playlist_id", referencedColumnName="id")
     **/
    private $playlist;

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
     * @return Slide
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
     * @return Slide
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
     * Set resolution
     *
     * @param string $resolution
     * @return Slide
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
     * Set dataType
     *
     * @param string $dataType
     * @return Slide
     */
    public function setDataType($dataType)
    {
        $this->dataType = $dataType;

        return $this;
    }

    /**
     * Get dataType
     *
     * @return string 
     */
    public function getDataType()
    {
        return $this->dataType;
    }

    /**
     * Set size
     *
     * @param string $size
     * @return Slide
     */
    public function setSize($size)
    {
        $this->size = $size;

        return $this;
    }

    /**
     * Get size
     *
     * @return string 
     */
    public function getSize()
    {
        return $this->size;
    }

    /**
     * @return mixed
     */
    public function getPlaylist()
    {
        return $this->playlist;
    }

    /**
     * @param Playlist $playlist
     */
    public function setPlaylist(Playlist $playlist)
    {
        $this->playlist = $playlist;
    }

    /**
     * Sets file.
     *
     * @param UploadedFile $file
     */
    public function setFile(UploadedFile $file = null)
    {
        $this->file = $file;
    }

    /**
     * Get file.
     *
     * @return null|string|UploadedFile
     */
    public function getFile()
    {
        if (!$this->file instanceof UploadedFile && $this->getPath()) {
            return new File($this->getPublicPath());
        }

        return $this->file;
    }

    /**
     * Sets path.
     *
     * @param null|string $file
     */
    public function setPath($path = null)
    {
        $this->path = $path;
    }

    /**
     * Get path.
     *
     * @return null|string
     */
    public function getPath()
    {
        return $this->path;
    }

    public function getRealPath()
    {
        return realpath($this->getUploadRootDir() . '/' . $this->getPath());
    }

    public function getPublicPath()
    {
        return $this->getUploadDir() . '/' . $this->getPath();
    }

    /**
     *
     */
    public function upload()
    {
        // the file property can be empty if the field is not required
        if (null === $this->getFile()) {
            return;
        }

        $filename = md5(uniqid(rand(), true)) . '.' . $this->getFile()->getClientOriginalExtension();

        // use the original file name here but you should
        // sanitize it at least to avoid any security issues

        // move takes the target directory and then the
        // target filename to move to
        $this->getFile()->move(
            $this->getUploadRootDir(),
            $filename
        );

        // set the path property to the filename where you've saved the file
        $this->path = $filename;

        // clean up the file property as you won't need it anymore
        $this->file = null;
    }

    /**
     * @return string
     */
    protected function getUploadRootDir()
    {
        // the absolute directory path where uploaded
        // documents should be saved
        return __DIR__ . '/../../../../../web/' . $this->getUploadDir();
    }

    /**
     * @return string
     */
    protected function getUploadDir()
    {
        // get rid of the __DIR__ so it doesn't screw up
        // when displaying uploaded doc/image in the view.
        return 'uploads/slides';
    }
}

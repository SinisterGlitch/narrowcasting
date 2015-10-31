<?php

namespace Bestcasting\Manage\UserBundle\Entity;

use Bestcasting\Manage\CoreBundle\Entity\Branch;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\OneToMany;
use FOS\UserBundle\Model\User as BaseUser;

/**
 * @ORM\Entity(repositoryClass="UserRepository")
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
     * @var string
     *
     * @ORM\Column(type="string")
     */
    protected $token;

    /**
     * @var Branch[]
     * @OneToMany(targetEntity="Bestcasting\Manage\CoreBundle\Entity\Branch", mappedBy="user")
     **/
    private $branches;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->branches = new ArrayCollection();
        parent::__construct();
    }

    /**
     * @return string
     */
    public function getToken()
    {
        return $this->token;
    }

    /**
     * @param string $token
     */
    public function setToken($token)
    {
        $this->token = $token;
    }

    /**
     * @return Branch
     */
    public function getBranches()
    {
        return $this->branches;
    }

    /**
     * @param Branch $branch
     * @return $this
     */
    public function addBranch(Branch $branch)
    {
        $this->branches->add($branch);

        return $this;
    }

    /**
     * @param Branch $branch
     */
    public function removeBranch(Branch $branch)
    {
        $this->branches->remove($branch);
    }
}
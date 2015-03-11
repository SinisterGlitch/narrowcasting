<?php

namespace Manage\Bundle\castingBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class PlaylistType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name')
            ->add('description')
            ->add('screen', 'entity', array(
                'class' => 'ManagecastingBundle:Screen',
                'property' => 'name',
            ))
            ->add('active')
            ->add('save', 'submit', array('label' => 'Submit'))
        ;
    }
    
    /**
     * @param OptionsResolverInterface $resolver
     */
    public function setDefaultOptions(OptionsResolverInterface $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'Manage\Bundle\castingBundle\Entity\Playlist'
        ));
    }

    /**
     * @return string
     */
    public function getName()
    {
        return 'manage_bundle_castingbundle_playlist';
    }
}

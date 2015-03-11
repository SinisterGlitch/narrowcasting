<?php

namespace Manage\Bundle\castingBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class SlideType extends AbstractType
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
            ->add('playlist', 'entity', array(
                'class' => 'ManagecastingBundle:Playlist',
                'property' => 'name',
            ))
            ->add('file')
            ->add('save', 'submit', array('label' => 'Submit'))
        ;
    }
    
    /**
     * @param OptionsResolverInterface $resolver
     */
    public function setDefaultOptions(OptionsResolverInterface $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'Manage\Bundle\castingBundle\Entity\Slide'
        ));
    }

    /**
     * @return string
     */
    public function getName()
    {
        return 'manage_bundle_castingbundle_slide';
    }
}

<?php

namespace Manage\Bundle\castingBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class StoreType extends AbstractType
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
            ->add('street')
            ->add('houseNumber')
            ->add('city')
            ->add('zipcode')
            ->add('save', 'submit', array('label' => 'Submit'))
        ;
    }
    
    /**
     * @param OptionsResolverInterface $resolver
     */
    public function setDefaultOptions(OptionsResolverInterface $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'Manage\Bundle\castingBundle\Entity\Store'
        ));
    }

    /**
     * @return string
     */
    public function getName()
    {
        return 'manage_bundle_castingbundle_store';
    }
}

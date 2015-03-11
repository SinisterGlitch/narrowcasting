<?php

namespace Manage\Bundle\castingBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class ScreenType extends AbstractType
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
            ->add('type')
            ->add('resolution')
            ->add('store', 'entity', array(
                'class' => 'ManagecastingBundle:Store',
                'property' => 'name',
            ))
            ->add('save', 'submit', array('label' => 'Submit'))
        ;
    }

    /**
     * @param OptionsResolverInterface $resolver
     */
    public function setDefaultOptions(OptionsResolverInterface $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'Manage\Bundle\castingBundle\Entity\Screen'
        ));
    }

    /**
     * @return string
     */
    public function getName()
    {
        return 'manage_bundle_castingbundle_screen';
    }
}

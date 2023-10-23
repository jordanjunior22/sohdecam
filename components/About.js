import React from 'react'
import './about.css'
import dynamic from 'next/dynamic'
import {RiMentalHealthFill} from 'react-icons/ri'

const ImageRotator = dynamic(() => import('@/components/ImageRotator'));

export default function About() {
    const images = ['image1.jpg', 'homepage2.jpg', 'image2.jpg'];

  return (
    <div className='about PaddingAll'>
        <h2 className='MarginTopAndBottom title Flex-x-direction'><RiMentalHealthFill className='mental'/> ABOUT SOHDECAM</h2>
        <p className='AddOpacity'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non venenatis urna. 
            Proin a ex quis nulla euismod bibendum. Integer vel interdum ex. Nulla facilisi. 
            Curabitur nec quam et elit dignissim dapibus. Vivamus ac semper tellus, vel viverra est.
             Sed commodo neque at ipsum ultricies.
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
             Sed non venenatis urna. Proin a ex quis nulla euismod bibendum. Integer vel interdum ex. 
             Nulla facilisi. Curabitur nec quam et elit dignissim dapibus. ac semper tellus, vel viverra est. 
             Sed commodo neque at ipsum ultricies.
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
             Sed non venenatis urna. Proin a ex quis nulla euismod bibendum. Integer vel interdum ex. 
             Nulla facilisi. Curabitur nec quam et elit dignissim dapibus. ac semper tellus, vel viverra est. 
             Sed commodo neque at ipsum ultricies.</p>
        <ImageRotator images={images}/>

        <div className='about-content Flex-x-direction MarginTopAndBottom' >
            <div className='Flex-y-direction card'>
                <h4>Our Vision</h4>
                <p className='AddOpacity'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non venenatis urna. 
                    Proin a ex quis nulla euismod bibendum. Integer vel interdum ex. Nulla facilisi. 
                    Curabitur nec quam et elit dignissim dapibus. Vivamus ac semper tellus, vel viverra est.
                    Sed commodo neque at ipsum ultricies.</p>
            </div>
            <div className='Flex-y-direction card'>
                <h4>Our Mission</h4>
                <p className='AddOpacity'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non venenatis urna. 
                    Proin a ex quis nulla euismod bibendum. Integer vel interdum ex. Nulla facilisi. 
                    Curabitur nec quam et elit dignissim dapibus. 
                     ac semper tellus, vel viverra est. Sed commodo neque at ipsum ultricies.</p>
            </div>
        </div>
    </div>
  ) 
}

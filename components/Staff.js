"use client"
import React from 'react'
import './staff.css'
import { RiMentalHealthFill } from 'react-icons/ri'
export default function Staff() {
  return (
    <div className='staff PaddingAll Flex-y-direction'>
        <h2 className='MarginTopAndBottom title Flex-x-direction'><RiMentalHealthFill className='mental'/> MEET OUR STAFF</h2>
        <p className='AddOpacity TextCenter'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non venenatis urna. 
            Proin a ex quis nulla euismod bibendum. Integer vel interdum ex. Nulla facilisi. Curabitur nec 
            quam et elit dignissim dapibus. Vivamus ac semper tellus, vel viverra est. Sed commodo neque at 
            ipsum ultricies.</p>
        <div className='staff-container MarginTopAndBottom'>

            <div className='staff-person MarginLeftAndRight'>
                <div>
                    <img src='/doctor.jpg' alt='person'/>
                </div>
                <div className='staff-detail'>
                    <h4>Medical Doctor</h4>
                    <p className='AddOpacity'>Dr Didier Kheambo</p>
                </div>
            </div>

            <div className='staff-person MarginLeftAndRight'>
                <div>
                    <img src='/doctor.jpg' alt='person'/>
                </div>
                <div className='staff-detail'>
                    <h4>Medical Doctor</h4>
                    <p className='AddOpacity'>Dr Didier Kheambo</p>
                </div>
            </div>

            <div className='staff-person MarginLeftAndRight'>
                <div>
                    <img src='/doctor.jpg' alt='person'/>
                </div>
                <div className='staff-detail'>
                    <h4>Medical Doctor</h4>
                    <p className='AddOpacity'>Dr Didier Kheambo</p>
                </div>
            </div>

            <div className='staff-person MarginLeftAndRight'>
                <div>
                    <img src='/doctor.jpg' alt='person'/>
                </div>
                <div className='staff-detail'>
                    <h4>Medical Doctor</h4>
                    <p className='AddOpacity'>Dr Didier Kheambo</p>
                </div>
            </div>

            <div className='staff-person MarginLeftAndRight'>
                <div>
                    <img src='/doctor.jpg' alt='person'/>
                </div>
                <div className='staff-detail'>
                    <h4>Medical Doctor</h4>
                    <p className='AddOpacity'>Dr Didier Kheambo</p>
                </div>
            </div>

            <div className='staff-person MarginLeftAndRight'>
                <div>
                    <img src='/doctor.jpg' alt='person'/>
                </div>
                <div className='staff-detail'>
                    <h4>Medical Doctor</h4>
                    <p className='AddOpacity'>Dr Didier Kheambo</p>
                </div>
            </div>

        </div>
    </div>

  )
}

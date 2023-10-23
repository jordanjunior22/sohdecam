"use client"
import React from 'react'
import { RiMentalHealthFill } from 'react-icons/ri'
import './contact.css'

export default function Contact() {
  return (
    <div className='contact Flex-y-direction PaddingAll'>
        <h2 className='MarginTopAndBottom title Flex-x-direction'><RiMentalHealthFill className='mental'/> CONTACT US</h2>

        <div className='contact-form MarginTopAndBottom Flex-x-direction'>
            <div className='contact-image'>
                
            </div>
            <div className='div-form'>
            <form className='contact-details Flex-y-direction PaddingLeftAndRight '>
                <p className='AddOpacity title-getintouch'>Get In Touch With Us</p>
                <div className='Flex-x-direction names'>
                    <input type='text' placeholder='First Name'/>
                    <input type='text' placeholder='Last Name'/>
                </div>
                <input type='email' placeholder='example@gmail.com'/>
                <input type='text' placeholder='+237 676828121'/>
                <textarea placeholder='message'/>
                <button type='submit' className='default-cta-button send-btn'>Send</button>
            </form>
            </div>
            
        </div>
    </div>
  )
}

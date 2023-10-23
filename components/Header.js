import React from 'react'
import './header.css'
import {BsArrowRight,BsFillTelephoneFill,BsClockHistory} from 'react-icons/bs'
import {GiHealthCapsule} from 'react-icons/gi'

export default function Header() {
  return (
    <div>
        
        <div className='header-content Flex-y-direction PaddingLeftAndRight'>
            <h3>WELCOME TO SOHDECAM</h3>
            <h1>SOLIDARITY HEALTH AND DEVELOPMENT EFFORT CAMEROON
            </h1>
            <p className='bg-shadow'>The Passion To Prevent The Occurrence Of Diseases And Save Lives</p>
            <p className='AddOpacity'>our unwavering mission is to provide exceptional healthcare to all, with a particular dedication to underprivileged communities. We accomplish this through a harmonious integration of clinical practice, education, and research, prioritizing cooperation and collaboration over competition.</p>
            <div className='header-buttons Flex-x-direction'>
                <button className='default-cta-button more-btn'>Explore <GiHealthCapsule className='arrow'/></button>
                <button className='default-cta-button contact-btn'>Contact Us</button>
            </div>
        </div>
        <div className='header-box Flex-x-direction PaddingAll'>
                <div className='header-box-content Flex-y-direction set-width '>
                    <BsFillTelephoneFill className='header-phone-icon'/>
                    <p className='header-emergency'>Emergency</p>
                    <h2>Contact</h2>
                   
                    <p className='AddOpacity'>Please feel free to contact our friendly reception staff with any general or medical inquiry </p>
                    
                    <p className='AddOpacity'> +237 676828121</p>
                </div>
                <div className='header-box-content Flex-y-direction set-width '>
                    <BsClockHistory className='header-clock-icon'/>
                    <p className='header-opening'>Opening</p>
                    <h2>Hours</h2>
                    
                    <div className='dates Flex-x-direction AddOpacity'>
                        <p>Monday - Friday</p>
                        <p>8:00AM - 20:00PM</p>
                    </div>
                    
                    <div className='dates Flex-x-direction AddOpacity'>
                        <p>Saturday - Sunday</p>
                        <p>9:00AM - 18:00PM</p>
                    </div>
                    
                </div>
                
        </div>
    </div>
  )
}

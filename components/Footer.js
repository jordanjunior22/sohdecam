import React from 'react'
import './footer.css'
import Link from 'next/link'
import { BsFacebook,BsLinkedin,BsTwitter,BsFillTelephoneFill } from 'react-icons/bs'
import {IoLocationSharp} from 'react-icons/io5'

export default function Footer() {
  return (
    <div>
      <div className='footer Flex-x-direction PaddingAll'>
      <div>
        <div className='navbar-logo'>SOHDECAM</div>
        <p className='AddOpacity'>Sohlidarity health developement effort cameroon</p>
        <div className='Flex-x-direction socials'>
          <BsFacebook/>
          <BsLinkedin/>
          <BsTwitter/>
        </div>
      </div>
      <div className='Flex-y-direction'>
          <div className='location-div'>
            <h4>Location</h4>
            <div className='PaddingAll'>
            <p className='AddOpacity '><IoLocationSharp/> X559+GPG Bamenda, Cameroon</p>
            <p className='AddOpacity '><IoLocationSharp/> J69V+6Q2 Mbouda, Cameroon</p>
            </div>

          </div>
          <div className='contact-div'>
            <h4>Contact</h4>
            <div className='PaddingAll'>
            <p className='AddOpacity '><BsFillTelephoneFill/> +237 696358611</p>
            <p className='AddOpacity '><BsFillTelephoneFill/> +237 678495860</p>
            </div>
            
          </div>
      </div>
      <div className=''>
        <h4>Links</h4>
        <div className='PaddingAll Flex-y-direction'>
        <Link href='/' className='LinkStyles footer-links-hover'>Home</Link>
        <Link href='/about' className='LinkStyles footer-links-hover'>About</Link>
        <Link href='/services' className='LinkStyles footer-links-hover'>Services</Link>
        <Link href='/contact' className='LinkStyles footer-links-hover'>Contact</Link>
        </div>

      </div>
    </div>
    <div className='Flex-y-direction linestyle'>
      <div className='linediv'></div>
    </div>
    
    <p className=' copyright'>Copyright @2023 | Developer Jordan Junior</p>
    </div>

  )
}

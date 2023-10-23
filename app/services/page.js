"use client"
import React from 'react'
import './servicesglobal.css'
import dynamic from 'next/dynamic'
const Services = dynamic(() => import('@/components/Services'))
const Consultation = dynamic(() => import('@/components/Consultation'))

export default function page() {
  return (
    <div>
        <h1 className='MarginTopAndBottom title TextCenter'>Our Services</h1>
        <div className='service-image'>
            <img src='./services.jpg' alt='thank you'/>
        </div>
        <Services/>
        <Consultation/>
    </div>
  )
}

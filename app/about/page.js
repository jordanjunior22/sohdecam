"use client"
import React from 'react'
import dynamic from 'next/dynamic'


const About = dynamic(() => import('@/components/About'))
const Staff = dynamic(() => import('@/components/Staff'))
const Experience = dynamic(() => import('@/components/Experience'))
const AboutUsBanner = dynamic(() => import('@/components/AboutUsBanner'))

export default function page() {
  return (
    <div>
        <AboutUsBanner/>
        <About/>
        <Experience/>
        <Staff/>
    </div>
  )
}

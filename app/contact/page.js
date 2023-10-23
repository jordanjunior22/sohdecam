"use client"
import React from 'react'

import dynamic from 'next/dynamic'
const Contact = dynamic(() => import('@/components/Contact'))
const Map = dynamic(()=> import('@/components/Map'))

export default function page() {
  return (
    <div>
        <Contact/>
        <Map/>
    </div>
  )
}

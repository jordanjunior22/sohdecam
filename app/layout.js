import dynamic from 'next/dynamic'
import './globals.css'
import { Suspense } from 'react'
import Loading from './loader'

const Navbar = dynamic(() => import('@/components/Navbar'))
const Footer = dynamic(() => import('@/components/Footer'))


export const metadata = {
  title: 'SOHDECAM HEALTH SERVICES CAMEROON',
  description: 'The passion to prevent the occurrence of diseases and save lives',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <Suspense fallback={<Loading/>}>
        {children}
        </Suspense>
        <Footer/>
      </body>
    </html>
  )
}

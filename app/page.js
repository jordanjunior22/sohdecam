import dynamic from 'next/dynamic'

const Header = dynamic(() => import('@/components/Header'))
const About = dynamic(() => import('@/components/About'))
const Services = dynamic(() => import('@/components/Services'))
const Contact = dynamic(() => import('@/components/Contact'))

export default function Home() {
  return (
    <main>
        <Header/>
        <About/>
        <Services/>
        <Contact/>
    </main>
  )
}

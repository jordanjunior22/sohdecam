"use client"
import Link from 'next/link'
import { React , useRef, useState, useEffect } from 'react';
import {LuPhoneCall} from 'react-icons/lu'
import './navbar.css'
import { usePathname,useRouter } from 'next/navigation';
import{ BiMenu} from 'react-icons/bi'
import {IoMdClose} from 'react-icons/io'

export default function Navbar() {

  const router = useRouter();

  const pathname = usePathname();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const GoPhone = () => {
    // Redirect the user to the specified link
    window.location.href = 'tel:+237696358611'; // Replace with your desired link
  };
  const GoContact = () => {
    // Redirect the user to the specified link
    router.push('/contact');
  };

  const ref = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (
        navbarOpen &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        setNavbarOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
      return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handler);
      };

  }, [navbarOpen]);
//
  return (
    <div className='navbar Flex-x-direction PaddingAll'>
      <div className='navbar-logo'>SOHDECAM</div>
      <ul className='navbar-link '>
        <Link href='/' className={pathname === '/' ? 'MarginLeftAndRight LinkStyles active' : 'MarginLeftAndRight LinkStyles'}>Home</Link>
        <Link href='/about' className={pathname === '/about' ? 'MarginLeftAndRight LinkStyles active' : 'MarginLeftAndRight LinkStyles'}>About</Link>
        <Link href='/services' className={pathname === '/services' ? 'MarginLeftAndRight LinkStyles active' : 'MarginLeftAndRight LinkStyles'}>Services</Link>
        <Link href='/contact' className={pathname === '/contact' ? 'MarginLeftAndRight LinkStyles active' : 'MarginLeftAndRight LinkStyles'}>Contact</Link>

      </ul>
      <div className='navbar-cta '>
        <button className='default-cta-button emergency-btn'><LuPhoneCall/> Emergency Call</button>
        <button className='default-cta-button appointment-btn'>Appointment</button>
      </div>

      <div className='toggle'onClick={() => setNavbarOpen((prev) => !prev)}>
        {navbarOpen ? <IoMdClose className='menu-icon'/> :  <BiMenu className='menu-icon' />}
      </div>

      <div ref={ref} className={`side-nav${navbarOpen ? ' show-menu' : ''}`}>
	      <div className='sidelinks'>
		      <Link href='/' className={pathname === '/' ? 'LinkStyles active' :'LinkStyles'}>Home</Link>
		      <Link href='/about' className={pathname === '/about' ? 'LinkStyles active' : 'LinkStyles'}>About</Link>
		      <Link href='/services' className={pathname === '/services' ? 'LinkStyles active' : 'LinkStyles'}>Services</Link>
		      <Link href='/contact' className={pathname === '/contact' ? 'LinkStyles active' : 'LinkStyles'}>Contact</Link>
        	<button onClick={GoPhone} className='default-cta-button emergency-btn'><LuPhoneCall/> Emergency Call</button>
        	<button onClick={GoContact} className='default-cta-button appointment-btn'>Appointment</button>
	      </div>
      </div>

    </div>
  )
}

import React, {useState} from 'react';
import Logo from '../assets/Logo.svg';
import Nav from './Nav';
import HamburgerMenu from '../assets/hamburgermenu.svg';
import {AiOutlineClose} from 'react-icons/ai';


function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    function toggleNavbar() {
        setNavbarOpen(!navbarOpen);
    }
  return (
    <nav>
        <nav className='nav-icon'>
            <img src={Logo} alt='Logo of Little Lemon Restaurant' className='nav-logo'/>
        <button className='hamburger-icon' onClick={toggleNavbar}>
            <img src={navbarOpen ? AiOutlineClose : HamburgerMenu} alt='Icon' />
        </button>
        </nav>
        <Nav device="desktop"/>
        {navbarOpen? <Nav device="mobile"/>:""}
    </nav>
  )
}

export default Navbar
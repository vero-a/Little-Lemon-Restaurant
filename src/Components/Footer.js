import React from 'react'
import Logo2 from '../assets/Logo2.jpeg';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
        <menu className="footer">
            <div className="logo-footer">
                <img src={Logo2} alt='Logo of Little Lemon'/>
            </div>
            <div className="doormatNav">
                <li>
                    <h6 className='header-footer'>Navigation</h6>
                </li>
                <ul className='footer-links'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Menu">Menu</Link></li>
                    <li><Link to="/Reservations">Reservations</Link></li>
                    <li><Link to="/Order-Online">Order Online</Link></li>
                    <li><Link to="/Login">Login</Link></li>
                </ul>
            </div>
            <div className='contact'>
                <li><h6 className='header-footer'>Contact</h6></li>
                <ul className='footer-links'>
                    <li>Maldove Street, Chicago, IL</li>
                    <li>(312) --- -----</li>
                    <li>info@littlelemon.com</li>
                </ul>
            </div>
            <div className='social-links'>
                <li><h6 className='header-footer'>Social Media Links</h6></li>
                <ul className='footer-links'>
                    <li><a href="https://www.instagram.com/littlelemonfood/">Instagram</a></li>
                    <li><a href="Facebook.com/LittleLemon">Facebook</a></li>
                </ul>
            </div>
        </menu>
    </footer>
  )
}

export default Footer
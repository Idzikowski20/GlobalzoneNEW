import React from 'react'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className='footer-container'>
      <div className='footer-logo-container'>
          <img src={logo} alt='logo' className='w-40 h-40 object-contain' />
          <p>Made by Patryk Idzikowski</p>
          <p className='all-rights-text'>Global Zone 2024 © All Rights Reserved</p>
        </div> 

        <div className='footer-card-container'>
        <div className='footer-card'>
            <Link to='#'>
            About
            </Link>
            <Link to='#'>
            Our mission
            </Link>
            <Link to='#'>
            Privacy Policy
            </Link>
            <Link to='#'>
            Terms of service
            </Link>
        </div>
        </div>

        <div className='footer-card-container'>
        <div className='footer-card'>
            <Link to='#'>
            Services
            </Link>
            <Link to='#'>
            Products
            </Link>
            <Link to='#'>
            Join our team
            </Link>
            <Link to='#'>
            Partner with us
            </Link>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
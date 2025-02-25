import React from 'react'
import logo from '../../assets/logo.webp'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
      <div className='footer-container'>
      <div className='footer-logo-container'>
          <img src={logo} alt='logo' className='w-40 h-40 object-contain' />
          <Link target="_blank" to="https://www.linkedin.com/in/patrykidzikowski/"><p>Strona stworzona przez <b>Patryk Idzikowski</b></p></Link>
          <p className='all-rights-text'>Global Zone 2025 © All Rights Reserved</p>
          
        </div> 

        <div className='footer-card-container'>
        <div className='footer-card'>
            <Link to='#'>
            Nasza misja
            </Link>
            <Link to='#'>
            Polityka prywatności
            </Link>
            <Link to='#'>
            Warunki usług
            </Link>
        </div>
        </div>

        <div className='footer-card-container'>
        <div className='footer-card'>
            <Link to='#'>
            Produkty
            </Link>
            <Link to='#'>
            Aplikuj do nas
            </Link>
            <Link to='#'>
            Współpraca
            </Link>
        </div>
        </div>
      </div>
  )
}

export default Footer
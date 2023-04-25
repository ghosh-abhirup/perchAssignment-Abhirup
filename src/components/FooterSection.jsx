import React from 'react'
import './FooterSection.css'
import { FaFacebookF,FaTwitter,FaInstagram } from "react-icons/fa";

const FooterSection = () => {
  return (
    <div className='footer'>
        <p>Follow Us</p>
        <div className='icons'>
            <div className='icon'><FaInstagram/></div>
            <div className='icon'><FaTwitter/></div>
            <div className='icon'><FaFacebookF/></div>
        </div>
    </div>
  )
}

export default FooterSection
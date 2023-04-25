import React from 'react'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <>
    <div className='header'>
        <span className='header-boldText'>FREE SHIPPING</span>
        <span className='header-lightText'>BUY ABOVE $120</span>
    </div>
    <div className='hero'>
        <div className='hero-text'>
            <div>
            <p>Future start</p>
            <p>From here</p>
            </div>
            
            <p className='hero-smallText'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa eligendi repellendus deleniti adipisci </p>
            <button>Get Started</button>
        </div>
    </div>
    </>
  )
}

export default HeroSection
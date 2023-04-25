import React from 'react'
import './ReleaseSection.css'
import ProductsSection from './ProductsSection'

const ReleaseSection = () => {
  return (
    <div className='releasePage'>
    <div className='release-heading'>
        <p>New Release</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat autem unde pariatur ipsam nisi.</p>
    </div>
    <ProductsSection />
    </div>
  )
}

export default ReleaseSection
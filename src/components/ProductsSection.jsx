import React from 'react'
import './ProductsSection.css'
import product1 from '../assets/pic1.png'
import product2 from '../assets/pic2.png'
import product3 from '../assets/pic3.png'
import bg1 from '../assets/flat-lay-arrangement-colourful-paper-sheets_23-2148603800.jpeg';
import discountedAmount from '../widgets/DiscountWidget'
import PriceSection from './PriceSection'

const ProductsSection = () => {
  console.log(discountedAmount(600));

  return (
    <div className='products'>
        <div className='product'>
              <img src={product1} alt="" className='images'/>
            <div className='details'>
              <p className='title'>Product 1</p>
              <p className='desc'>Lorem ipsum dolor sit</p>
              <PriceSection className='price-1' value={230}/>
            </div>
        </div>

        <div className='product'>
          <img src={product2} alt="" className='images'/>
          <div className='details'>
            <p className='title'>Product 2</p>
            <p className='desc'>Lorem ipsum dolor sit</p>
            <PriceSection className='price-2' value={320}/>
          </div>
        </div>

        <div className='product'>
          <img src={product3} alt="" className='images'/>
          <div className='details'>
            <p className='title'>Product 3</p>
            <p className='desc'>Lorem ipsum dolor sit</p>
            <PriceSection className='price-3' value={400}/>
          </div>
        </div>
    </div>
  )
}

export default ProductsSection
import React from 'react'
import './PriceSection.css';
import discountedAmount from '../widgets/DiscountWidget'

const PriceSection = ({value}) => {
    var [finalAmount,discount] = discountedAmount(value);
    if(value === finalAmount){
        return (
            <p className='noChange'>{`$${value}`}</p>
        );
    } else{
        return(
            <div>
                <div className='firstLine'>
                    <p className='line-through'>{value}</p>
                    <p className='discount'>{` - ${discount}%`}</p>
                </div>
                <p className='finalAmount'>{`$${finalAmount}`}</p>
            </div>
            
        )
    }
}

export default PriceSection
import React from 'react'
import ProductsList from '../products/products.json'
import Card from '../components/Card.jsx'


const Cards = () => {
    console.log(ProductsList)

  return (
    <div className='cards'>
        
        {ProductsList.map((product)=>
        
            <Card product={product}/>
        )}
    
    </div>
  )
}

export default Cards
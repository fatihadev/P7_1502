import React from 'react'
import Card from '../components/Card.jsx'
import ProductList from '../products/products.json'


const Cards = () => {
    console.log(ProductList)

  return (
    <div className='cards'>
        
        {ProductList.map((product)=>
        
            <Card product={product}/>
        )}
    
    </div>
  )
}

export default Cards
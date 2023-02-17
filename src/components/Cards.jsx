import React from 'react'
import Card from '../components/Card.jsx'
import ProductList from '../products/products.json'


const Cards = () => {
    console.log(ProductList);

  return (
    <div className='cards'>
        
        {ProductList.map((product)=>
        
            <Card product={product}/>
        )}
    
    </div>

    //il fait le map sur la liste des produits, on a passe les infos specifique pr chaque carte
    // vers card grace au props 
  )
}

export default Cards
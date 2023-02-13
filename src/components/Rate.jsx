import React from 'react'
import Pleine from '../assets/pleine.png'
import Vide from '../assets/vide.png'

function rate(props) {
    console.log(props.product.rating)

   
   const stars = [1, 2, 3, 4, 5];
  
    return (      
      <div>

          {stars.map((level) =>
        
          props.product.rating >= level ? (
              <img className="starColors" src={Pleine} alt=""/>
          ) : (
              <img className="starWhite" src={Vide} alt=""/>
        ) )}

      </div>
  )
}

export default rate
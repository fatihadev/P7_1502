import React from 'react'
import Pleine from '../assets/pleine.png'
import Vide from '../assets/vide.png'
import '../style/rate.css'

function rate(props) {
    console.log(props.product.rating)
// recu l'info depuis le parents
   
   const stars = [1, 2, 3, 4, 5];
  
    return (
      <div className="rate">
        {stars.map((level, key) =>
          props.product.rating >= level ? (
            <img key={key} className="starColors" src={Pleine} alt="" />
          ) : (
            <img key={key} className="starWhite" src={Vide} alt="" />
          )
        )}
      </div>
    );
}

export default rate
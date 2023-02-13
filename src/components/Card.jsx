import React from 'react';
import '../style/cards.css';
import { Link } from 'react-router-dom';

function Card(props) {
console.log(props.product)



  return (

      
        <div class ='container'>
          <article className='section'>
                <Link to= {`/products:${props.product.id}`} key={props.product}>
                <div class="textcard">
                    <h1>{props.product.title}</h1>
                </div>
                <img  class="cardhouse" src={props.product.cover} alt="card"/>
          
              </Link>
          </article>

        </div>
  
  
  )
}

export default Card
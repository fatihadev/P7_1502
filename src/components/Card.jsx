import React from 'react';
import '../style/cards.css';
import { Link } from 'react-router-dom';

function Card(props) {
  console.log(props.product);
  // recu les infos en question recuperer le props que l'ont a passer dans le fichier parent

  return (
    <div className="container">
      <article className="section">
        <Link to={`/products:${props.product.id}`} key={props.product}>
          <div className="textcard">
            <h1>{props.product.title}</h1>
          </div>
          <img className="cardhouse" src={props.product.cover} alt="card" />
        </Link>
      </article>
    </div>
    // balise article responsable de laffichage des card n19
  );
}

export default Card
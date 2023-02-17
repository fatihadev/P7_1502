import React from 'react'
import '../style/tags.css'


const Tags = (props) => {
    console.log(props)


  return (
    <div>
      <h1 className="lodgment_name">{props.product.title}</h1>

      <p className="lodgment_location">{props.product.location}</p>

      <div className="list_tags">
        {props.product.tags.map((el, key) => (
          <span key={key} className="tags">
            {el}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Tags
import React from 'react'
import '../style/host.css'

function Host(props) {
  return (
    <div>
      <div className="host">
        <h2 className="host_name">{props.product.host.name}</h2>
        <img
          className="host_picture"
          src={props.product.host.picture}
          alt="picture"
        />
      </div>
    </div>
  );
}

export default Host
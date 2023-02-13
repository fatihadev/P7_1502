import React from 'react'
import Image from '../assets/aboutbanner.webp'
import '../style/apropos.css'

function Bannerabout() {
  return (
    <div>
        <div className="banner">
          <img className='banner_apropos' src={Image} alt='banner a propose'/>
        </div>
    </div>
  )
}

export default Bannerabout
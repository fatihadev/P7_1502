import React from 'react'
import '../style/collapses.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';



function Collapse(props) {
    console.log(props.col)
    const [visible,setVisible] = useState (false);
    const display = ()=>{setVisible(!visible)}
    console.log(props.product.equipments)

  return (
    <div>
      {props.col ?(
        <div class="collapse">
        <div className='title'>
            <button type="button" class="collapse_title">{props.col.title}</button>
            <p onClick={display} className="icon"  >{visible?<FontAwesomeIcon icon={faChevronUp} />:<FontAwesomeIcon icon={faChevronDown} />}</p>                
        </div>
            <div class="content">
            {visible && <p class="infocollaps">{props.col.description}</p>}
            </div>
    </div>
      ):(
        <div class="collapse">
            <div className='title'>
                <button type="button" class="collapse_title">equipements</button>
                <p onClick={display} className="icon" >{visible?<FontAwesomeIcon icon={faChevronUp} />:<FontAwesomeIcon icon={faChevronDown} />}</p>                
            </div>
                <div class="content">
          
                {visible && <p class="infocollapslog">{props.product.equipments}</p> }
                  
          
                </div>

                <div className='title'>
                <button type="button" class="collapse_title">description</button>
                <p onClick={display} className="icon" >{visible?<FontAwesomeIcon icon={faChevronUp} />:<FontAwesomeIcon icon={faChevronDown} />}</p>                
            </div>
                <div class="content">
                  
                {visible &&  <p class="infocollaps">{props.product.description}</p>}
                </div>
    </div>
      )}
        
    </div>
  )
}

export default Collapse
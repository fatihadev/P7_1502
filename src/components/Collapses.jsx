import React from 'react'
import Collapse from '../components/Collapse'

const Collapses = (props) => {
  
  return (
    <div className='collapses'>


        
        {props.product ? 

         <Collapse product={props.product}/>:
           props.CollapseList.map((col)=>
                
          <Collapse col={col}/>
          
        )}

    </div>
  )
}

export default Collapses


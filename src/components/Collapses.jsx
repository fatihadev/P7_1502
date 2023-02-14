import Collapse from './Collapse';
import '../style/collapses.css';
import React, { useState } from "react";


function Collapses(props) {
  
    console.log(props.product);
    console.log(props.collapseInformation);

    
    return (

        <div className="collapse">
     
            <div> 
                {props.product ?         
                <Collapse prod={props.product}/> :
                props.collapseInformation?.map((info) =>                             
                <Collapse info={info}/>
               ) 
        } 
            </div>                         
             
        </div>
                    
        )
        
}

export default Collapses;
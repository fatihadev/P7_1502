import React from "react";
import Collapse from './Collapse.jsx';
import '../style/collapses.css';



function Collapses(props) {
  
    console.log(props.product);
    console.log(props.CollapseList);

    
    return (

        <div className="collapse">
     
            <div> 
                {props.product ?         
                <Collapse prod={props.product}/> :
                props.CollapseList?.map((info) =>                             
                <Collapse info={info}/>
               ) 
        } 
            </div>                         
             
        </div>
                    
        )
        
}

export default Collapses;
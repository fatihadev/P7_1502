import React from "react";
import Collapse from './Collapse.jsx';
import '../style/collapses.css';



function Collapses(props) {
  
    console.log(props.product);
    console.log(props.CollapseList);

    
    return (
      <div className="collapse">
        <div>
          {props.product ? (
            <Collapse prod={props.product} />
          ) : (
            props.CollapseList?.map((info, key) => (
              <Collapse key={key} info={info} />
            ))
          )}
        </div>
      </div>
      // ce compenents est special car va etre appeler sur 2pages L et A
    );
        
}

export default Collapses;
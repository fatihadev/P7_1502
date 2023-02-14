import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import '../style/collapses.css';


function Collapse(props) {

    const [ visible, setVisible ] = useState (false);
    const display=() => {
        setVisible(!visible);
    }
    console.log(props.info);
    console.log(props.prod);
    // console.log(props.prod.equipments);
    // console.log(props.prod.description);
    return (
        <>        
        {props.info ? (<section>
            <div className="collapse_title" >                                              
                <h2 className="title">{props.info.title}</h2>  
                                                                        
                <p onClick={display} className="icon" >{visible?<FontAwesomeIcon icon={faChevronUp} />:<FontAwesomeIcon icon={faChevronDown} />}</p>
                 
            </div>
            <div className="collapse_description">
                {visible && <p className="info_description">{props.info.description}</p>}
               
            </div>
        </section>)
         : (
           
            <>
            <div className="collapses">
        <section className="collapse_style_des">
            <div className="collapse_title_log">                                              
                <h2 className="title_log">Description</h2>                                               
                                    
                <p className="icon" onClick={display}>{visible?<FontAwesomeIcon icon={faChevronUp} />:<FontAwesomeIcon icon={faChevronDown} />}</p>
                
            </div>
            <div className="collapse_description_log">
                <div className="list_description">
                {visible && <p className="info_description_log">{props.prod.description}</p>}
                </div>
            </div>
        </section>
        <section className="collapse_style_equi">
                <div className="collapse_title_log">                                              
                    <h2 className="title_log">Equipements</h2>                                               
                                        
                    <p className="icon" onClick={display}>{visible?<FontAwesomeIcon icon={faChevronUp} />:<FontAwesomeIcon icon={faChevronDown} />}</p>
                     
                </div>
                <div className="collapse_description_log">
                    <ul className="list_equipment">
                        {props.prod.equipments.map((equip =>                        
                            visible &&<li className="info_description_log_equip">{equip}</li>
                        ))}
                    </ul>
                </div>
            </section>
            </div>
            </>
        )}




    </>
    )
}

export default Collapse;

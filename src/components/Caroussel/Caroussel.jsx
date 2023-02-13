import React,{useState} from "react";
import "../../style/caroussel.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


export default function Caroussel({product}) {

     const [slide, setSlide] = useState(0);    
    const array = product.pictures;

     return (
      <div className="carousel">
      <div
        className="caroussel_img"
        style={{ backgroundImage: `url(${array[slide]})`}}
      >
        <div className="icons_situation">
          <div>
            <FontAwesomeIcon icon={faChevronLeft} className="left"
            onClick={() => {
              slide > 0 && setSlide(slide - 1);
            }} />
          </div>        
          <div>
            <FontAwesomeIcon icon={faChevronRight} className="right"
            onClick={() => {
              slide < array.length - 1 && setSlide(slide + 1);
            }}/>
          </div>
        </div>
      </div>
    </div>
     )
}



    














      

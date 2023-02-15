import React from "react";
import Image from "../assets/imagehome.webp";
import "../style/bannerhome.css";

function Bannerhome() {
  return (
    <>
      <div>
        <img className="banner" src={Image} alt="banner" />
      </div>
    </>
  );
}

export default Bannerhome;

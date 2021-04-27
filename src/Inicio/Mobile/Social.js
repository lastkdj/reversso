import React from "react";
import apple from "../Componentes/Assets/apple.svg";
import fb from "../Componentes/Assets/fb.svg";
import google from "../Componentes/Assets/google.svg";
import Cross from "../Componentes/Assets/cross.svg";
import "./Styles/socialStyles.css";

const Social = () => {
  const closeNav = () => {
    document.getElementById("mySidenav").style.height = "0px";
    document.getElementById("leftPanel").style.filter = "brightness(1)";
  };

  return (
    <div className="socialmobile" id="mySidenav">
      <div style={{ padding: "20px" }}>
        <div className="sociallinediv">
          <div className="socialline"></div>
        </div>
        <div className="tittlesocialdiv" onClick={closeNav}>
          <img src={Cross} alt="cross" />
          <h3 className="tittlesocial">Selecciona tu cuenta</h3>
        </div>
        <div className="socialbuttongrid">
          <button className="buttonsocial" type="button">
            <div className="grid">
              <img src={apple} alt="" className="appmobile" />
              <p> Continua con Apple ID</p>
            </div>
          </button>
        </div>
        <div className="socialbuttongrid">
          <button className="buttonsocial" type="button">
            <div className="grid">
              <img src={fb} alt="" className="fbmobile" />
              <p> Continua con Apple ID</p>
            </div>
          </button>
        </div>
        <div className="socialbuttongrid">
          <button className="buttonsocial" type="button">
            <div className="grid">
              <img src={google} alt="" className="goomobile" />
              <p> Continua con Apple ID</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Social;

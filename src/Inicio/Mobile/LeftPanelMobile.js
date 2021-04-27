import React from "react";
import Bepositive from "../Componentes/Assets/bePositive.svg";
import smile from "../Componentes/Assets/smile.svg";
import "./Styles/mobileStyles.css";

const LeftPanelMobile = (props) => {
  const openNav = () => {
    document.getElementById("mySidenav").style.height = "350px";
    document.getElementById("leftPanel").style.filter = "brightness(0.7)";
  };

  const goLogin = (e) => {
    e.preventDefault();
    props.setLogin(true);
  };

  const goRegister = (e) => {
    e.preventDefault();
    props.setRegister(true);
  };

  return (
    <div className="leftPanelmobile" id="leftPanel">
      <div className="logodiv">
        <img src={Bepositive} alt="pic" className="bpmobile" />
      </div>

      <div className="smilediv">
        <img src={smile} alt="pic2" className="smilemobile" />
      </div>
      <div>
        <h3 className="subtittlemobile">Bienvenido!</h3>
        <h3 className="tittlemobile">Conecta con tus seguidores</h3>
      </div>
      <div className="iniciadiv">
        <button className="buttoninicia" type="button" onClick={goLogin}>
          Inicia Sesion
        </button>
      </div>
      <div>
        <button className="buttonmobile" type="button" onClick={openNav}>
          Inicia sesion con otra cuenta
        </button>
      </div>
      <div className="newusermobile">
        {" "}
        <label className="label">
          ¿Eres un nuevo usuario?{" "}
          <span className="createaccount" onClick={goRegister}>
            Crea una cuenta
          </span>
        </label>
      </div>
      <div className="line" onClick={openNav}></div>
    </div>
  );
};

export default LeftPanelMobile;

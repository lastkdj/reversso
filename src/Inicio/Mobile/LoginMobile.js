import React from "react";
import "../Styles/LoginStyles.css";
import "./Styles/loginStyles.css";
import LoginForm from "./MobileComponents/LoginForm";
import bp from "../Componentes/Assets/bePositive.svg";
import left from "../Componentes/Assets/left.svg";

const RightPanel = (props) => {
  const iniciaSesion = (e) => {
    e.preventDefault();
    props.setRegister(true);
    props.setLogin(false);
  };

  const openNav = () => {
    document.getElementById("mySidenav").style.height = "350px";
    document.getElementById("leftPanel").style.filter = "brightness(0.7)";
  };

  const goHome = (e) => {
    e.preventDefault();
    props.setLogin(false);
    props.setRegister(false);
    document.getElementById("success").style.height = "0px";
  };
  return (
    <div className="loginMobilegrid" id="leftPanel">
      <div>
        <div>
          <img className="arrow" src={left} onClick={goHome} alt="" />
        </div>
        <div className="loginlogomobile">
          <img className="loginbp" src={bp} alt="" />
        </div>
        <h4 className="labeltopmobile">
          Inicie sesion para utilizar la aplicación
        </h4>
        <LoginForm setLogin={props.setLogin} login={props.login} />

        <div className="newuserdiv">
          {" "}
          <label className="labelmobile">
            ¿Eres un nuevo usuario?{" "}
            <span className="span" onClick={iniciaSesion}>
              Crea una cuenta
            </span>
          </label>
        </div>
        <div className="linediv">
          <div className="line" onClick={openNav}></div>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;

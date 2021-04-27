import React from "react";
import "../Styles/LoginStyles.css";
import "./Styles/loginStyles.css";
import "./Styles/registerStyles.css";
import RegisterForm from "./MobileComponents/RegisterForm";
import bp from "../Componentes/Assets/bePositive.svg";
import left from "../Componentes/Assets/left.svg";

const RightPanel = (props) => {
  const iniciaSesion = (e) => {
    e.preventDefault();
    props.setLogin(!props.login);
    props.setRegister(false);
  };

  const openNav = () => {
    document.getElementById("mySidenav").style.height = "350px";
    document.getElementById("leftPanel").style.filter = "brightness(0.7)";
  };

  const goHome = (e) => {
    e.preventDefault();
    props.setRegister(false);
    props.setLogin(false);
  };
  return (
    <div className="loginMobilegrid" id="leftPanel">
      <div>
        <div>
          <img className="arrow " src={left} onClick={goHome} alt="" />
        </div>
        <div className="loginlogomobile">
          <img className="loginbp" src={bp} alt="" />
        </div>
        <h4 className="labeltopmobile">Registrate en be positive</h4>
        <RegisterForm
          setRegister={props.setRegister}
          setLogin={props.setLogin}
        />

        <div className="backtologin">
          {" "}
          <label className="labelmobileregister">
            ¿Ya eres usuario?{" "}
            <span className="span" onClick={iniciaSesion}>
              Ingresar
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

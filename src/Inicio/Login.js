import React from "react";
import "./Styles/LoginStyles.css";
import LoginForm from "./Componentes/LoginForm";
import Socials from "./Componentes/Social";

const RightPanel = (props) => {
  const iniciaSesion = (e) => {
    e.preventDefault();
    props.setLogin(!props.login);
  };
  return (
    <div className="rightPanel">
      <div className="login">
        <div>
          <h1 className="tittle">Bienvenido</h1>
          <h4 className="labeltop">Inicie sesion ingresando su cuenta aqui</h4>
        </div>

        <LoginForm setLogin={props.setLogin} login={props.login} />
        <div className="account">
          <h4 className="labellink">O inicia sesion con otra cuenta</h4>
        </div>
        <Socials />
        <div className="newuserdiv">
          {" "}
          <label className="label">
            ¿Eres un nuevo usuario?{" "}
            <span className="span" onClick={iniciaSesion}>
              Crea una cuenta
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;

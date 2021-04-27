import React from "react";
import "./Styles/RegisterStyles.css";
import RegisterForm from "./Componentes/RegisterForm";
import Socials from "./Componentes/Social";

const RightPanel = (props) => {
  const iniciaSesion = (e) => {
    e.preventDefault();
    props.setLogin(!props.login);
  };

  return (
    <div className="rightPanel">
      <div className="register">
        <div>
          <h1 className="tittle">Registrate en be positive</h1>
        </div>

        <RegisterForm setLogin={props.setLogin} />
        <div className="account">
          <h4 className="labellink">O inicia sesion con otra cuenta</h4>
        </div>
        <Socials />
        <div className="newuserdiv">
          {" "}
          <label className="label">
            ¿Ya eres usuario?{" "}
            <span className="span" onClick={iniciaSesion}>
              Ingresar
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;

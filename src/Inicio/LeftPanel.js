import React from "react";
import Bepositive from "./Componentes/Assets/bePositive.svg";
import smile from "./Componentes/Assets/smile.svg";
import "./Styles/LeftPanelStyles.css";

const LeftPanel = () => {
  return (
    <div className="leftPanel">
      <div>
        <img src={Bepositive} alt="pic" className="imagepositive" />
      </div>
      <div className="tittlediv">
        <h1 className="tittleleft">Gestiona tus seguidores de forma segura</h1>
      </div>
      <div className="smiledivBig">
        <img src={smile} alt="pic2" className="smile" />
      </div>
    </div>
  );
};

export default LeftPanel;

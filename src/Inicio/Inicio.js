import React, { useState } from "react";
import "./InicioStyles.css";
import Login from "./Login";
import Register from "./Register";
import LeftPanel from "./LeftPanel";
import Success from "./Componentes/Success";
import Mobile from "./Mobile/Mobile";

const Inicio = () => {
  const [login, setLogin] = useState(true);

  return (
    <div className="inicio">
      <Success />
      <Mobile />

      <LeftPanel />
      {login ? (
        <Login setLogin={setLogin} login={login} />
      ) : (
        <Register setLogin={setLogin} login={login} />
      )}
    </div>
  );
};

export default Inicio;

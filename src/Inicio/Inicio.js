import React, { useState } from "react";
import "./InicioStyles.css";
import Login from "./Login";
import Register from "./Register";
import LeftPanel from "./LeftPanel";
import Success from "./Componentes/Success";
import Mobile from "./Mobile/Mobile";

const Inicio = () => {
  const [login, setLogin] = useState(true);
  const [success, setSuccess] = useState(false);

  return (
    <div className="inicio">
      {success ? <Success setSuccess={setSuccess} /> : null}
      <Mobile />

      <LeftPanel />
      {login ? (
        <Login setLogin={setLogin} login={login} />
      ) : (
        <Register
          setLogin={setLogin}
          login={login}
          setSuccess={setSuccess}
          success={success}
        />
      )}
    </div>
  );
};

export default Inicio;

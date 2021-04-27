import React, { useState } from "react";
import EyeOpen from "./Assets/eye.svg";
import EyeClosed from "./Assets/closedeye.svg";
import "./Styles/FormStyles.css";

const LoginForm = (props) => {
  const [eye, setEye] = useState(true);

  function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
      setEye(!eye);
    } else {
      x.type = "password";
      setEye(!eye);
    }
  }

  return (
    <form>
      <label className="label">Email/Nombre de usuario</label>

      <div className="inputgrid">
        <input
          maxLength="20"
          type="text"
          placeholder="Ingresa email o nombre de usuario"
          className="inputemail"
        ></input>{" "}
      </div>

      <label className="label">Contraseña</label>

      <div className="inputgrid">
        <input
          id="myInput"
          type="password"
          className="inputpassword"
          placeholder="Ingresa contraseña"
          maxLength="20"
        ></input>{" "}
        <img
          className="iconpass"
          id="passicon"
          src={eye ? EyeOpen : EyeClosed}
          alt="eye"
          onClick={myFunction}
        />
      </div>

      <div className="passforgotdiv">
        {" "}
        <label className="passforgot">¿Olvidaste tu contraseña?</label>
      </div>
      <br></br>
      <button className="button" type="button">
        Inicia Sesion
      </button>
    </form>
  );
};

export default LoginForm;

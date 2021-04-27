import React, { useState } from "react";
import EyeOpen from "../../Componentes/Assets/eye.svg";
import EyeClosed from "../../Componentes/Assets/closedeye.svg";
import "../../Componentes/Styles/FormStyles.css";
import "../Styles/loginStyles.css";

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

  const openNav = () => {
    document.getElementById("mySidenav").style.height = "350px";
    document.getElementById("leftPanel").style.filter = "brightness(0.7)";
  };

  return (
    <form>
      <label className="labelmobile">Email/Nombre de usuario</label>

      <div className="inputgrid">
        <input
          maxLength="20"
          type="text"
          placeholder="Ingresa email o nombre de usuario"
          className="inputemail"
        ></input>{" "}
      </div>

      <label className="labelmobile">Contraseña</label>

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
        <label className="forgotmobile">¿Olvidaste tu contraseña?</label>
      </div>
      <br></br>
      <button className="btnloginmobileone" type="button">
        Inicia Sesión
      </button>
      <button className="btnloginmobiletwo" type="button" onClick={openNav}>
        Iniciar sesión con otra cuenta
      </button>
    </form>
  );
};

export default LoginForm;

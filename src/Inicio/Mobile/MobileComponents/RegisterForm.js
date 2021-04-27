import React, { useState } from "react";
import EyeOpen from "../../Componentes/Assets/eye.svg";
import EyeClosed from "../../Componentes/Assets/closedeye.svg";
import "../../Componentes/Styles/FormStyles.css";
import "../Styles/loginStyles.css";
import checkbox from "../../Componentes/Assets/checkbox.svg";
import checked from "../../Componentes/Assets/checked.svg";

const LoginForm = (props) => {
  const [eye, setEye] = useState(true);
  const [check, setCheck] = useState(false);

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

  const goSuccess = () => {
    document.getElementById("success").style.height = "77px";
    props.setRegister(false);
    props.setLogin(true);

    setTimeout(() => {
      document.getElementById("success").style.height = "0px";
    }, 3000);
  };

  const Checking = () => {
    setCheck(!check);
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

      <label className="labelmobile">Nombre</label>

      <div className="inputgrid">
        <input
          maxLength="20"
          type="text"
          placeholder="Ingresa nombre"
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

      <br></br>
      <div className="termsforgotdiv">
        <div>
          <img
            src={check ? checked : checkbox}
            alt=""
            style={{ width: "1.7em", cursor: "pointer" }}
            onClick={Checking}
          />
        </div>
        <label className="terms">Aceptar términos y condiciones</label>
      </div>
      <br></br>
      <button className="btnloginmobileone" type="button" onClick={goSuccess}>
        Crear una cuenta
      </button>
      <button className="btnloginmobiletwo" type="button" onClick={openNav}>
        Registrarse con otra cuenta
      </button>
    </form>
  );
};

export default LoginForm;

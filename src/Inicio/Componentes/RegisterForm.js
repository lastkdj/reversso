import React, { useState } from "react";
import EyeOpen from "./Assets/eye.svg";
import EyeClosed from "./Assets/closedeye.svg";
import checkbox from "./Assets/checkbox.svg";
import checked from "./Assets/checked.svg";

const RegisterForm = (props) => {
  const [eye, setEye] = useState(true);
  const [check, setCheck] = useState(false);

  const registerUser = (e) => {
    e.preventDefault();

    props.setSuccess(true);
    props.setLogin(true);
  };

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

  const Checking = () => {
    setCheck(!check);
  };
  return (
    <form>
      <label className="label">Email/Nombre de usuario</label>

      <div className="inputgrid">
        <input
          className="inputemail"
          maxLength="20"
          type="text"
          placeholder="Ingresa email o nombre de usuario"
        ></input>{" "}
      </div>

      <label className="label">Nombre</label>
      <div className="inputgrid">
        <input
          className="inputemail"
          type="text"
          maxLength="20"
          placeholder="Ingresa nombre"
        ></input>{" "}
      </div>

      <label className="label">Contraseña</label>

      <div className="inputgrid">
        <input
          id="myInput"
          className="inputpassword"
          type="password"
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
      <button className="button" type="button" onClick={registerUser}>
        Crear una cuenta
      </button>
    </form>
  );
};

export default RegisterForm;

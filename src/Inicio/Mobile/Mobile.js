import React, { useState } from "react";
import "../InicioStyles.css";
import "./Styles/mobileStyles.css";
import LeftPanelMobile from "./LeftPanelMobile";
import Socials from "./Social";
import LoginMobile from "./LoginMobile";
import RegisterMobile from "./RegisterMobile";
import Success from "./Success";

const Mobile = () => {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

  return (
    <div className="iniciomobile">
      {login ? (
        <LoginMobile
          login={login}
          setLogin={setLogin}
          register={register}
          setRegister={setRegister}
        />
      ) : register ? (
        <RegisterMobile
          login={login}
          setLogin={setLogin}
          register={register}
          setRegister={setRegister}
        />
      ) : (
        <LeftPanelMobile
          login={login}
          setLogin={setLogin}
          register={register}
          setRegister={setRegister}
        />
      )}
      <Socials />
      <Success />
    </div>
  );
};

export default Mobile;

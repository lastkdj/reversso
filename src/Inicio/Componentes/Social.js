import React from "react";
import apple from "./Assets/apple.svg";
import fb from "./Assets/fb.svg";
import google from "./Assets/google.svg";

const Socials = () => {
  return (
    <div className="socialdiv">
      <div className="socialGrid">
        <img src={apple} alt="" className="apple" />
      </div>
      <div className="socialGrid">
        <img src={fb} alt="" className="fb" />
      </div>
      <div className="socialGrid">
        <img src={google} alt="" className="goo" />
      </div>
    </div>
  );
};

export default Socials;

import React from "react";
import "./BemVindo.css";
import logo from "../../assets/image/logo.png";

export const BemVindoScreen = () => {
  return (
    <div className="BemVindo-container">
      <div className="BemVindo-left">
        <h1 className="BemVindo-text">
          Seja bem <br />
          vindo a <br />
          Vanguard <br />
          Parking.
        </h1>

        <div className="BemVindo-bar"></div>
      </div>

      <div className="BemVindo-right">
        <img src={logo} alt="logo" className="icon-logo" />
      </div>
    </div>
  );
};

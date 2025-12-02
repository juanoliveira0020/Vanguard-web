import React from "react";
import "./EntradaSucesso.css";
import logo from "../../assets/image/logo.png";

export const EntradaSucesso = () => {
  return (
    <div className="EntradaSucesso-container">
      <img src={logo} alt="logo" className="icon-logo" />

      <p className="EntradaSucesso-text">Veiculo cadastrado</p>

      <div className="EntradaSucesso-bar"></div>
    </div>
  );
};

import React from "react";
import "./register.css";
import logo from "../../assets/image/logo.png";

export const RegisterScreen = () => {
  return (
    <div className="register-container">

      {/* Lado Esquerdo */}
      <div className="register-left">
        <button className="back-button">❮</button>

        <div className="form-box">
          <label>Nome</label>
          <input type="text" className="input-field" />

          <label>Email</label>
          <input type="email" className="input-field" />

          <label>Senha</label>
          <input type="password" className="input-field" />

          <button className="confirm-btn">Confirmar</button>
        </div>
      </div>

      {/* Lado Direito */}
      <div className="register-right">
        <img src={logo} alt="logo" className="right-logo" />
      </div>
    </div>
  );
};

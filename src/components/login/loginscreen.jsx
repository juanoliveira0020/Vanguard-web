import React from "react";
import "./login.css";
import logo from "../../assets/image/logo.png";

export const LoginScreen = () => {
  return (
    <div className="login-container">

      {/* Lado Esquerdo */}
      <div className="login-left">
          <button className="back-button">❮</button>
        

        <div className="form-box">
          <label>Email</label>
          <input type="email" className="input-field" />

          <label>Senha</label>
          <input type="password" className="input-field" />

          <button className="confirm-btn">Confirmar</button>
        </div>
      </div>

      {/* Lado Direito */}
      <div className="login-right">
        <div className="purple-overlay"></div>
        <img src={logo} alt="Vanguard Parking" className="right-logo" />
      </div>

    </div>
  );
};

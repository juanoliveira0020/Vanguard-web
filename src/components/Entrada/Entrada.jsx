import React from "react";
import "./entrada.css";
import logo from "../../assets/image/logo.png";

export const EntradaScreen = () => {
  return (
    <div className="entrada-container">

      {/* LADO ESQUERDO */}
      <div className="entrada-left">

        <button className="entrada-back-btn">
          <span className="back-arrow">{"<"}</span>
        </button>

        <div className="entrada-content">

          <h1 className="entrada-title">Entrada</h1>

          <label className="entrada-label">Insira a placa do veículo:</label>
          <input type="text" className="entrada-input" />

          <p className="entrada-hour">Horário da Entrada: 12 : 12</p>

          <button className="entrada-confirm-btn">
            Confirmar Entrada
          </button>

        </div>
      </div>

      {/* LADO DIREITO */}
      <div className="entrada-right">
        <img src={logo} alt="logo" className="entrada-logo" />
      </div>

    </div>
  );
};

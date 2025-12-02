import React from "react";
import "./saida.css";
import logo from "../../assets/image/logo.png";

export const SaidaScreen = () => {
  return (
    <div className="saida-container">

      {/* LADO ESQUERDO */}
      <div className="saida-left">

         {/* Botão voltar */}
        <button className="saida-back-btn">❮</button>


        <div className="saida-content">

          <h1 className="saida-title">Saida</h1>

          <label className="saida-label">Insira a placa do veículo:</label>
          <input type="text" className="saida-input" />

          <label className="saida-label">Tempo Permanecido</label>

          <div className="saida-time-box">
            <span className="time-text">12:12</span>
            <div className="time-divider"></div>
            <span className="time-text">15:15</span>
          </div>

          <h2 className="saida-price">R$ 150,00</h2>

          <button className="saida-confirm-btn">
            Finalizar Saida
          </button>

        </div>
      </div>

      {/* LADO DIREITO */}
      <div className="saida-right">
        <img src={logo} alt="logo" className="saida-logo" />
      </div>

    </div>
  );
};

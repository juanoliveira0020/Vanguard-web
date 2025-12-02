import React from "react";
import "./home.css";

import logo from "../../assets/image/logo.png";
import car from "../../assets/image/car 2.png";
import faturamento from "../../assets/image/monitoring 3.png";
import historico from "../../assets/image/monitoring 4.png";

export const HomeScreen = () => {
  return (
    <div className="home-container">

      {/* LADO ESQUERDO */}
      <div className="home-left">

        <div className="home-grid">

          {/* Cadastrar */}
          <div className="home-card">
            <img src={car} className="home-icon" alt="Cadastrar" />
            <span>Cadastrar Veículo</span>
          </div>

          {/* Veículos no pátio */}
          <div className="home-card">
            <img src={car} className="home-icon" alt="Veículos no pátio" />
            <span>Veículos no Pátio</span>
          </div>

          {/* Retirar */}
          <div className="home-card">
            <img src={car} className="home-icon" alt="Retirar" />
            <span>Retirar Veículo</span>
          </div>

          {/* Faturamento */}
          <div className="home-card">
            <img src={faturamento} className="home-icon" alt="Faturamento" />
            <span>Faturamento</span>
          </div>

          {/* Histórico */}
          <div className="home-card home-wide">
            <img src={historico} className="home-icon" alt="Histórico" />
            <span>Histórico de Veículos</span>
          </div>

        </div>

      </div>

      {/* LADO DIREITO */}
      <div className="home-right">
        <img src={logo} alt="logo" className="home-logo" />
      </div>

    </div>
  );
};

import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

import logo from "../../assets/image/logo.png";
import car from "../../assets/image/car 2.png";
import faturamento from "../../assets/image/monitoring 3.png";
import historico from "../../assets/image/monitoring 4.png";

export const HomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">

      {/* LADO ESQUERDO */}
      <div className="home-left">

        <div className="home-grid">

          {/* Cadastrar Veículo */}
          <div className="home-card" onClick={() => navigate("/entrada")}>
            <img src={car} className="home-icon" alt="Cadastrar" />
            <span>Cadastrar Veículo</span>
          </div>

          {/* Veículos no Pátio */}
          <div className="home-card" onClick={() => navigate("/ativos")}>
            <img src={car} className="home-icon" alt="Veículos no pátio" />
            <span>Veículos no Pátio</span>
          </div>

          {/* Retirar Veículo */}
          <div className="home-card" onClick={() => navigate("/saida")}>
            <img src={car} className="home-icon" alt="Retirar" />
            <span>Retirar Veículo</span>
          </div>

          {/* Faturamento */}
          <div className="home-card" onClick={() => navigate("/faturamento")}>
            <img src={faturamento} className="home-icon" alt="Faturamento" />
            <span>Faturamento</span>
          </div>

          {/* Histórico de Veículos */}
          <div className="home-card home-wide" onClick={() => navigate("/historico")}>
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

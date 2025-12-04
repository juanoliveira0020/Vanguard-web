import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./abertura.css";
import logo from "../../assets/image/logo.png";

export const AberturaScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Tempo em milissegundos (ex: 3000 = 3 segundos)
    const timer = setTimeout(() => {
      navigate("/Welcome"); // Tela para onde vai depois do tempo
    }, 3000);

    // Limpa o timer se o componente for desmontado
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="abertura-container">
      <img src={logo} alt="logo" className="abertura-logo" />
    </div>
  );
};

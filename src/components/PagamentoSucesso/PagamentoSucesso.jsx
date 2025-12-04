import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PagamentoSucesso.css";
import logo from "../../assets/image/logo.png";

export const PagamentoSucesso = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home"); // Manda devolta para a Home
    }, 3000); // 3 segundos

    return () => clearTimeout(timer); 
  }, [navigate]);

  return (
    <div className="PagamentoSucesso-container">
      <img src={logo} alt="logo" className="icon-logo" />
      <p className="PagamentoSucesso-text">Pagamento Concluído</p>
      <div className="PagamentoSucesso-bar"></div>
    </div>
  );
};

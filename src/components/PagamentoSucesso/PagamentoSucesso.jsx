import React from "react";
import "./PagamentoSucesso.css";
import logo from "../../assets/image/logo.png";

export const PagamentoSucesso = () => {
  return (
    <div className="PagamentoSucesso-container">
      <img src={logo} alt="logo" className="icon-logo" />

      <p className="PagamentoSucesso-text">Pagamento Concluido</p>

      <div className="PagamentoSucesso-bar"></div>
    </div>
  );
};

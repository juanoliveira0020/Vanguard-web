import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./EntradaSucesso.css";
import logo from "../../assets/image/logo.png";

export const EntradaSucesso = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home"); // manda pra home
    }, 3000); // 3 segundos

    return () => clearTimeout(timer); 
  }, [navigate]);

  return (
    <div className="EntradaSucesso-container">
      <img src={logo} alt="logo" className="icon-logo" />
      <p className="EntradaSucesso-text">Veículo cadastrado</p>
      <div className="EntradaSucesso-bar"></div>
    </div>
  );
};

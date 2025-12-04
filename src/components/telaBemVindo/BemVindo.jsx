import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./BemVindo.css";
import logo from "../../assets/image/logo.png";

export const BemVindoScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home"); // manda pra home
    }, 3000); 

    return () => clearTimeout(timer); 
  }, [navigate]);

  return (
    <div className="BemVindo-container">
      <div className="BemVindo-left">
        <h1 className="BemVindo-text">
          Seja bem <br />
          vindo a <br />
          Vanguard <br />
          Parking.
        </h1>

        <div className="BemVindo-bar"></div>
      </div>

      <div className="BemVindo-right">
        <img src={logo} alt="logo" className="icon-logo" />
      </div>
    </div>
  );
};

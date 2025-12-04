import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import logo from "../../assets/image/logo.png";

export const LoginScreen = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const goBack = () => {
    navigate(-1);
  };

  const handleLogin = async () => {
    if (!email || !senha) {
      alert("Por favor, preencha o email e a senha.");
      return;
    }

    try {
      const response = await fetch(
        "https://parkingapisenai.azurewebsites.net/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, senha }),
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao fazer login.");
      }

      const data = await response.json();

      console.log("Token recebido:", data.token);

      navigate("/bemvindo"); // so consegue avançar se o login estiver correto
    } catch (error) {
      alert(error.message);
      console.error(error);
    }
  };

  return (
    <div className="login-container">

      {/* Lado Esquerdo */}
      <div className="login-left">
        <button className="back-button" onClick={goBack}>
          ❮
        </button>

        <div className="form-box">
          <label>Email</label>
          <input
            type="email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Senha</label>
          <input
            type="password"
            className="input-field"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <button className="confirm-btn" onClick={handleLogin}>
            Confirmar
          </button>
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

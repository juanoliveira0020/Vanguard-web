import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";
import logo from "../../assets/image/logo.png";

export const RegisterScreen = () => {
  const navigate = useNavigate();

  // Inputs
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const goBack = () => {
    navigate(-1);
  };

  const handleRegister = async () => {
    const data = { nome, email, senha };

    try {
      const response = await fetch(
        "https://parkingapisenai.azurewebsites.net/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        alert("Cadastro realizado com sucesso!");
        navigate("/login"); // navega para login 
      } else {
        alert("Erro ao cadastrar. Tente novamente.");
      }
    } catch (error) {
      alert("Erro na conexão com o servidor.");
      console.error(error);
    }
  };

  return (
    <div className="register-container">

      {/* Lado Esquerdo */}
      <div className="register-left">
        <button className="back-button" onClick={goBack}>
          ❮
        </button>

        <div className="form-box">
          <label>Nome</label>
          <input
            type="text"
            className="input-field"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

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

          <button className="confirm-btn" onClick={handleRegister}>
            Confirmar
          </button>
        </div>
      </div>

      {/* Lado Direito */}
      <div className="register-right">
        <img src={logo} alt="logo" className="right-logo" />
      </div>

    </div>
  );
};

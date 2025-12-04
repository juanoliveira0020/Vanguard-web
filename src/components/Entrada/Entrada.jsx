import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./entrada.css";
import logo from "../../assets/image/logo.png";

export const EntradaScreen = () => {
  const navigate = useNavigate();

  const [placa, setPlaca] = useState("");
  const [horarioEntrada, setHorarioEntrada] = useState("");

  const goBack = () => {
    navigate(-1);
  };

  const confirmEntrada = async () => {
    if (!placa.trim()) {
      alert("Por favor, insira a placa.");
      return;
    }

    try {
      const response = await fetch(
        "https://parkingapisenai.azurewebsites.net/api/veiculos/entrada",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ placa }),
        }
      );

      if (response.ok) {
        const json = await response.json();

      // salava a hora de entrada do cliente
        setHorarioEntrada(json.veiculo.horarioEntrada);

        alert(json.mensagem || "Entrada registrada com sucesso!");

        navigate("/entrada-sucesso");
      } else {
        alert("Erro ao registrar entrada.");
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao conectar com o servidor.");
    }
  };

  return (
    <div className="entrada-container">

      {/* LADO ESQUERDO */}
      <div className="entrada-left">

        <button className="entrada-back-btn" onClick={goBack}>
          <span className="back-arrow">{"<"}</span>
        </button>

        <div className="entrada-content">

          <h1 className="entrada-title">Entrada</h1>

          <label className="entrada-label">Insira a placa do veículo:</label>
          <input
            type="text"
            className="entrada-input"
            value={placa}
            onChange={(e) => setPlaca(e.target.value.toUpperCase())}
            maxLength={8}
          />

          <p className="entrada-hour">
            Horário da Entrada:{" "}
            {horarioEntrada ? horarioEntrada.slice(0, 5) : "Aguardando..."}
          </p>

          <button className="entrada-confirm-btn" onClick={confirmEntrada}>
            Confirmar Entrada
          </button>

        </div>
      </div>

      {/* LADO DIREITO */}
      <div className="entrada-right">
        <img src={logo} alt="logo" className="entrada-logo" />
      </div>

    </div>
  );
};

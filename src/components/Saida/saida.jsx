import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./saida.css";
import logo from "../../assets/image/logo.png";

export const SaidaScreen = () => {
  const navigate = useNavigate();

  const [placa, setPlaca] = useState("");
  const [entrada, setEntrada] = useState("--:--");
  const [saida, setSaida] = useState("--:--");
  const [valor, setValor] = useState("0,00");
  const [loading, setLoading] = useState(false);

  const goBack = () => navigate(-1);

  // 🔥 BUSCA AUTOMÁTICA AO DIGITAR A PLACA
  async function buscarDadosDaPlaca(p) {
    if (p.length < 7) return; // espera placa completa

    try {
      const response = await fetch(
        `https://parkingapisenai.azurewebsites.net/api/veiculos/placa/${p}`
      );

      if (!response.ok) {
        setEntrada("--:--");
        setSaida("--:--");
        setValor("0,00");
        return;
      }

      const data = await response.json();

      const entradaAPI = data.horarioEntrada?.slice(0, 5) || "--:--";
      const horaAtual = new Date();
      const saidaAtual = horaAtual.toTimeString().slice(0, 5);

      // cálculo do valor
      const valorCalculado = calcularValor(entradaAPI, saidaAtual);

      setEntrada(entradaAPI);
      setSaida(saidaAtual);
      setValor(valorCalculado);

    } catch (err) {
      console.log("Erro ao buscar placa:", err);
    }
  }

  // 🔥 FUNÇÃO QUE CALCULA O VALOR
  function calcularValor(hEntrada, hSaida) {
    if (hEntrada === "--:--") return "0,00";

    const [h1, m1] = hEntrada.split(":").map(Number);
    const [h2, m2] = hSaida.split(":").map(Number);

    const entradaDate = new Date();
    entradaDate.setHours(h1, m1);

    const saidaDate = new Date();
    saidaDate.setHours(h2, m2);

    const diffMs = saidaDate - entradaDate;
    const diffHoras = diffMs / 1000 / 60 / 60;

    const precoHora = 10; // ajuste conforme sua regra
    const total = Math.ceil(diffHoras) * precoHora;

    return total.toFixed(2).replace(".", ",");
  }

  async function finalizeSaida() {
    if (!placa.trim()) return alert("Por favor, insira a placa.");

    setLoading(true);

    try {
      const response = await fetch(
        "https://parkingapisenai.azurewebsites.net/api/veiculos/saida",
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ placa: placa.toUpperCase() }),
        }
      );

      if (!response.ok) throw new Error("Erro ao finalizar saída.");

      const data = await response.json();

      alert(data.mensagem || "Saída finalizada com sucesso!");
      navigate("/pagamento-sucesso");

    } catch (e) {
      alert(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="saida-container">
      <div className="saida-left">
        <button className="saida-back-btn" onClick={goBack}>❮</button>

        <div className="saida-content">
          <h1 className="saida-title">Saída</h1>

          <label className="saida-label">Insira a placa do veículo:</label>
          <input
            type="text"
            className="saida-input"
            maxLength={8}
            value={placa}
            onChange={(e) => {
              const novaPlaca = e.target.value.toUpperCase();
              setPlaca(novaPlaca);
              buscarDadosDaPlaca(novaPlaca);
            }}
          />

          <label className="saida-label">Tempo Permanecido</label>

          <div className="saida-time-box">
            <span className="time-text">{entrada}</span>
            <div className="time-divider"></div>
            <span className="time-text">{saida}</span>
          </div>

          <h2 className="saida-price">R$ {valor}</h2>

          <button
            className="saida-confirm-btn"
            onClick={finalizeSaida}
            disabled={loading}
          >
            {loading ? "Carregando..." : "Finalizar Saída"}
          </button>
        </div>
      </div>

      <div className="saida-right">
        <img src={logo} alt="logo" className="saida-logo" />
      </div>
    </div>
  );
};

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./historico.css";
import logo from "../../assets/image/logo.png";

export const HistoricoScreen = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [historico, setHistorico] = useState([]);

  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhQGdtYWlsLmNvbSIsImlhdCI6MTc1NjU5NTM5OSwiZXhwIjoxNzU2NTk4OTk5fQ.dV6MYOVTvHwcC2byblb7oh6OhZ3WqC3QF9DThWRq5g0";

  const goBack = () => {
    navigate("/home");
  };

  // Função de formatação de data igual ao app mobile
  const formatDate = (dateString) => {
    if (!dateString) return "Sem entrada";

    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "Data inválida";

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${day}/${month}/${year} ${hours}:${minutes}`;
  };

  // CHAMADA DA API
  const fetchHistorico = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://parkingapisenai.azurewebsites.net/api/veiculos",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );

      if (!response.ok) {
        console.error("Erro HTTP:", response.status);
        return;
      }

      const json = await response.json();
      setHistorico(json);
    } catch (err) {
      console.error("Erro ao carregar dados:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHistorico();
  }, []);

  // FILTRO POR PLACA
  const filteredData = historico.filter((item) =>
    item.placa.toUpperCase().includes(search.toUpperCase())
  );

  return (
    <div className="his-container">

      {/* LADO ESQUERDO */}
      <div className="his-left">

        {/* Botão voltar */}
        <button className="his-back-btn" onClick={goBack}>❮</button>

        <h1 className="his-title">Histórico</h1>

        {/* INPUT DE DATA */}
        <div className="his-date-input">
          <label>Escolha uma data:</label>
          <input
            type="date"
            className="his-date-picker"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>

        {/* PESQUISAR PLACA */}
        <div className="his-search-input">
          <span>Pesquisar a Placa</span>
          <input
            type="text"
            className="his-search-box"
            placeholder="Digite a placa"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* TABELA */}
        <table className="his-table">
          <thead>
            <tr>
              <th>Placa</th>
              <th>Entrada</th>
              <th>Saída</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr><td colSpan="3">Carregando...</td></tr>
            ) : filteredData.length === 0 ? (
              <tr><td colSpan="3">Nenhum registro encontrado.</td></tr>
            ) : (
              filteredData.map((item, index) => (
                <tr key={index}>
                  <td>{item.placa}</td>
                  <td>{formatDate(item.dataEntrada || item.entrada)}</td>
                  <td>
                    {item.dataSaida
                      ? formatDate(item.dataSaida)
                      : "Em aberto"}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

      </div>

      {/* LADO DIREITO */}
      <div className="his-right">
        <img src={logo} alt="logo" className="his-logo" />
      </div>

    </div>
  );
};

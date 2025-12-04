import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ativos.css";
import logo from "../../assets/image/logo.png";

export const AtivosScreen = () => {
  const navigate = useNavigate();

  const [veiculos, setVeiculos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhQGdtYWlsLmNvbSIsImlhdCI6MTc1NjU5NTM5OSwiZXhwIjoxNzU2NTk4OTk5fQ.dV6MYOVTvHwcC2byblb7oh6OhZ3WqC3QF9DThWRq5g0";

  const goBack = () => {
    navigate("/home");
  };

  // Formatar data
  const formatDate = (dateString) => {
    if (!dateString) return "Sem entrada";

    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "Data inválida";

    const d = String(date.getDate()).padStart(2, "0");
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const y = date.getFullYear();
    const h = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");

    return `${d}/${m}/${y} ${h}:${min}`;
  };

  // API
  useEffect(() => {
    fetch("https://parkingapisenai.azurewebsites.net/api/veiculos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
      .then(async (response) => {
        if (!response.ok) {
          const msg = await response.text();
          throw new Error(msg);
        }
        return response.json();
      })
      .then((json) => {
        const ativos = json.filter((item) => !item.saida); 
        setVeiculos(ativos);
      })
      .catch((err) => console.error("Erro ao buscar veículos:", err))
      .finally(() => setLoading(false));
  }, []);

  // Filtro por placa
  const filtered = veiculos.filter((item) =>
    item.placa.toUpperCase().includes(search.toUpperCase())
  );

  return (
    <div className="ativos-container">

      {/* LADO ESQUERDO */}
      <div className="ativos-left">
        <button className="ativos-back-btn" onClick={goBack}>❮</button>

        <div className="ativos-content">
          <h1 className="ativos-title">Veículos Ativos</h1>

          {/* Campo de busca */}
          <input
            type="text"
            placeholder="Pesquisar a Placa"
            className="ativos-search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* Tabela */}
          <table className="ativos-table">
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
              ) : filtered.length === 0 ? (
                <tr><td colSpan="3">Nenhum veículo ativo encontrado.</td></tr>
              ) : (
                filtered.map((item, index) => (
                  <tr key={index}>
                    <td>{item.placa}</td>
                    <td>{formatDate(item.entrada)}</td>
                    <td>Em aberto</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* LADO DIREITO */}
      <div className="ativos-right">
        <img src={logo} alt="logo" className="ativos-logo" />
      </div>
    </div>
  );
};

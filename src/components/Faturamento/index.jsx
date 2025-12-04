import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./faturamento.css";
import logo from "../../assets/image/logo.png";

export const FaturamentoScreen = () => {
  const navigate = useNavigate();

  // Parte dos filtros 
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Dados Mocados
  const dados = [
    { placa: "UWM-Q21", data: "12/12/2023", valor: 777.77, tipo: "Débito" },
    { placa: "UPM54-Q21", data: "13/12/2023", valor: 500.0, tipo: "Crédito" },
    { placa: "YOXZ-Q71", data: "14/12/2023", valor: 300.0, tipo: "Débito" },
  ];

  // Essa parte é do calculo
  const total = dados.reduce((acc, item) => acc + item.valor, 0);
  const media = total / dados.length;

  const goBack = () => {
    navigate("/home");
  };

  return (
    <div className="fat-container">
      {/* LADO ESQUERDO */}
      <div className="fat-left">
        {/* Botão voltar */}
        <button className="fat-back-btn" onClick={goBack}>
          ❮
        </button>

        <div className="fat-content">
          <h1 className="fat-title">Faturamento</h1>

          {/* Filtros — mantidos mas não utilizados */}
          <div className="fat-filter-row">
            <div className="fat-date-box">
              <label>Início</label>
              <input
                type="date"
                className="fat-date-picker"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>

            <div className="fat-date-box">
              <label>Término</label>
              <input
                type="date"
                className="fat-date-picker"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>

            {/* Botão de filtro — mantido porém sem lógica */}
            <button className="fat-filter-btn">Filtrar</button>
          </div>

          {/* Total / Média */}
          <div className="fat-info-row">
            <div className="fat-info-box">
              <span className="fat-info-title">Total</span>
              <p className="fat-info-value">R$ {total.toFixed(2)}</p>
            </div>

            <div className="fat-info-box">
              <span className="fat-info-title">Média</span>
              <p className="fat-info-value">R$ {media.toFixed(2)}</p>
            </div>
          </div>

          {/* Tabela */}
          <table className="fat-table">
            <thead>
              <tr>
                <th>Placa</th>
                <th>Data</th>
                <th>Valor</th>
                <th>Tipo</th>
              </tr>
            </thead>

            <tbody>
              {dados.map((item, index) => (
                <tr key={index}>
                  <td>{item.placa}</td>
                  <td>{item.data}</td>
                  <td>R$ {item.valor.toFixed(2)}</td>
                  <td>{item.tipo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* LADO DIREITO */}
      <div className="fat-right">
        <img src={logo} alt="logo" className="fat-logo" />
      </div>
    </div>
  );
};

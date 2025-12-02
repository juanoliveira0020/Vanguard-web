import React from "react";
import "./historico.css";
import logo from "../../assets/image/logo.png";

export const HistoricoScreen = () => {
  return (
    <div className="his-container">

      {/* LADO ESQUERDO */}
      <div className="his-left">

        {/* Botão voltar */}
        <button className="his-back-btn">❮</button>

        <h1 className="his-title">Histórico</h1>

        {/* INPUT DE DATA */}
        <div className="his-date-input">
          <span>dia / mes / ano</span>
          <i className="his-icon">🖉</i>
        </div>

        {/* PESQUISAR PLACA */}
        <div className="his-search-input">
          <span>Pesquisar a Placa</span>
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
            <tr>
              <td>UWM-QJ21</td>
              <td>12 : 12</td>
              <td>R$ 150,00</td>
            </tr>

            <tr>
              <td>UPM34-QJ21</td>
              <td>17 : 34</td>
              <td>R$ 200,00</td>
            </tr>

            <tr>
              <td>YOXZ-QJ71</td>
              <td>20 : 22</td>
              <td>R$ 170,00</td>
            </tr>
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

import React from "react";
import "./ativos.css";
import logo from "../../assets/image/logo.png";

export const AtivosScreen = () => {
  return (
    <div className="ativos-container">
      {/* LADO ESQUERDO */}
      <div className="ativos-left">
        <button className="ativos-back-btn">❮</button>

        <div className="ativos-content">
          <h1 className="ativos-title">Veiculos Ativos</h1>

          {/* Campo de busca */}
          <input
            type="text"
            placeholder="Pesquisar a Placa"
            className="ativos-search"
          />

          {/* Tabela */}
          <table className="ativos-table">
            <thead>
              <tr>
                <th>Placa</th>
                <th>Entrada</th>
                <th>Saida</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>UWM-QJ21</td>
                <td>12:12</td>
                <td>R$ 150,00</td>
              </tr>

              <tr>
                <td>UPM34-QJ21</td>
                <td>17:34</td>
                <td>R$ 200,00</td>
              </tr>

              <tr>
                <td>YOXZ-QJ71</td>
                <td>20:22</td>
                <td>R$ 170,00</td>
              </tr>
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

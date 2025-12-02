import React from "react";
import "./faturamento.css";
import logo from "../../assets/image/logo.png";

export const FaturamentoScreen = () => {
  return (
    <div className="fat-container">

      {/* LADO ESQUERDO */}
      <div className="fat-left">

        {/* Botão voltar */}
        <button className="fat-back-btn">❮</button>

        <div className="fat-content">

          <h1 className="fat-title">Faturamento</h1>

          {/* Filtros */}
          <div className="fat-filter-row">

            <div className="fat-date-box">
              <span>Início</span>
              <i className="fat-icon">🖉</i>
            </div>

            <div className="fat-date-box">
              <span>Término</span>
              <i className="fat-icon">🖉</i>
            </div>

            <button className="fat-filter-btn">Filtrar</button>
          </div>

          {/* Total / Média */}
          <div className="fat-info-row">

            <div className="fat-info-box">
              <span className="fat-info-title">Total</span>
              <p className="fat-info-value">R$ 777.777</p>
            </div>

            <div className="fat-info-box">
              <span className="fat-info-title">Média</span>
              <p className="fat-info-value">R$ 77,00</p>
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
              <tr>
                <td>UWM-QJ21</td>
                <td>12/12</td>
                <td>R$ 150,00</td>
                <td>Pix</td>
              </tr>

              <tr>
                <td>UPM34-QJ21</td>
                <td>17/04</td>
                <td>R$ 200,00</td>
                <td>Pix</td>
              </tr>

              <tr>
                <td>VOXZ-QJ71</td>
                <td>20/02</td>
                <td>R$ 170,00</td>
                <td>Crédito</td>
              </tr>
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

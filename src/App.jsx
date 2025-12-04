import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { FaturamentoScreen } from "./components/Faturamento";
import { HomeScreen } from "./components/home/homescreen";
import { WelcomeScreen } from "./components/WelcomeScreen/WelcomeScreen";
import { RegisterScreen } from "./components/cadastro/registerscreen";
import { EntradaScreen } from "./components/Entrada/Entrada";
import { HistoricoScreen } from "./components/historico/historico";
import { LoginScreen } from "./components/login/loginscreen";
import { SaidaScreen } from "./components/Saida/saida";
import { AtivosScreen } from "./components/veiculosAtivos/ativos";
import { AberturaScreen } from "./components/abertura/abertura";
import { BemVindoScreen } from "./components/telaBemVindo/BemVindo";
import { EntradaSucesso } from "./components/EntradaSucesso/EntradaSucesso";
import { PagamentoSucesso } from "./components/PagamentoSucesso/PagamentoSucesso";

function App() {
  return (
    <Router>
      <Routes>

        {/* Tela inicial */}
        <Route path="/" element={<AberturaScreen />} />

        {/* Telas principais */}
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/welcome" element={<WelcomeScreen />} />

        {/* Entrada / Saída */}
        <Route path="/entrada" element={<EntradaScreen />} />
        <Route path="/entrada-sucesso" element={<EntradaSucesso />} />
        <Route path="/saida" element={<SaidaScreen />} />

        {/* Administração */}
        <Route path="/ativos" element={<AtivosScreen />} />
        <Route path="/historico" element={<HistoricoScreen />} />
        <Route path="/faturamento" element={<FaturamentoScreen />} />

        {/* Cadastro */}
        <Route path="/cadastro" element={<RegisterScreen />} />

        {/* Outros */}
        <Route path="/bemvindo" element={<BemVindoScreen />} />
        <Route path="/pagamento-sucesso" element={<PagamentoSucesso />} />

      </Routes>
    </Router>
  );
}

export default App;

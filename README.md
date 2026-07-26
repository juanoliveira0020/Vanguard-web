# 🅿️ Vanguard Parking - Web

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/React_Router-7-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" alt="React Router">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow?style=for-the-badge" alt="Status">
</p>

<p align="center">
  Versão web (desktop) do <strong>Vanguard Parking</strong>: aplicação React para gerenciamento de um
  estacionamento, com cadastro de entrada e saída de veículos, histórico, veículos ativos e faturamento.
</p>

---

## 📑 Sumário

- [Sobre o Projeto](#-sobre-o-projeto)
- [Relação com o App Mobile](#-relação-com-o-app-mobile)
- [Funcionalidades](#-funcionalidades)
- [Telas e Rotas](#-telas-e-rotas)
- [Tecnologias Utilizadas](#️-tecnologias-utilizadas)
- [Fluxo de Navegação](#-fluxo-de-navegação)
- [API Consumida](#-api-consumida)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Pré-requisitos](#️-pré-requisitos)
- [Como Executar](#-como-executar)
- [Build de Produção](#-build-de-produção)
- [Pontos de Atenção](#️-pontos-de-atenção)
- [Melhorias Futuras](#-melhorias-futuras)
- [Autor](#-autor)
- [Licença](#-licença)

---

## 📖 Sobre o Projeto

O **Vanguard Parking Web** é a versão desktop/web do sistema de gerenciamento de estacionamento **Vanguard Parking**, desenvolvida em **React** com **Vite**.

A aplicação permite cadastrar a entrada de veículos, registrar a saída com cálculo do valor a pagar, consultar os veículos atualmente no pátio, visualizar o histórico de movimentações e acompanhar o faturamento — tudo em uma interface web responsiva para navegador.

Este projeto foi desenvolvido como atividade acadêmica, em conjunto com a versão mobile do sistema, para praticar desenvolvimento front-end com React, roteamento com React Router e consumo de uma API REST externa.

---

## 🔗 Relação com o App Mobile

Este repositório é a contraparte web do aplicativo mobile [**Vanguard_Parking**](https://github.com/juanoliveira0020/Vanguard_Parking) (React Native/Expo), do mesmo autor. Ambos seguem a mesma lógica de negócio e consomem a **mesma API** (`parkingapisenai.azurewebsites.net`), mas com stacks de front-end diferentes:

| | Mobile | Web |
|---|---|---|
| Framework | React Native (Expo) | React (Vite) |
| Navegação | React Navigation (Stack) | React Router DOM |
| Estilização | Styled Components | CSS por componente |
| Plataforma | Android / iOS | Navegador (desktop) |

---

## ✨ Funcionalidades

- 🎬 Tela de abertura com redirecionamento automático
- 🔐 Cadastro e login de usuário
- 🚗 Cadastro de entrada de veículo (placa + horário de entrada)
- 🚙 Registro de saída, com busca automática dos dados da placa e cálculo do valor a pagar
- 📋 Listagem de veículos ativos no pátio
- 🕓 Histórico de veículos, com filtro por data e busca por placa
- 💰 Tela de faturamento, com total e média calculados
- ✅ Telas de confirmação após cadastro de veículo e pagamento

---

## 📺 Telas e Rotas

| Componente | Rota | Descrição |
|---|---|---|
| `AberturaScreen` | `/` | Splash inicial, redireciona automaticamente após 3 segundos |
| `WelcomeScreen` | `/welcome` | Escolha entre "Fazer Login" ou "Cadastrar-se" |
| `LoginScreen` | `/login` | Autenticação do usuário (e-mail e senha) |
| `RegisterScreen` | `/cadastro` | Cadastro de um novo usuário (nome, e-mail e senha) |
| `BemVindoScreen` | `/bemvindo` | Mensagem de boas-vindas após o login, redireciona para a Home |
| `HomeScreen` | `/home` | Menu principal com acesso às demais funcionalidades |
| `EntradaScreen` | `/entrada` | Registro de entrada de um veículo pela placa |
| `EntradaSucesso` | `/entrada-sucesso` | Confirmação de veículo cadastrado |
| `SaidaScreen` | `/saida` | Registro de saída, com busca automática e cálculo do valor |
| `PagamentoSucesso` | `/pagamento-sucesso` | Confirmação de pagamento concluído |
| `AtivosScreen` | `/ativos` | Lista de veículos atualmente no pátio |
| `HistoricoScreen` | `/historico` | Histórico completo de veículos, com filtros |
| `FaturamentoScreen` | `/faturamento` | Resumo de faturamento (dados de exemplo) |

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Função |
|---|---|
| **React 19** | Biblioteca principal para construção da interface |
| **Vite 7** | Build tool e servidor de desenvolvimento |
| **React Router DOM 7** | Roteamento entre as páginas (`BrowserRouter`) |
| **React Hooks** | `useState`, `useEffect` e `useNavigate` para estado e navegação |
| **CSS3** | Estilização própria de cada componente/tela |
| **ESLint** | Padronização e qualidade do código |

---

## 🧭 Fluxo de Navegação

```text
/ (Abertura, splash)
      │
      ▼
/welcome
      │
      ├── "Fazer Login" ──► /login ──► /bemvindo ──► /home
      │
      └── "Cadastrar-se" ─► /cadastro ──► /login

/home (menu principal)
 ├── Cadastrar Veículo   ──► /entrada ──► /entrada-sucesso ──► /home
 ├── Veículos no Pátio   ──► /ativos
 ├── Retirar Veículo     ──► /saida ──► /pagamento-sucesso ──► /home
 ├── Faturamento         ──► /faturamento
 └── Histórico de Veículos ──► /historico
```

> ℹ️ A tela de abertura navega para `/Welcome` (com "W" maiúsculo), enquanto a rota registrada é `/welcome`. Funciona porque o React Router não diferencia maiúsculas de minúsculas por padrão, mas vale padronizar para evitar confusão.

---

## 🔗 API Consumida

A aplicação consome a mesma API REST externa utilizada pela versão mobile:

```
https://parkingapisenai.azurewebsites.net
```

| Tela | Método | Endpoint | Ação |
|---|---|---|---|
| Login | `POST` | `/auth/login` | Autentica o usuário |
| Cadastro | `POST` | `/auth/register` | Cria um novo usuário |
| Entrada | `POST` | `/api/veiculos/entrada` | Registra a entrada de um veículo (`{ placa }`) |
| Saída (busca) | `GET` | `/api/veiculos/placa/{placa}` | Busca os dados de entrada de uma placa em digitação |
| Saída (confirmação) | `PUT` | `/api/veiculos/saida` | Registra a saída de um veículo |
| Veículos Ativos / Histórico | `GET` | `/api/veiculos` | Lista todos os veículos registrados |

> ⚠️ Diferente do app mobile, a tela de **Saída** aqui calcula o valor a pagar **no próprio front-end** (com uma taxa fixa de R$ 10,00/hora), em vez de utilizar o valor retornado pela API. A tela de **Faturamento** também segue com dados fixos de exemplo, não integrada à API.

---

## 📂 Estrutura do Projeto

```text
Vanguard-web/
│
├── public/
│
├── src/
│   ├── assets/image/              # Logo e ícones utilizados no app
│   │
│   ├── components/
│   │   ├── abertura/              # Splash inicial
│   │   ├── WelcomeScreen/         # Escolha entre login/cadastro
│   │   ├── login/                 # Autenticação
│   │   ├── cadastro/              # Registro de usuário
│   │   ├── telaBemVindo/          # Boas-vindas pós-login
│   │   ├── home/                  # Menu principal
│   │   ├── Entrada/                # Cadastro de entrada de veículo
│   │   ├── EntradaSucesso/         # Confirmação de entrada
│   │   ├── Saida/                  # Registro de saída
│   │   ├── PagamentoSucesso/       # Confirmação de pagamento
│   │   ├── veiculosAtivos/         # Veículos no pátio
│   │   ├── historico/              # Histórico de veículos
│   │   └── Faturamento/            # Resumo de faturamento
│   │
│   ├── App.jsx                    # Configuração das rotas (React Router)
│   ├── main.jsx                   # Ponto de entrada da aplicação
│   └── index.css
│
├── index.html
├── vite.config.js
├── eslint.config.js
├── package.json
└── README.md
```

---

## ⚙️ Pré-requisitos

Antes de executar o projeto, certifique-se de possuir:

- [Node.js](https://nodejs.org) (LTS recomendado)
- npm (ou yarn/pnpm)

---

## 🚀 Como Executar

**1. Clone o repositório**
```bash
git clone https://github.com/juanoliveira0020/Vanguard-web.git
```

**2. Entre na pasta do projeto**
```bash
cd Vanguard-web
```

**3. Instale as dependências**
```bash
npm install
```

**4. Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

**5. Acesse a aplicação**

Por padrão, o Vite disponibiliza o projeto em:
```
http://localhost:5173
```

> ℹ️ A aplicação se conecta à API remota hospedada no Azure (`parkingapisenai.azurewebsites.net`), portanto é necessário ter conexão com a internet para usar login, cadastro, entrada, saída e histórico.

---

## 📦 Build de Produção

Para gerar os arquivos otimizados de produção:
```bash
npm run build
```

Para pré-visualizar o build gerado localmente:
```bash
npm run preview
```

---

## ⚠️ Pontos de Atenção

Durante a análise do código, alguns pontos merecem atenção antes de usar o projeto em produção:

- As telas **Histórico** e **Veículos Ativos** utilizam um **token de autenticação fixo diretamente no código**, em vez de obtê-lo dinamicamente após o login.
- A tela de **Login** realiza a autenticação, mas ainda não persiste o token recebido (por exemplo, em `localStorage`) para reutilizá-lo nas demais telas.
- O cálculo do valor de saída é feito no front-end com uma taxa fixa (R$ 10,00/hora), o que pode divergir da regra de negócio real aplicada pela API.
- A tela de **Faturamento** exibe dados estáticos de exemplo, ainda não integrados à API.

---

## 🚀 Melhorias Futuras

- [ ] Persistir o token de autenticação (`localStorage`/`sessionStorage`) após o login
- [ ] Remover tokens fixos no código e usar autenticação dinâmica em todas as telas
- [ ] Unificar a regra de cálculo do valor de saída entre web, mobile e API
- [ ] Integrar a tela de Faturamento com dados reais da API
- [ ] Implementar filtro de data funcional no Histórico e no Faturamento
- [ ] Adicionar tratamento de erros e estados de loading mais consistentes
- [ ] Adicionar testes automatizados (unitários e end-to-end)
- [ ] Deploy da aplicação (Vercel, Netlify ou similar)

---

## 👨‍💻 Autor

**Juan Oliveira**

[![GitHub](https://img.shields.io/badge/GitHub-juanoliveira0020-181717?style=flat&logo=github)](https://github.com/juanoliveira0020)

---

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos e de aprendizado.

Sinta-se à vontade para utilizá-lo como referência para estudos sobre React, Vite e integração com APIs REST.

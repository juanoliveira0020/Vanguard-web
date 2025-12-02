import './style.css';
import vanguardLogoDark from '../../assets/image/logo.png';
import vanguardLogoLight from '../../assets/image/logo.png';

export const WelcomeScreen = () => {
  return (
    <div className="welcome-container">

      {/* LADO ESQUERDO */}
      <div className="welcome-left">
        <img
          src={vanguardLogoDark}
          alt="Vanguard Parking Logo"
          className="logo-left"
        />

        <h1 className="welcome-title">Bem-Vindo</h1>

        <button className="btn-login">Fazer Login</button>

        <p className="or-text">OU</p>

        <button className="btn-register">Cadastrar-se</button>
      </div>

      {/* LADO DIREITO */}
      <div className="welcome-right">
        <div className="welcome-diagonal"></div>

        <img
          src={vanguardLogoLight}
          alt="Vanguard Parking Logo"
          className="logo-right"
        />
      </div>
    </div>
  );
};

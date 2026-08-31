import "./LoginCard.css";
import { Link } from "react-router-dom";
export default function LoginCard() {
  const botao = (): void => {
    alert("Logado");
  };

  return (
    <div className="login-card-container">
      <div className="login-card-box">
        <div className="login-card">
          <header className="login-card-header">
            <h1 className="login-card-title">Seja Bem-Vindo!</h1>
          </header>

          <div className="login-card-content">
            <form>
              <div>
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="username"
                  required
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="senha">Senha</label>
                <input
                  type="password"
                  id="senha"
                  name="senha"
                  autoComplete="current-password"
                  required
                />
              </div>

              <button id="button" type="submit" onClick={botao}>
                Entrar
              </button>
            </form>
            <button id="botaoAnonimo"><Link to="/">Continuar Anônimo</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
}

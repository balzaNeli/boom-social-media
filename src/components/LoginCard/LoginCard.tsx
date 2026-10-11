import { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginCard.css";

export default function LoginCard() {
  const [notice, setNotice] = useState<string | null>(null);

  return (
    <div className="login-card-container">
      <div className="login-card-box">
        <div className="login-card">
          <header className="login-card-header">
            <h1 className="login-card-title">Seja bem-vindo</h1>
            <p className="login-card-subtitle">
              Entre em círculos pequenos e fale com quem importa.
            </p>
          </header>

          <div className="login-card-content">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setNotice("Login real chega com o backend.");
              }}
            >
              <div className="field">
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

              <div className="field">
                <label htmlFor="senha">Senha</label>
                <input
                  type="password"
                  id="senha"
                  name="senha"
                  autoComplete="current-password"
                  required
                />
              </div>

              {notice && (
                <p className="login-notice" role="status">
                  {notice}
                </p>
              )}

              <button className="login-submit" type="submit">
                Entrar
              </button>
            </form>

            <Link to="/" className="login-anon">
              Continuar anônimo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

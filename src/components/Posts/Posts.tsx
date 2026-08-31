import "./Posts.css";
import Tux from "../../assets/tux.png";
import Image from "../../assets/image.jpg";
export default function Posts() {
  return (
    <>
      <div className="posts-container">
        <article className="post-card">
          <header className="post-card-header">
            <img src={Tux} alt="Imagem do post" className="post-card-image" />
            <div className="post-meta">
              <h3 className="post-author">Nome do Usuário</h3>
              <time>Há 69 horas</time>
            </div>
          </header>

          <div className="post-card-content">
            <p className="post-text">
              Caraca eu adoro usar linux quando estou comendo cheetos e sujando meu teclado todinho! 🤤 #linux #cheetos #teclado sujo
            </p>
            <img
              src={Image}
              alt="Descrição da imagem para acessibilidade"
              className="post-image"
            ></img>
          </div>

          <footer className="post-footer">
            <div className="post-actions">
              <button type="button" aria-label="Curtir postagem">
                ❤️
              </button>
              <button type="button" aria-label="Comentar postagem">
                💬
              </button>
              <button type="button" aria-label="Compartilhar postagem">
                🔄
              </button>
            </div>
            <div className="post-stats">
              <span>67 curtidas</span>
            </div>
          </footer>
        </article>
      </div>
    </>
  );
}

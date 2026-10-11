import Header from "../components/Header/Header";
import SideBar from "../components/SideBar/SideBar";
import "./Sobre.css";

export default function Sobre() {
  return (
    <>
      <Header />
      <div className="home-layout">
        <SideBar />
        <main className="home-content sobre-content">
          <h1 className="sobre-title">Pertencimento sem barulho</h1>
          <p>
            O Boom é uma rede de círculos pequenos e intencionais, onde as
            pessoas compartilham o processo, a presença e a vida real. Sem
            plateia, sem contadores, sem pressa.
          </p>
        </main>
      </div>
    </>
  );
}

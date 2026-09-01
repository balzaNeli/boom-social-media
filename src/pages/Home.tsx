import Header from "../components/Header/Header"
import Posts from "../components/Posts/Posts"
import Sidebar from '../components/SideBar/SideBar'
import "./Home.css"

export default function Home(){
    return(
        <>
        <Header/>
        <div className="home-layout">
            <Sidebar/>
            <main className="home-content">
                {/* Feed paginado: 2 por página com 4 mocks -> demonstra "Carregar mais" */}
                {/* Quando API SQLite estiver pronta, basta setar VITE_API_URL */}
                <Posts limit={2} />
            </main>
        </div>
        </>
    )
}

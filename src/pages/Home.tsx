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
                <h1 className="visually-hidden">Fogueira</h1>
                {/* Backend futuro: buscar posts e passar via props */}
                <Posts posts={[]} />
            </main>
        </div>
        </>
    )
}

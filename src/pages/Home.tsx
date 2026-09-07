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
                <Posts limit={2} />
            </main>
        </div>
        </>
    )
}

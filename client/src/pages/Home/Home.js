import { useEffect } from "react";
import Header from "../../components/Header/Header";
import './Home.css'

const Home = () => {

    useEffect(() => {
        console.log('Usuário logado: ', localStorage.getItem('id'))
    })

    function logout(e){
        e.preventDefault()
        localStorage.clear()
    }
    
    return (
        <div>
            <Header/>
            <h1>Home</h1>
            <button onClick={logout}>Logout</button>
        </div>
    );
}


export default Home

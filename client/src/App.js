import logo from './logo.svg';
//import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import MeusDados from './pages/MeusDados/MeusDados';
import Clientes from './pages/Clientes/Clientes';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/cadastro' element={<Cadastro/>}/>
          <Route path='/meus-dados' element={<MeusDados/>}/>
          <Route path='/clientes' element={<Clientes/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

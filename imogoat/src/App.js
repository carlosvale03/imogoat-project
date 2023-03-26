import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { useState } from 'react'
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import './App.css';
import Home from './pages/Home'
import Contato from './pages/Contato';
import Sobre from './pages/Sobre';
import Teste from './pages/Teste';
import Propriedade from './pages/Propriedade';
import Bairro from './pages/Bairro';
import Login from './pages/Login';
import CookieConsent from "react-cookie-consent";

import Container from './components/layout/Container';

function App() {
  // const [itemSelecionado, setItemSelecionado] = useState(null);

  // function selecionarItem(id) {
  //   setItemSelecionado(id);
  // }


  return (
    
    <Router>
      <div>
        <CookieConsent
          location="bottom"
          buttonText="Aceitar"
          cookieName="myAwesomeCookieName2"
          style={{ background: "#2B373B" }}
          buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
          expires={150}
        >
          Este site usa cookies para melhorar sua experiência.{" "}
          <span style={{ fontSize: "10px" }}>
            {" "}
            (Configurações de cookies)
          </span>
        </CookieConsent>
        <NavBar />
        <Container customClass='min-height'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/contato' element={<Contato />} />
            <Route path='/sobre' element={<Sobre />} />
            <Route path='/login' element={<Login />} />
            <Route path="/propriedade/:id" element={<Propriedade />} />
            <Route path="/pesquisa/:bairro/:tipo" element={<Bairro />} />
          </Routes>
        </Container>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

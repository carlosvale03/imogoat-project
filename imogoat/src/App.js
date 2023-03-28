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
          style={{ background: "#2e3c4e" }}
          buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
          expires={150}
        >
          Este site usa cookies para melhorar sua experiência. <br/> 
          Bem-vindo ao ImoGOAT, nosso projeto universitário! Gostaríamos de informar que este site ainda está 
          em desenvolvimento. Além disso, todas as imagens utilizadas neste site foram retiradas da internet 
          apenas para fins ilustrativos. Agradecemos a sua compreensão e estamos trabalhando para oferecer 
          uma experiência cada vez melhor!
          {" "}
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

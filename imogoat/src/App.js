import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { useState } from 'react'

// importação dos componentes necessários
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import './App.css';
import Home from './pages/Home'
import Contato from './pages/Contato';
import Sobre from './pages/Sobre';
import Propriedade from './pages/Propriedade';
import Bairro from './pages/Bairro';
import Login from './pages/Login';
import CookieConsent from "react-cookie-consent";

// este componente é responsável por envolver todo o conteúdo da aplicação e definir uma classe personalizada.
import Container from './components/layout/Container';

function App() {

  return (
    
    // este bloco define todas as rotas da aplicação.
    <Router>
      <div>
        <CookieConsent
        // componente que apresenta um banner informando que o site utiliza cookies, permitindo ao usuário 
        // aceitar ou ACEITAR o uso deles.
          location="bottom"
          buttonText="Aceitar"
          cookieName="myAwesomeCookieName2"
          style={{ background: "#2e3c4e" }}
          buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
          expires={150} // tempo, em dias, para que o cookie expire.
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
        <Container customClass='min-height'> {/* componente que engloba o conteúdo principal do site, 
        permitindo configurar uma classe CSS personalizada. */}
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/contato' element={<Contato />} />
            <Route path='/sobre' element={<Sobre />} />
            <Route path='/login' element={<Login />} />
            <Route path="/propriedade/:id" element={<Propriedade />} /> {/* O ":id" vai passar o id da propriedade 
            como parametro */}
            <Route path="/pesquisa/:bairro/:tipo" element={<Bairro />} /> {/* O ":bairro" e o ":tipo" vai passar o 
            bairro e o tipo de imóvel da pesquisa como parametro */}
          </Routes>
        </Container>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

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

import Container from './components/layout/Container';

function App() {
  // const [itemSelecionado, setItemSelecionado] = useState(null);

  // function selecionarItem(id) {
  //   setItemSelecionado(id);
  // }


  return (
    <Router>
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
    </Router>
  );
}

export default App;

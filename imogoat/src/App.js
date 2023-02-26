import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import './App.css';
import Home from './pages/Home'
import Contato from './pages/Contato';


import Container from './components/layout/Container';

function App() {
  return (
    <Router>
      <NavBar />
      <Container customClass='min-height'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/contato' element={<Contato />} />
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;

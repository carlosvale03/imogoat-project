import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/layout/NavBar';
import './App.css';
import Home from './pages/Home'


import Container from './components/layout/Container';

function App() {
  return (
    <Router>
      <NavBar />
      <Container customClass='min-height'>
        <Routes>
          <Route exact path='/' element={<Home />}/>
        </Routes>
      </Container>
      <p>Footer</p>
    </Router>
  );
}

export default App;

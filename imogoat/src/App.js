import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Carlao from './components/carlao'
import NavBar from './components/layout/NavBar';
import './App.css';
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <div>
        <Carlao/>
      </div>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />}/>
      </Routes>
    </Router>
  );
}

export default App;

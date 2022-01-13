import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './componentes/Footer/Footer';
import Futbol from './componentes/Futbol/Futbol';
import Inicio from './componentes/inicio/Inicio';
import Nav from './componentes/Nav/Nav';
import Tenis from './componentes/Tenis/Tenis';
import Voley from './componentes/Voley/Voley';

function App() {
  return (
    <>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={ <Inicio /> } />
        <Route path="/futbol" element={ <Futbol /> } />
        <Route path="/tenis" element={ <Tenis /> } />
        <Route path="/voley" element={ <Voley /> } />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;

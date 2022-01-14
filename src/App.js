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
        <Route path="proyecto36/" element={ <Inicio /> } />
        <Route path="proyecto36/futbol" element={ <Futbol /> } />
        <Route path="proyecto36/tenis" element={ <Tenis /> } />
        <Route path="proyecto36/voley" element={ <Voley /> } />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;

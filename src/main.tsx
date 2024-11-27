import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Header from './components/Header/Header';
import Pokedex from './pages/Pokedex/Pokedex';
import DetalhesPokemon from './pages/DetalhesPokemon/DetalhesPokemon';
import ListaTiposPokemon from './pages/ListaTiposPokemon/ListaTiposPokemon';
import ListaPokemonPorTipo from './pages/ListaPokemonsPorTipo/ListaPokemonsPorTipo';

const link = document.createElement('link');
link.rel = 'icon';
link.href = '/favicon.jpg';
document.head.appendChild(link);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="/pokemon/:name" element={<DetalhesPokemon />} />
        <Route path="/tipos" element={<ListaTiposPokemon/>} />
        <Route path="/pokemons-por-tipo/:tipo" element={<ListaPokemonPorTipo />} />
      </Routes>
    </Router>
  </StrictMode>
);
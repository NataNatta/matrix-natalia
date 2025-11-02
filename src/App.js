import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Matrix from './pages/matrix';
import Energy from './pages/Energy';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Головна</Link>
        <Link to="/matrix">Матриця</Link>
        <Link to="/energy/5">Енергія 5</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/matrix" element={<Matrix />} />
        <Route path="/energy/:id" element={<Energy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Matrix from "./pages/matrix";
import Energy from "./pages/energy";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/matrix">Matrix</Link>
        <Link to="/energy">Energy</Link>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/matrix" element={<Matrix />} />
        <Route path="/energy" element={<Energy />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

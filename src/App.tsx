import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Matrix from './pages/matrix';
import Home from './pages/home';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/matrix">Matrix</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/matrix" element={<Matrix />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

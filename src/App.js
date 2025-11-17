import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Statistics from "./pages/Statistics";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <header className="navbar">
        <h2 style={{ color: "#61a9ff" }}>🎮 GameTracker</h2>
        <div className="nav-links">
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/library">Biblioteca</NavLink>
          <NavLink to="/stats">Estadísticas</NavLink>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/stats" element={<Statistics />} />
      </Routes>

      <footer>© 2025 Mateo Ramírez — GameTracker Neo UI</footer>
    </BrowserRouter>
  );
}

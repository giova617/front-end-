import { useEffect, useState } from "react";
import api from "../api";

export default function Statistics() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    api.get("/games").then((res) => setGames(res.data));
  }, []);

  const total = games.length;
  const completados = games.filter(g => g.completed).length;
  const promedio = (games.reduce((a, g) => a + (g.rating || 0), 0) / (total || 1)).toFixed(1);

  return (
    <div className="page-container">
      <h1>📈 Estadísticas Gamer</h1>
      <div className="stats-grid">
        <div className="stats-box">
          <div className="stats-value">{total}</div>
          <div className="stats-label">Juegos registrados</div>
        </div>
        <div className="stats-box">
          <div className="stats-value">{completados}</div>
          <div className="stats-label">Completados</div>
        </div>
        <div className="stats-box">
          <div className="stats-value">{promedio}</div>
          <div className="stats-label">Promedio ⭐</div>
        </div>
      </div>
    </div>
  );
}

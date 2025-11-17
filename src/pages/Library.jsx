import { useState, useEffect } from "react";
import api from "../api";
import GameCard from "../components/GameCard";
import GameForm from "../components/GameForm";

export default function Library() {
  const [games, setGames] = useState([]);
  const [editing, setEditing] = useState(null);

  const loadGames = () => api.get("/games").then((res) => setGames(res.data));

  useEffect(() => {
    loadGames();
  }, []);

  return (
    <div className="page-container">
      <h1>🎮 Mi Biblioteca</h1>
      <GameForm game={editing} onSave={() => { setEditing(null); loadGames(); }} />
      <div className="grid">
        {games.map((g) => (
          <GameCard key={g._id} game={g} onEdit={setEditing} onDelete={loadGames} />
        ))}
      </div>
    </div>
  );
}

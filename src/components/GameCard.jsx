import api from "../api";

export default function GameCard({ game, onEdit, onDelete }) {
  const handleDelete = async () => {
    await api.delete(`/games/${game._id}`);
    onDelete();
  };

  return (
    <div className="card">
      <img src={game.coverUrl || "https://via.placeholder.com/200x250?text=Sin+Portada"} alt={game.title} />
      <h3>{game.title}</h3>
      <p>{game.platform}</p>
      <p>⭐ {game.rating || "Sin calificación"}</p>
      <p>{game.hoursPlayed || 0} horas jugadas</p>
      <p>{game.completed ? "✅ Completado" : "⏳ En progreso"}</p>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
        <button className="btn" onClick={() => onEdit(game)}>Editar</button>
        <button className="btn" onClick={handleDelete}>Eliminar</button>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import api from "../api";

export default function GameForm({ game, onSave }) {
  const [form, setForm] = useState({
    title: "",
    platform: "",
    hoursPlayed: "",
    completed: false,
    rating: "",
    coverUrl: ""
  });

  useEffect(() => {
    if (game) setForm(game);
  }, [game]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (game) {
      await api.put(`/games/${game._id}`, form);
    } else {
      await api.post("/games", form);
    }
    setForm({ title: "", platform: "", hoursPlayed: "", completed: false, rating: "", coverUrl: "" });
    onSave();
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
      <input placeholder="Título" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} required />
      <input placeholder="Plataforma" value={form.platform} onChange={e => setForm({ ...form, platform: e.target.value })} />
      <input type="number" placeholder="Horas" value={form.hoursPlayed} onChange={e => setForm({ ...form, hoursPlayed: e.target.value })} />
      <input type="number" placeholder="⭐ Calificación" value={form.rating} onChange={e => setForm({ ...form, rating: e.target.value })} />
      <input placeholder="URL de portada" value={form.coverUrl} onChange={e => setForm({ ...form, coverUrl: e.target.value })} />
      <label>
        <input type="checkbox" checked={form.completed} onChange={e => setForm({ ...form, completed: e.target.checked })} /> Completado
      </label>
      <button type="submit">{game ? "Actualizar" : "Agregar"}</button>
    </form>
  );
}

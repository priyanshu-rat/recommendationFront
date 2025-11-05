const API_BASE = "http://127.0.0.1:8000"; // FastAPI backend

export async function getTopAnime() {
  const res = await fetch(`${API_BASE}/`);
  return await res.json();
}

export async function searchAnime(q) {
  const res = await fetch(`${API_BASE}/search?q=${encodeURIComponent(q)}`);
  const data = await res.json();
  return data.recommendations || [];
}

export async function getAnimeDetail(id) {
  const res = await fetch(`${API_BASE}/anime/${id}`);
  return await res.json();
}

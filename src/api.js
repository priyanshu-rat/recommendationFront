const API_BASE = "https://my-animrec-backend.azurewebsites.net"; // FastAPI backend

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

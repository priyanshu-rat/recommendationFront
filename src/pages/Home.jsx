import React, { useEffect, useState } from "react";
import { getTopAnime, searchAnime } from "../api";
import AnimeCard from "../components/AnimeCard";
import SearchBar from "../components/SearchBar";
import ThemeToggle from "../components/ThemeToggle";

export default function Home() {
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("Top Anime by Score");

  useEffect(() => {
    getTopAnime().then((data) => {
      setAnimeList(data);
      setLoading(false);
    });
  }, []);

  const handleSearch = async (q) => {
    setLoading(true);
    setTitle(`Search results for "${q}"`);
    const results = await searchAnime(q);
    setAnimeList(results);
    setLoading(false);
  };

  return (
    <div className="min-h-screen px-6 py-4">
      {/* Navbar */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Otaku Sensai</h1>
        <ThemeToggle />
      </div>

      <SearchBar onSearch={handleSearch} />

      <h2 className="text-xl font-semibold mb-4">{title}</h2>

      {loading ? (
        <p className="text-center text-gray-500 mt-10">Loading...</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 justify-center">
          {animeList.map((anime) => (
            <AnimeCard key={anime.mal_id} anime={anime} />
          ))}
        </div>
      )}
    </div>
  );
}

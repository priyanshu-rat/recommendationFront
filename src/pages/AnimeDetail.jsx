import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getAnimeDetail } from "../api";
import AnimeCard from "../components/AnimeCard";
import ThemeToggle from "../components/ThemeToggle";

export default function AnimeDetail() {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);
  const [recs, setRecs] = useState([]);

  useEffect(() => {
    getAnimeDetail(id).then((data) => {
      setAnime(data.anime);
      setRecs(data.recommendations);
    });
  }, [id]);

  if (!anime)
    return <p className="text-center mt-10 text-gray-500">Loading...</p>;

  return (
    <div className="min-h-screen px-6 py-4">
      <div className="flex justify-between items-center mb-6">
        <Link to="/" className="text-2xl font-bold hover:underline">
          ⬅ Back
        </Link>
        <ThemeToggle />
      </div>

      <div className="flex flex-col md:flex-row gap-8 mb-10">
        <img
          src={anime.image_url}
          alt={anime.title}
          className="w-64 h-96 object-cover rounded-lg shadow-lg"
        />
        <div>
          <h1 className="text-3xl font-bold">
            {anime.title_english || anime.title}
          </h1>
          <p className="italic text-gray-500">{anime.title}</p>
          <p className="mt-2 text-yellow-500 font-semibold">
            ⭐ Score: {anime.score}
          </p>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            {anime.synopsis}
          </p>
          <p className="mt-2 text-sm text-gray-500">{anime.genres}</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Recommended Anime</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {recs.map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </div>
    </div>
  );
}

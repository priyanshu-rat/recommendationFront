import React from "react";
import { useNavigate } from "react-router-dom";

export default function AnimeCard({ anime }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/anime/${anime.mal_id}`)}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-transform cursor-pointer"
    >
      <img
        src={anime.image_url}
        alt={anime.title}
        className="w-full h-72 object-cover"
      />
      <div className="p-3">
        <h3 className="font-bold text-lg truncate">
          {anime.title_english || anime.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          ⭐ {anime.score}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {anime.genres}
        </p>
      </div>
    </div>
  );
}

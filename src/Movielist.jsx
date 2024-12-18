
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from "./Search.jsx";
import axios from "axios";

export default function Movielist() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("Avengers");
  const [loading, setLoading] = useState(false);

  const fetchMovies = (query) => {
    setLoading(true);
    axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=6ae226b01962ce4699cebf75d825eebe&query=${query}`)
      .then((response) => setMovies(response.data.results || []))
      .catch((error) => {
        console.error("Failed to fetch data", error);
        setMovies([]);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchMovies(search);
  }, [search]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Movie Search</h1>
      <Search onSearch={(value) => setSearch(value)} />

      {loading && <p>Loading...</p>}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {movies.map((movie) => (
          <div key={movie.id} style={{ width: "150px" }}>
            <Link to={`/movie/${movie.id}`}>
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : "https://via.placeholder.com/150x225?text=No+Image"
                }
                alt={movie.title}
                style={{ width: "100%", borderRadius: "8px" }}
              />
            </Link>
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

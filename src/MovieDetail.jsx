

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=6ae226b01962ce4699cebf75d825eebe`)
      .then((response) => setMovie(response.data))
      .catch(() => alert("Failed to fetch movie details"))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <Link to="/">← Back to Search</Link>
      {movie ? (
        <>
          <h1>{movie.title}</h1>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "https://via.placeholder.com/300x450?text=No+Image"
            }
            alt={movie.title}
            style={{ borderRadius: "10px", marginTop: "20px" }}
          />
          <p style={{ marginTop: "10px" }}>{movie.overview}</p>
        </>
      ) : (
        <p>Movie not found.</p>
      )}
    </div>
  );
}

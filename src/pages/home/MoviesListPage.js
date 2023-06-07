import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MoviesListPage = () => {
  const { type } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/search/shows?q=${type}`)
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.log(err));
  }, [type]);

  return (
    <div>
      <h1>{type} Movies</h1>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>{movie.show.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesListPage;

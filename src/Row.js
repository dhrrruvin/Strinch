import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

const base_url = "https://image.tmdb.org/t/p/original/";

export default function Row(props) {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [props.fetchUrl]);

  const loadVideoPlayer = (movie) => {
    // <Router>
    //   <Routes>
    //     <Route path="/player" Component={Player} />
    //   </Routes>
    // </Router>;
    navigate("/player");
  };

  return (
    <div className="row">
      <h2> {props.title} </h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${props.isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              props.isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            onClick={() => {
              loadVideoPlayer(movie);
            }}
          />
        ))}
      </div>
    </div>
  );
}

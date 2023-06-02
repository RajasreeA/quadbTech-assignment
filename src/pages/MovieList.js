import React, { useEffect, useState } from "react";
import axios from "axios";
import "../assets/MovieCard.css";
import MovieCard from "../components/Card.js";
import { useNavigate } from "react-router-dom";

function MovieList() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  const handleButton = (id, url) => {
    navigate("/show", {
      state: {
        ID: id,
        url: url,
      },
    });
    localStorage.clear();
  };

  useEffect(function () {
    axios.get(`https://api.tvmaze.com/search/shows?q=all`).then((response) => {
      const res = response.data;
      setData(res);
    });
  });

  return (
    <div className="row bg-secondary">
      <div class="header" id="header">
        <h2>Movie Ticket Booking</h2>
      </div>

      {data &&
        data.map(
          ({
            show: {
              id,
              image: { medium },
              language,
              name,
              _links,
            },
          }) => {
            return (
              <div class="col-sm-4">
                <MovieCard
                  title={name}
                  image={medium}
                  content={language}
                  handleButton={() => handleButton(id, _links)}
                />
              </div>
            );
          }
        )}
    </div>
  );
}

export default MovieList;

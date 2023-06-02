import React from "react";
import "../assets/MovieCard.css";
import Button from "react-bootstrap/Button";

function MovieCard(props) {
  return (
    <div className="card movie_card">
      <img src={props.image} className="card-img-top" alt="image" />
      <div className="card-body">
        <h5 className="card-title text-center">{props.title}</h5>
        <p className="description text-center">{props.content}</p>
        <Button
          variant="primary"
          style={{ marginLeft: "7rem" }}
          onClick={props.handleButton}
        >
          Book
        </Button>
      </div>
    </div>
  );
}

export default MovieCard;

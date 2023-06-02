import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "../assets/MovieCard.css";

function MovieForm(props) {
  const [userDetails, setUserDetails] = useState({
    selected: props.movieName,
    type: "First Class",
    userName: "",
    email: "",
  });
  const handleClick = () => {
    if (userDetails.userName && userDetails.email) {
      localStorage.setItem("react-movie-app", JSON.stringify(userDetails));
    }
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("react-movie-app"));
    if (items) {
      setUserDetails(items);
    }
  }, []);
  return (
    <>
      <div style={{ margin: "4rem" }}>
        <div class="form-group">
          <label for="movieName">Selected Movie Show</label>
          <input
            type="text"
            class="form-control"
            id="movieName"
            value={userDetails.selected}
          />
        </div>
        <div class="form-group">
          <label for="classType">Type</label>
          <select
            id="type"
            name="type"
            class="form-control"
            onChange={(e) =>
              setUserDetails({ ...userDetails, type: e.target.value })
            }
            required
          >
            <option value="First Class">First Class</option>
            <option value="Second Class">Second Class</option>
            <option value="VIP">VIP</option>
            <option value="premiere">Premiere</option>
          </select>
        </div>
        <div class="form-group">
          <label for="name">User Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            value={userDetails.userName}
            onChange={(e) =>
              setUserDetails({ ...userDetails, userName: e.target.value })
            }
            required
          />
        </div>
        <div class="form-group">
          <label for="mail">Email Id</label>
          <input
            type="email"
            class="form-control"
            id="email"
            value={userDetails.email}
            onChange={(e) =>
              setUserDetails({ ...userDetails, email: e.target.value })
            }
          />
        </div>

        <Button variant="dark" style={{ margin: "1rem" }} onClick={handleClick}>
          SUBMIT
        </Button>
      </div>

      {/*  */}
    </>
  );
}

export default MovieForm;

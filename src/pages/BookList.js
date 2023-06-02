import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MovieDetails from "../components/MovieDetails";
import axios from "axios";
import Button from "react-bootstrap/Button";
import MovieForm from "../components/MovieForm";
import { list, schedule, networkInfo } from "../assets/Data.js";

function SecondScreen() {
  const location = useLocation();
  const navigate = useNavigate();
  const [book, setBook] = useState(false);
  const [show, setShow] = useState();
  useEffect(function () {
    axios.get(location?.state?.url?.self?.href).then((response) => {
      setShow(response.data);
    });
  });

  const openForm = () => {
    setBook(true);
    localStorage.setItem("book", JSON.stringify(true));
  };
  const open = JSON.parse(localStorage.getItem("book"));
  return (
    <>
      {show && (
        <div className="row bg-info">
          <div class="header" id="header1">
          <div
            style={{ cursor: "pointer",color:"white" }}
            onClick={() => navigate(-1)}
          >
            {"<Back"}
            <div className="text-center">
              Book My show
            </div>
          </div>
          
</div>
<div className="col-sm-8">
<div className="col-sm-2 "style={{margin:"4rem 0rem 0rem 7rem"}}>
     <p>  Click Here to Book        <Button variant="dark" onClick={openForm}>Book My show</Button></p> 
            </div>
            <div className="col-sm-6">
              {(book || open) && <MovieForm movieName={show?.name} />}
            </div>
          </div>
        

          <div className="col-sm-4">
          <br/>
            <MovieDetails
              title={"Show Info"}
              description={show?.summary}
              networkName={show?.network?.name}
              schedule={show?.schedule}
              content={show?.status}
              info={show?.type}
              genres={show?.genres}
              site={show?.network?.officialSite}
              list={list}
              rating={show?.rating?.average}
            />
            {show?.network && (
              <MovieDetails
                title={"Network info"}
                schedule={schedule}
                list={networkInfo}
                content={show?.network?.country?.name}
                info={show?.network?.country?.timezone}
              />
            )}
          </div>
        
        </div>
      )}
    </>
  );
}

export default SecondScreen;

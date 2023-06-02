import React from "react";
import StarRatings from "react-star-ratings";

function MovieDetails(props) {
  const {
    title,
    description,
    networkName,
    list: { l1, l2, l3, l4, l5, l6, l7 },
    url,
    schedule: { days, time },
    content,
    info,
    genres,
    site,
    rating,
  } = props;
  function createMarkup() {
    return { __html: description };
  }
  return (
    <>
      <div className="card movie_list">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <div class="row">
            <h6>
              {l1}
              <small
                class="text-muted"
                dangerouslySetInnerHTML={createMarkup()}
              ></small>
            </h6>

            {networkName && (
              <h6>
                {l2}
                <small class="text-muted">
                  <a href={url}>{networkName}</a>
                </small>
              </h6>
            )}

            {days.length != 0 && (
              <h6>
                {l3}
                <small class="text-muted">
                  {days} at {time}
                </small>
              </h6>
            )}
            {props.content && (
              <h6>
                {l4}
                <small class="text-muted">{content}</small>
              </h6>
            )}
            {info && (
              <h6>
                {l5}
                <small class="text-muted">{info}</small>
              </h6>
            )}

            {genres && (
              <h6>
                {l6}
                <small class="text-muted">{genres}</small>
              </h6>
            )}

            {site && (
              <h6>
                {l7}
                <small class="text-muted">
                  <a href={site} target="_blank">
                    {site}
                  </a>
                </small>
              </h6>
            )}

            {rating && (
              <StarRatings
                rating={Number(rating)}
                starRatedColor="yellow"
                numberOfStars={10}
                name="rating"
                starDimension="15px"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieDetails;

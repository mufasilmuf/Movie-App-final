import React from "react";
import "./DetailsPoster.css";
import { useState, useEffect } from "react";

var Poster = (props) => {
  const [MoviesInformation, setMoviesInformation] = useState("");

  useEffect(() => {
    // this code is excute after the UI is procedure first time is smillar to component DID mount
    for (let i = 0; i < props.data.length; i++) {
      if (props.data[i].id === props.id) {
        setMoviesInformation(props.data[i]);
      }
    }
  }, []);

  useEffect(() => {
    for (let i = 0; i < props.data.length; i++) {
      if (props.data[i].id === props.id) {
        setMoviesInformation(props.data[i]);
      }
    }
  });

  return (
    <div className="MoviePoster">
      <img src={MoviesInformation.poster_url} alt={MoviesInformation.title} />
    </div>
  );
};
export default Poster;

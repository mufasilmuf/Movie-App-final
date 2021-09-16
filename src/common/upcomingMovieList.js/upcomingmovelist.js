import React from "react";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import "./upcomingmovelist.css";
import { Link } from "react-router-dom";

var Imagelist = (props) => {
  return (
    <ImageList className="mainContainer" rowHeight={250} cols={6}>
      {props.movieList.map((movie) => {
        return (
          <ImageListItem key={movie.id}>
            <Link to={`/Details?id=${movie.id}`}>
              <img
                src={movie.poster_url}
                alt={movie.title}
                className="Images"
              />
              <ImageListItemBar title={movie.title}></ImageListItemBar>
            </Link>
          </ImageListItem>
        );
      })}
    </ImageList>
  );
};
export default Imagelist;

import React from "react";
import "./ReleasedMovielist.css";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import CardFilter from "../movieFilter/MovieFilter";
import genres from "../genre";
import artists from "../artists";
import { Link } from "react-router-dom";
import { useState } from "react";

var ReleasedMovielist = (props) => {
  const [Movielist, setMovielist] = useState(props.movieList);
  const [search, setsearch] = useState("");

  let Textchange = (e) => {
    setsearch(e.target.value);
  };

  let handeleClick = () => {
    console.log("handle clicked");
    if (search !== "") {
      let filterMovieList = Movielist.filter((movie) => {
        return movie.title.toLowerCase().indexOf(search.toLowerCase()) >= 0;
      });
      setMovielist(filterMovieList);
    } else {
      setMovielist(props.movieList);
    }
  };

  return (
    <div className="flex-container">
      <div className="left">
        <ImageList rowHeight={350} cols={4}>
          {Movielist.map((movie) => {
            return (
              <ImageListItem key={movie.id}>
                <Link to={`/Details?id=${movie.id}`}>
                  <img
                    src={movie.poster_url}
                    alt={movie.title}
                    className="MovieTabsImages"
                  />
                  <ImageListItemBar title={movie.title} />
                </Link>
              </ImageListItem>
            );
          })}
        </ImageList>
      </div>

      <div className="right">
        <CardFilter
          OnTextChange={Textchange}
          HandeleClick={handeleClick}
          MovieGenres={genres}
          MovieArtists={artists}
        />
      </div>
    </div>
  );
};
export default ReleasedMovielist;

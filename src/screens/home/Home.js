import React from "react";
import "./Home.css";
import moviesData from "../../common/moviesData";
import Imagelist from "../../common/upcomingMovieList.js/upcomingmovelist";
import ReleasedMovielist from "../../common/releasedMovielist/RealisedMovielist";
import Header from "../../common/header/Header";

var Home = () => {
  return (
    <div className="home">
      <Header showBtns={false} />
      <span className="Heading">Upcoming Movies</span>
      <Imagelist movieList={moviesData} />
      <ReleasedMovielist movieList={moviesData} />
    </div>
  );
};
export default Home;

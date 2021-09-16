import React from "react";
import "./Details.css";
import Typography from "@material-ui/core/Typography";
import Poster from "../../common/detailsPoster/DetailsPoster";
import MoviesInfo from "../../common/detailsTrailer/DetailsTrailer";
import ArtistsDetails from "../../common/detailsArtists/DetailsArtists";
import { Link } from "react-router-dom";
import moviesData from "../../common/moviesData";
import Header from "../../common/header/Header";

var Detail = (props) => {
  let moveId = props.location.search.slice(1).split("&")[0].split("=")[1];

  return (
    <div>
      <Header showBtns={true} />
      <Link to="/Home" style={{ textDecoration: "none" }}>
        <Typography id="btnBacktoHome">{"<"} Back to Home </Typography>
      </Link>
      <div className="Container">
        <Poster id={moveId} data={moviesData} />
        <MoviesInfo id={moveId} data={moviesData} />
        <ArtistsDetails id={moveId} data={moviesData} />
      </div>
    </div>
  );
};
export default Detail;

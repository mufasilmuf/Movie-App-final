import { Component } from "react";
import "./ReleasedMovielist.css";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import CardFilter from "../movieFilter/MovieFilter";
import genres from "../genre";
import artists from "../artists";
import { Link } from "react-router-dom";

class ReleasedMovielist extends Component {
  state = { Movieslist: this.props.movieList };

  findMovie = "";

  Textchange = (e) => {
    this.findMovie = e.target.value;
  };

  handeleClick = () => {
    console.log("handle clicked");
    if (this.findMovie !== "") {
      let filterMovieList = this.state.Movieslist.filter((movie) => {
        return (
          movie.title.toLowerCase().indexOf(this.findMovie.toLowerCase()) >= 0
        );
      });
      this.setState({ Movieslist: filterMovieList });
    } else {
      this.setState({ Movieslist: this.props.movieList });
    }
  };

  render() {
    return (
      <div className="flex-container">
        <div className="left">
          <ImageList rowHeight={350} cols={4}>
            {this.state.Movieslist.map((movie) => {
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
            OnTextChange={this.Textchange}
            HandeleClick={this.handeleClick}
            MovieGenres={genres}
            MovieArtists={artists}
          />
        </div>
      </div>
    );
  }
}
export default ReleasedMovielist;

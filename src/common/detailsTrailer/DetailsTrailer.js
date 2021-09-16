import { Component } from "react";
import ReactPlayer from "react-player";
import Typography from "@material-ui/core/Typography";
import "./DetailsTrailer.css";

class MoviesInfo extends Component {
  state = {
    MoviesInformation: {
      id: "M4",
      title: "Interstellar",
      storyline:
        "A team of explorers travel beyond this galaxy through a newly discovered wormhole to discover whether mankind has a future among the stars.",
      genres: ["Adventure", "Drama", "Sci-Fi"],
      duration: 169,
      poster_url:
        "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
      trailer_url: "https://www.youtube.com/watch?v=2LqzF5WauAw",
      wiki_url: "https://en.wikipedia.org/wiki/Interstellar_(film)",
      release_date: "2014-11-07T00:00:00+05:30",
      censor_board_rating: "PG-13",
      critics_rating: 8.6,
      status: "PUBLISHED",
      artists: [
        {
          id: "A7",
          first_name: "Matthew",
          last_name: "McConaughey",
          role_type: "ACTOR",
          profile_description:
            "Matthew David McConaughey is an American actor, producer, model, writer and director. McConaughey achieved ample success in 2013 and 2014. In 2013, McConaughey portrayed Ron Woodroof, a cowboy diagnosed with AIDS in the biographical film Dallas Buyers Club, which earned him the Academy Award, Critics' Choice Movie Award, Golden Globe Award, and Screen Actors Guild Award, all for Best Actor, among other awards and nominations. In 2014, he starred as Rust Cohle in the first season of HBO's crime drama anthology series True Detective, for which he won the Critics' Choice Television Award and TCA Award, and was nominated for the Primetime Emmy Award, Golden Globe Award, and Screen Actors Guild Award.",
          profile_url:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Matthew_McConaughey_-_Goldene_Kamera_2014_-_Berlin.jpg/1024px-Matthew_McConaughey_-_Goldene_Kamera_2014_-_Berlin.jpg",
          wiki_url: "https://en.wikipedia.org/wiki/Matthew_McConaughey",
        },
        {
          id: "A8",
          first_name: "Anne",
          last_name: "Hathaway",
          role_type: "ACTOR",
          profile_description:
            "Anne Jacqueline Hathaway is an American actress and singer. One of the world's highest-paid actresses in 2015, she has received multiple awards, including an Academy Award, a Golden Globe, a British Academy Film Award, and an Emmy. Her films have earned $6.4 billion worldwide, and she appeared in the Forbes Celebrity 100 in 2009.",
          profile_url:
            "https://upload.wikimedia.org/wikipedia/commons/b/bd/Anne_Hathaway_in_2017.png",
          wiki_url: "https://en.wikipedia.org/wiki/Anne_Hathaway",
        },
      ],
    },
  };

  componentDidMount() {
    console.log("component did amount");

    let filterarray = this.props.data.filter((data) => {
      return data.id === this.props.id;
    });
    this.setState({ MoviesInformation: filterarray[0] });
  }

  render() {
    return (
      <div className="DetailsofMovie">
        <h2>{this.state.MoviesInformation.title}</h2>
        <br />
        <b>Genre:</b>{" "}
        <Typography className="TypographyStyle">
          {this.state.MoviesInformation.genres.map((genre) => {
            return (
              <span>
                {genre}
                {","}
              </span>
            );
          })}
        </Typography>
        <br />
        <b>Duration:</b>
        <Typography className="TypographyStyle">
          {" "}
          {this.state.MoviesInformation.duration}
        </Typography>
        <br />
        <b>Release Date:</b>{" "}
        <Typography className="TypographyStyle">
          {" "}
          {this.state.MoviesInformation.release_date}
        </Typography>{" "}
        <br />
        <b>Rating:</b>{" "}
        <Typography className="TypographyStyle">
          {this.state.MoviesInformation.critics_rating}
        </Typography>{" "}
        <br />
        <br />
        <b>Plot:</b>{" "}
        <Typography className="TypographyStyle">
          {" "}
          <a href={this.state.MoviesInformation.wiki_url}>
            {"("}Wiki url{")"}
          </a>{" "}
          {this.state.MoviesInformation.storyline}
        </Typography>
        <br />
        <br />
        <b>Trailer:</b>
        <br />
        <ReactPlayer
          url={this.state.MoviesInformation.trailer_url}
          width="100%"
        />
      </div>
    );
  }
}
export default MoviesInfo;

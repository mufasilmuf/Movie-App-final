import { Component } from "react";
import "./DetailsPoster.css";

class Poster extends Component {
  state = {
    MoviesInformation: "",
  };

  componentDidMount() {
    console.log("component did amount");
    debugger;

    let filterarray = this.props.data.filter((data) => {
      return data.id === this.props.id;
    });
    this.setState({ MoviesInformation: filterarray[0] });
    console.log(this.state.MoviesInformation);
  }

  render() {
    return (
      <div className="MoviePoster">
        <img
          src={this.state.MoviesInformation.poster_url}
          alt={this.state.MoviesInformation.title}
        />
      </div>
    );
  }
}
export default Poster;

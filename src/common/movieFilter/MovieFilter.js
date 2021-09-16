import {
  Button,
  Card,
  CardHeader,
  CardContent,
  TextField,
} from "@material-ui/core";
import React from "react";
import { Select } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { Input } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";

var CardFilter = (props) => {
  let theme = createTheme();
  let titleColor = theme.palette.primary.light;
  let componentMargin = theme.spacing(1);
  let componentStyle = {
    minWidth: 240,
    maxWidth: 240,
    margin: componentMargin,
  };

  return (
    <Card>
      <CardHeader
        style={{ ...componentStyle, color: titleColor }}
        title="FIND MOVIES BY: "
      />
      <CardContent>
        <FormControl style={componentStyle}>
          <InputLabel>Movie Name</InputLabel>
          <Input
            id="movie-name"
            name="movieName"
            onChange={props.OnTextChange}
          />
        </FormControl>
        <br />
        {/* --------------------------------------------------------------------------------------
          {/* Genres select option */}
        <FormControl style={componentStyle}>
          <InputLabel id="genres">Genres</InputLabel>
          <Select labelId="genres" id="demo-simple-select">
            {props.MovieGenres.map((genre) => {
              return <MenuItem value={genre.id}>{genre.name}</MenuItem>;
            })}
          </Select>
        </FormControl>
        <br />
        {/* Genres select option */}
        {/* --------------------------------------------------------------------------------------
           {/* Artists select option */}
        <FormControl style={componentStyle}>
          <InputLabel id="artists">Artists</InputLabel>
          <Select labelId="artists" id="demo-simple-select">
            {props.MovieArtists.map((artist) => {
              return (
                <MenuItem value={artist.id}>
                  {artist.first_name + " " + artist.last_name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <br />
        {/* Artists select option */}
        {/* -------------------------------------------------------------------------------------- */}
        <FormControl style={componentStyle}>
          <TextField
            label="Release Date Start"
            InputLabelProps={{ shrink: true }}
            type="date"
            name="releaseDateStart"
          />
        </FormControl>
        <br />
        <FormControl style={componentStyle}>
          <TextField
            label="Release Date End"
            InputLabelProps={{ shrink: true }}
            type="date"
            name="releaseDateEnd"
          />
        </FormControl>
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={props.HandeleClick}
          style={componentStyle}
        >
          APPLY
        </Button>
      </CardContent>
    </Card>
  );
};
export default CardFilter;

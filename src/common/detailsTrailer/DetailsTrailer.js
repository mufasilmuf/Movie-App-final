import React from "react";
import ReactPlayer from "react-player";
import Typography from "@material-ui/core/Typography";
import "./DetailsTrailer.css";
import { useState, useEffect } from "react";

var MoviesInfo = (props) => {
  const [MoviesInformation, setMoviesInformation] = useState([
    {
      id: "M1",
      title: "The Yashfather",
      storyline:
        "A chilling portrait of the Corleone family's rise and near fall from power in America along with balancing the story of the Sicilian clan's ugly crime business in which they are engaged.",
      genres: ["Crime", "Drama"],
      duration: 177,
      poster_url:
        "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
      trailer_url: "https://www.youtube.com/watch?v=5DO-nDW43Ik",
      wiki_url: "https://en.wikipedia.org/wiki/The_Godfather",
      release_date: "1972-03-15T00:00:00+05:30",
      censor_board_rating: "R",
      critics_rating: 9.2,
      status: "PUBLISHED",
      artists: [
        {
          id: "A1",
          first_name: "Marlon",
          last_name: "Brando",
          role_type: "ACTOR",
          profile_description:
            "Marlon Brando Jr. was an American actor and film director. He is credited with bringing realism to film acting and helping to popularize the Stanislavski system of acting having studied with Stella Adler in the 1940s. Regarded for his cultural influence on 20th century film, Brando's Academy Award-winning performances include that of Terry Malloy in On the Waterfront (1954) and Don Vito Corleone in The Godfather (1972). Brando was an activist for many causes, notably the civil rights movement and various Native American movements.",
          profile_url:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUSEhgSEhIZGBgYGBoYGBgYGRgYGBgaGRgZGRgcGBgcIS4lHx4rHxkYJjomKy8xNTU2GiQ7QDs0Py40NTEBDAwMEA8QHxISHzQsISw0NDQ1NDE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAPwAyAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQQFAwYHAgj/xAA7EAACAQIEBAMFBgUEAwEAAAABAgADEQQSITEFQVFhBiJxEzKBkaEHQlKxwfAUI2Jy0TND4fEVgrIW/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAECAwQF/8QAJBEBAQACAgMAAgIDAQAAAAAAAAECEQMhEjFBUWETIjJCcQT/2gAMAwEAAhEDEQA/AOORRxQCEIQHCKOAo4QgKOEIChCEAhHCARRwgEUcICjijgEIQgEIQgKEcIBCEICjijgKOKOAo4o4BCEIChGBeZaeGZjZVJ5dN/WBhjkmrgKiqXam2UGxa11B6FhoD6yMBAIQhAIQhAUcIQCEIQCEIoDhCEBQjigEBCAgOEIQFHACZCuXQjX97WgJafXT8/lLXhnDGqHMENlBJYg5RYEkHL2DH0BOwJGfgnAqtdXqIFtTTMS91AHmyHuGZSoI3J9SLHD8aWgz06Ocozh6Dlv59EkZlzcmtc9jdheztIqYl8M4Hh65yhih8hQ3FmR29mjqpazDPlQi4KuQDpmKz6XA6NAO5vUVCErIPPlp1EZlrIBq9JgQ1wM6ZCbNlYDTauKe4CtYEsQEsFUvlLqv9JGUgdR1vfzhcXVR/ao7ZkAbQ8g1yOwBJ221MjSdt2TG06FQrTfMjjKXLM+UNY5KujB6R2D5Ta5BDeVzJ8PUeHYh/ZYiilKuhNmXKiVAdLgqcquAdtVOhFhe2ne3DMXXyBrscoyqDzYDQAE3zAWykkjy2CmLpZSGuAdbZRa+X3gRybQ8hfmAd62HxuzfZXbPkrqC+ZEz3YBswK3ZRdTYAXI3a3MX0vxZ4LxHDmtUyuhvlqIbg2tmzL7y2JtqLd5ZcI8RYmlnRMQ4zoF0N7jQKdRo4FrEam3pOt+HPEVHFU0Lqt7MXLso87AmoqKfu2NyNrERMrPaLjfcfNkJ0f7QPs9OF9vi8OV/h1Ktk1zKXYqyqBoVU5Tfo3ac4mispRxRwkQhCARGOKACEIQHFCEAhHCApmw1HO4W4F9ydgBuTMUkAZUBzDzXuAPMBtqeh6doHvFYQ0wrH3XUsh0NwGKkHoQVOnp1kYXnm8l0MK7EZFLc9AZHpOt+lhjOPVqtJKQYqiBwEXRFFQi6qPw2A0Nzcsb+aYaD3vmW+5te3mGtweR/O2/Tz/491F7elunpBabcgbakWB5WvcSNxNxs9slUDOTe9wACdyfeBJ6g6fCOlSN2OoAtfS9s97AgnuCPXoZ5TBPU8wU5ebEEKCdxmtvNnwBZaWZWpaghV8z2uwuodWDIpNjlzAb3B2LaZjaq8NgMt1uCpsUcBvKeYZSLg20KkagaXIF1j8M3MWIsLA3tYAAqRoVtltrpdeRFrxMG9RiwQI4AFktqCRoNLH0tqBrLPA8Baoykg2Da9tSLC99NT8+5meWcjTHjtaWlFvIST7t+wsw2/wATZ/D3GFoB6LP5KiMGJp5wjEKui5hfTQ/kZs1TwghVMgtYW12tqfobTWOIcFfDkHJYXY9b2A0B/e/aVmcyTlx2Oo400sbgnwlKoF9tRyZyreViuhZTY7KfS0+efEXCTgsVUwruGamwBZQyg3UNoGF+f+Lidg8P8SZmBKKCEKkJddPMb2HIZlHfSar9rfA6genxAoyrVApOrFWZGQWpFmG7Oi5jvYgi50mnHlvpz5TVc0hHFNA4RRwCEIQCEIQFCEIDhCKB7pkZgTqARcdRfURE7/lJeNxrVhTz5f5dNaS5VC+RSxBa3vN5iLnXQSIo1gWXBeHmtUAG371nSODcOSnlAX+4nW/wlT4PwyLSzZddfU2/febFwxve662+PP8AfWc3Jlvp28GEk2WK4JTdi1hry2H5THT8M21pvZuZ0YfEEeb01l/htTLinT0Gn+Jh55Rvljj9aU/hvzDNTUkbkBR9P3aWuB8M0kBsm9zz368rD0myChmOuo6SzTC+W9tTy/xJmWWTPK44tbpcJRQco0I57jW+nyEnUaIGoG9pOq4cj7pmNU7StlTMpZ09mwAHT/EouPYQOAx1Go2v9Ja1W7yLXN1I6axKjxaQtHI+U38zAjX+qxtebbVw6Jh69TEuzoaTfxCsTUCoVOUsgFyRZbAEEb3A1lJx1GpkVKbZG3DDty+UzeEUFSpUpuxdKqulamUf3XABOe9wQxAN9Rc/Dp47uyuTmx04QI5K4lgmw9Z6FRcrU2ZGG9ipI3sLjvzkWdDIQhCARRwgEIQgKEcUAhHCAQEICB0XwtUAp5eZH15CXmGbKSvc69hNQ8M1bFAToDtrb/vWbhSp3Lfv1/Scmc1Xo8V/rF3gfMAb7dP1mz4cXXSa3wxrqBcaa2l7w6uL2Osx+r5y6WeHo8/lLFQLaGQaVcjQAW/e8zLX7TXHUcWflazVBfdrSBiaY1IMle27SFjsQCLW+MZWWHHLtVV2IkNa3IyTidj6SsYEC/70mMdnxC4ujVP5a81/Z+dtZYeCeG1qbvnq2RtXp5BlJF1NidPMLH/O4sBwwNRWuQuVAKhvbYX9opP4Sub0NvhD4O/8PxVqFiF9kFBOubQFWzE3JICjXmp7k9WGNk7cPNlLdRyj7VOHJh+IMKalc9NajKWzZWYsDr3Cg/GabNp+0nFpW4nXZCxAYKc1/eQZSAOQFgPhNWm8Yz0IQhJSIo4oDhFCA4o4oBHCEBqLm0a6H4x0kJNl35d5N4hhSmpHY+vPUd5G1pNza58PPma22mnW41m+4bzaXsba+tpzvgbZSCOTfnoZvPDOJUwrPUcKL8yBztznPyx28N67bHhFZW0K9wb2l/h0Fw2W19yJrGH8SYRGuaqtpYW81+9uk2DhvEqD+am4KnW17b9AZz6s7saZ5b9NjRVK3vI1Xfy2+v6RrVVdb/qICsrbN9NJp5bckll2906bH736T1Wwwtc6/wDMhvxKnTBufyEqsX4twwujVACOd/TnJmrE+OW9/Geqly1tiZAehdgOrAfUSnxvjmipKopbXcEWt1+cqP8A9qWY/wAu6jVgG1Go1F999pWYZe9NvKa1t1qlgFXDmje4KkE/3Xv+c1fxe4wSVMblXNTULTJABZioVRcdyRy3M2vhWJFXD06gBs6K1juLqDY95zb7Y8W3/jEBOr4kI3oqu30KgTp96ji+7riFWoWYsdySTqTv3Os8QhNVRCEIBCEUBwhCAQhFAcIQgE2+oKb06ZqXOdFZiLXF1sSLdCNjNQk7hmL9mxBF1bQ3lbNxfjur2tcLRKFqe7LbbnoCPpIvsHZtyOlxp8JMwFYLiAeRI3/fadRo8JpVqNzTGbkQNe+omWWfj7dOPH5RzChh84YUqdSoUVnYoh0VRdiTfYazNgaGKrsqYcPUdrsFT3gFW5LXsBaxF+Z2vcE9B4Vg6uDqu+GLBH1ZVCkg7XswNxp1+c2DhSGmXajh1RnN2ZKSUSRpo79PTrInJiplx5T05hh8bjqWlSo4sbEOGBB5qb7G3I9J0Pw5Uq1aYYHN1PMSbxmgooFai5nYNrdmAvbqTsQD8JG8G+S6rzO3aZZWX43xt8dxW+K8E53YgjXp8Jqw8HYnEsy50Sysy+1cKWYXsqouo1FiTtOjcWW9UtbZgdfW/wCkmYjCCugIOUgm+lxrfXL8/rJxy10jPuTblnAfBWIq1AlSkKCLn9rVqIwUWFlWmpYZrkb3tY35eYo8FZqrU3VKiI2XPTBF9xa2vLexNp0bFcJq1BZ3psvWzC1r/dPPU6zzgOHrRGUdbkkbky2XJ+GeOGvd2t/BzWw/siCCh1ub3zXN9uZzTnn2240fw+Go2sz1KlcjmAPKpI75z8jOi8JqLSpV8Q5sqglv7aaFifqflPm3xJxupj8S+Jq7tYKt7hVGyj97kzXj3ZLXPnJMrIqoRRzVQQhCAQhCAQhCAoQhAI4RQHCKOBNwdc3Fz7tregnZvCnEQ1NVbcAfWcSwh8/rN+8O4soF102/SYc2O46+DL5XV6VJS2YaXP70litMkb9eZ+nKUXC8UHUHnsZdmsQNLek5J17a8kvxrviTEBAFJ5EX9AbDtH4LOZz9JW+J6gqOtIHXVj6bD9flLvwZhMoDHe28vjOonLrG/wDGTxB5ah7zPwqr5I/E9DUnqLyBwolWI5C312/KRlNWox/thF+66E9v3rKbH1gt5YYisRNe4tiAAb9DF7MYmcYq5OB4p/xUaov1DgoPobfCfN8794zbJ4erA21yBbXF81dD8/e06CcBnbhNYxw5XeVEIQl1RCEIBCEUBwhCARRwgEIQgKOFoQPSNYg9DN14I4It2E0ibBwHG5St/SUzm414ctZOn+HMUQbHXkfhNxSoGGk5/wCH6wzZSef56zaKGNIcLytz6zhyn9ndZubUvifg+JSqcRQAYFVA2uLDW66X1v8AOe/Dfi1qJ9lXpkAfeCkEeqzYzxBagKHXp/1JOCwaFSHCXI0VspN+wO+kvL1pnleu0PF4lsYhaibIB/qFTYnoq/e78hHwTh5p39pULtuWtYdAAOglvUxtJEFMuiECwUsoIAFvd5aSrTHor3V1NzrZgf3/AMxVcblZrSTjNJqPFat6irrqwHe19f1myYure5Bvm10N99Bb4zXsHR9pXLNbKDbXllIJv231kYTdX3rHaX9pNemcJRwbqx9qxckaZAn3jbqzj5GcW49wVsIy+YOjjMjrsw5g9GHSbrxzHtxDEVKqNZF/l0td0XY/+xu3xlauH9sjYSoSLnMhOuR7cux2M7ZXn5Y5Tuzpo0ck4jBOhNxexINuRGhvI0toEIQgEIoQHCEIBCeghnopaEbeAIwLamZGaYzrJCgxhziMAmbDV8hmGEhaXTeOBcWysrX2OvpOh0lSsoOcgEa2NvgJw7A4o027To3hviodcub6zm5cPsdfDybmqs8Tw+klQq1eugJ0IqeU9LlgbHlrLbA8DotcjHOL73FM/XLPK4H24sdR6biSsP4RouNVI7AsP1lJk2tjLV4HhgCzYqq3XVB/8qJWUcFhTUAp0/aWvmd2ZkHa17M30Es18F0R19CzH5re0kVOECkulgO1tJGWX4Vln5VWNrpSVvZqALWCjZT2mr+KuPHD4E0EP83EXzWtdKdznJ6FjoOxaTfFePSimp1/Mzm3EuIe0JY6s3M9JpxY/WfNlNa2k8G4g9MKBttabIjioA50YagjkRtNMwpstr68pbKz5QUa5302+M2sVwz61lNzXpK8cYQ0K6YmmfJiUFTT3c40cfOx+MqaTUq4syhH6jnNjwlT+N4ZWwjm9XDscRR6lf8AcUfAnT0miA21EvjflcuUnuellX4O4BKEMOmzfKVzIVNmBB7yxw/EMwyuSCPdcbj1jGNBOWsocfiGhlrJfSN1VwljVwCsM1F8w/CdxK90KmxFjIs0SlCEJCUhHnioNYn0MMxMsh5Yx7CeDCRs0IQhISI1QnUCKe6TlTeCPEmcO4i9Bw6HblMVRwwvYX/OYhr2ke0+r07H4W8SJUpghhcaMvMHU/rNpo8ZA2Prv8+0+dadRkN1YqeoNpNXjmIAt7VpjlwbvVb480/2j6GqcYVTctfTQdZQ8f8AE1OmrMz+g6kbWHWcVfjGIb/ef4G35TySxN3cuepJNvnInD+ai80+RN41xN8TUzuf7V6Dv3lVVJ5yWqDc2Fvu63MiVx2tNpIxyt3uikdRpbvLFBtdtOo1tI9GnZVcDMpuGH4SJOw+UAsNV5jmPSLUyW17wWKFCotRGOZSQRsCpFiPkZR1hZmsLamw6C+glotmqAhbLcSFxEfzDaImzraLCEJZR6RyNQbSR/F5tKi5u/ORYSdo0kNhwdaZv25wmBWtCT0jtkqaiY1npjPEhMODRXheQCEIQkQhCBZ8M4LVxKO1FcxSxZAfNY7EDmJDrYV0bK6lSN7g6S48FcZXB4xKtS+Qgq9uSsN7c7Gxndq/CcNi6Sv7NHVgGDWBuDzBmWfJcb66a4445T9vnFEB0PzjbDgHQ3ncsR4AwL3PsbE7FSRKxfs8wzEhGYW66yv8+K04XIclpkWqQLCwBnYKf2b4b77s3baYuK+EsNRp2Sn8+g3j+bEnDu9VyRHBP4vymPFI25GkkYlAGbKLKWNgOl9I8SCaV++s12p4TV/J8FrBXId8qFWzDcHykDT5S1XC0CVWliLNlHvqQrNzF+UoEp+ZdbBrfDWxmx4ngVNVLU8SjWUFRqCdbfO8rlqX2nHdmpJdftAQ5SUtbX685U4w+aTagIFjcOCVb13Erqh1lsVc8rZI8QhFLKCOKEBwhCB6aeYzFFRBAQhCShCOAoQhAc6f9lPikq38BVbytc0SfutuV9DuJy+ZKNVkYOhIZSCpG4INwRK5YzKaq2OXjdvqK1tDzMkU6ABJ6C01LwZ4rp8QpLmIFZRaot9bj7yjmDNrFQ2AuLnYziuPjdVtctzpkbDDLmE1TxewShVdmsERvrtNsepZfLueU5D9rPG2BXCqfeGZ9eQOg+Mthj5ZSJxyuMtrndE5zcmwknHtZCo2FhIVADvfl6zJiQch35X6TsY+V0VCixX2hHlvlB7jkJJdMoD3vqCvwPOS+An2lCtSL2sA6ra5YjQgfC0i4yk6Cz02UAcx15yu93SLjqTJJxKtUeoCBmdUcWOg6ylxC89uRHQiDV268gvwGwjxOJL+8BfqNLyZjYm5TJHhCEsocUI4BCEIHphPMbGKKiFHFCEiEIQCEI4ChCAgSsBjnw9RatJirqbgj6g9RO/eCPFKcQoXsq1U0dOn9S9jPniWHBOMVcHWWvRazLoQdmU7qR0lM8PKftbHLT6Z4pWFKg9S4AQFiewFzPmbjnEWxWIesfvtoOg2Am+eM/Hq4nh6UaJIar/qrzQDdfifpOb0PeW/WV4sPHupt30s8EcvlZLdNP1ix1PysV2k6t7u3SR8abU2NrduWss3uOty/Iw8HwlRwz0iCU1K38x/tHOWPEPEtSpTam6Icy5b5bEEaX9ZW8HxDI11OVh7p5H+k9RLurxJK6Mj0V9pldidrty0+crl73ZtTD/HUuttZFQBRcXA/OeK7BhcAC3SebaAHrFfQjleasd1ijhCECEIQCEIQGYo4GEFCBihJxQhAIQhALwhCAQhCAT0hsR6zzPabiBs+GcMuvSV/FaoylbzArkDQzBWN736/rKtcv8A0bx1p64e4uVbY7HoeslF2Vg33lIuR95b7/KQMLuZKOw9bfCTYzxvemPFU71HVfxE/A6yMaZA1HKZKrHNuZhNQ6677xPRfbxCEJKChHFAcIoQP//Z",
          wiki_url: "https://en.wikipedia.org/wiki/Marlon_Brando",
        },
        {
          id: "A2",
          first_name: "Al",
          last_name: "Pacino",
          role_type: "ACTOR",
          profile_description:
            "Alfredo James Pacino is an American actor and filmmaker. Pacino has had a career spanning over five decades, during which time he has received numerous accolades and honors both competitive and honorary, among them an Academy Award, two Tony Awards, two Primetime Emmy Awards, a British Academy Film Award, four Golden Globe Awards, the Lifetime Achievement Award from the American Film Institute, the Golden Globe Cecil B. DeMille Award, and the National Medal of Arts. He is also one of few performers to have won a competitive Oscar, an Emmy, and a Tony Award for acting, dubbed the 'Triple Crown of Acting'.",
          profile_url:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Al_Pacino.jpg/220px-Al_Pacino.jpg",
          wiki_url: "https://en.wikipedia.org/wiki/Al_Pacino",
        },
      ],
    },
  ]);

  useEffect(() => {
    // this code is excute after the UI is procedure first time is smillar to component DID mount
    console.log("as good as Inside-component did Mount");
    for (let i = 0; i < props.data.length; i++) {
      if (props.data[i].id === props.id) {
        setMoviesInformation(props.data[i]);
      }
    }
  }, []);

  useEffect(() => {
    // this code is excute after the UI is procedure first time is smillar to component DID mount
    console.log("as good as Inside-component did Mount");
    for (let i = 0; i < props.data.length; i++) {
      if (props.data[i].id === props.id) {
        setMoviesInformation(props.data[i]);
      }
    }
  });

  return (
    <div className="DetailsofMovie">
      <h2>{MoviesInformation.title}</h2>
      <br />
      <b>Genre:</b>{" "}
      <Typography className="TypographyStyle">
        <span>{MoviesInformation.genres}</span>
      </Typography>
      <br />
      <b>Duration:</b>
      <Typography className="TypographyStyle">
        {" "}
        {MoviesInformation.duration}
      </Typography>
      <br />
      <b>Release Date:</b>{" "}
      <Typography className="TypographyStyle">
        {" "}
        {MoviesInformation.release_date}
      </Typography>{" "}
      <br />
      <b>Rating:</b>{" "}
      <Typography className="TypographyStyle">
        {MoviesInformation.critics_rating}
      </Typography>{" "}
      <br />
      <br />
      <b>Plot:</b>{" "}
      <Typography className="TypographyStyle">
        {" "}
        <a href={MoviesInformation.wiki_url}>
          {"("}Wiki url{")"}
        </a>{" "}
        {MoviesInformation.storyline}
      </Typography>
      <br />
      <br />
      <b>Trailer:</b>
      <br />
      <ReactPlayer url={MoviesInformation.trailer_url} width="100%" />
    </div>
  );
};
export default MoviesInfo;

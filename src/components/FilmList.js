import React, { Component } from "react";
import FilmInfo from "./FilmInfo";

class FilmList extends Component {
  handleFilmClick() {
    console.log("clicked");
  }

  render() {
    const { films } = this.props;

    return (
      <div>
        {films.map(film => (
          <div key={film.url} onClick={this.handleFilmClick}>
            <h3 className="film-name">{film.title}</h3>
            <FilmInfo filmInfo={film} />
          </div>
        ))}
      </div>
    );
  }
}

export default FilmList;

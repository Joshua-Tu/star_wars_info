import React, { Component } from "react";
import FilmInfo from "./FilmInfo";

class FilmList extends Component {
  handleFavourited = () => {
    console.log("alert of favourited");
  };

  render() {
    const { films } = this.props;

    return (
      <div>
        {films.map(film => (
          <div key={film.url}>
            <h3 className="film-name" onClick={this.handleFavourited}>
              {film.title}
            </h3>
            <FilmInfo filmInfo={film} />
          </div>
        ))}
      </div>
    );
  }
}

export default FilmList;

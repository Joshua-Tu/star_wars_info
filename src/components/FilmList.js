import React, { Component } from "react";
import FilmInfo from "./FilmInfo";

class FilmList extends Component {
  handleFavourited = () => {
    console.log("alert of favourited");
  };

  searchingFor = term => {
    return filmx => {
      return filmx.title.toLowerCase().includes(term.toLowerCase()) || !term;
    };
  };

  render() {
    const { films, term } = this.props;
    console.log("term is " + term);
    return (
      <div>
        {films.filter(this.searchingFor(term)).map(film => (
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

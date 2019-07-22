import React, { Component } from "react";
import FilmInfo from "./FilmInfo";

const searchingFor = term => {
  return x => {
    return x.title.toLowerCase().includes(term.toLowerCase()) || !term;
  };
};

class FilmList extends Component {
  handleFavourited = () => {
    console.log("alert of favourited");
  };

  render() {
    const { films, term } = this.props;
    console.log("term is " + term);
    return (
      <div>
        {films.filter(searchingFor(term)).map(film => (
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

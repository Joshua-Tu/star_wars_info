import React, { Component } from "react";

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
            <h3 className="char-name">{film.title}</h3>
          </div>
        ))}
      </div>
    );
  }
}

export default FilmList;

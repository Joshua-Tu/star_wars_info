import React, { Component } from "react";

class FilmList extends Component {
  handleFilmClick() {
    console.log("clicked");
  }

  render() {
    const { films, loading } = this.props;
    console.log(films);
    return (
      <div>
        {films.map(film => {
          return loading ? (
            <div key={film.url} onClick={this.handleFilmClick}>
              <h3 className="char-name">Loading...</h3>
            </div>
          ) : (
            <div key={film.url} onClick={this.handleFilmClick}>
              <h3 className="char-name">{film.title}</h3>
            </div>
          );
        })}
      </div>
    );
  }
}

export default FilmList;

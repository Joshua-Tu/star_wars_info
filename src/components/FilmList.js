import React, { Component } from "react";

class FilmList extends Component {
  render() {
    const { films, loading } = this.props;
    return (
      <div>
        {films.map(film => {
          console.log(loading);
          return loading ? (
            <div key={film.url}>
              <p>{film.title}</p>
            </div>
          ) : (
            <div key={film.url}>
              <p>{film.title}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default FilmList;

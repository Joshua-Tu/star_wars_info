import React, { Component } from "react";

class FilmList extends Component {
  render() {
    const { films, loading } = this.props;
    return (
      <div>
        {films.map(film => {
          console.log(loading);
          return loading ? (
            <p key={film.url}>loading...</p>
          ) : (
            <p key={film.url}>{film.title}</p>
          );
        })}
      </div>
    );
  }
}

export default FilmList;

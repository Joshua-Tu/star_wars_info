import React, { Component } from "react";
import Axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      films: []
    };
    this.getFilms = this.getFilms.bind(this);
  }

  getFilms() {
    return Axios.get("https://swapi.co/api/films").then(res => {
      this.setState({
        loading: false
      });
      this.setState({ films: res.data.results });
    });
  }

  componentDidMount() {
    this.setState({
      loading: true
    });
    this.getFilms();
  }

  render() {
    const { films, loading } = this.state;
    console.log(films, loading);
    const comp = films.map(film => {
      const title = loading ? "loading..." : film.title;
      return <p key={film.url}>{title}</p>;
    });

    return <div className="App">{comp}</div>;
  }
}
export default App;

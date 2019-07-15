import React, { Component } from "react";
import Axios from "axios";
import FilmList from "./components/FilmList";

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
    //console.log(films, loading);

    return (
      <div className="App">
        <FilmList loading={loading} films={films} />
      </div>
    );
  }
}
export default App;

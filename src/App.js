import React, { Component } from "react";
//import axios from "axios";
import FilmList from "./components/FilmList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      films: [],
      term: ""
    };
  }

  searchHandler = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  //getFilms() {

  // return axios.get("https://swapi.co/api/films").then(res => {
  //   this.setState({
  //     loading: false,
  //     films: res.data.results
  //   });
  // });
  //}

  componentDidMount() {
    this.setState({
      loading: true
    });

    //this.getFilms();

    fetch("https://swapi.co/api/films")
      .then(res => res.json())
      .then(data => {
        this.setState({
          loading: false,
          films: data.results
        });
      });
  }

  render() {
    const { films, loading, term } = this.state;
    const loadingText = <h3>Loading...</h3>;
    console.log(films, "loading " + loading);

    return (
      <div className="App">
        <form className="container">
          <label>
            search
            <input
              type="text"
              name="term"
              value={term}
              placeholder="by a film title"
              onChange={this.searchHandler}
            />
          </label>
        </form>
        {loading ? loadingText : <FilmList films={films} term={term} />}
      </div>
    );
  }
}
export default App;

import React, { Component } from "react";

class FilmInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    };
  }

  toggle = () => {
    this.setState(prevState => {
      return {
        expanded: !prevState.expanded
      };
    });
  };

  render() {
    const { filmInfo } = this.props;
    if (this.state.expanded) {
      return (
        <>
          <p className="btn btn-info" onClick={this.toggle}>
            Hide Info
          </p>
          <ul>
            <li>Director: {filmInfo.director}</li>
            <li>Episode {filmInfo.episode_id}</li>
            <li>Release date:{filmInfo.release_date} </li>
          </ul>
        </>
      );
    }
    return (
      <p className="btn btn-info" onClick={this.toggle}>
        Show info
      </p>
    );
  }
}

export default FilmInfo;

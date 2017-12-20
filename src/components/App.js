/* eslint-disable import/no-named-as-default */
import GameplayContainer from "./GameplayContainer";
import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Rhythm Game Web Remake</h1>
        <h2>by team connor</h2>
        <GameplayContainer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;

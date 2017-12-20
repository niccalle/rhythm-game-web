import React from "react";
import { Circle } from "react-konva";
import PropTypes from "prop-types";

class RhythmCircle extends React.Component {
  render() {
    return (
      <Circle radius={50} x={this.props.x} y={this.props.y} fill="black" />
    );
  }
}

RhythmCircle.propTypes = {
  x: PropTypes.number.required,
  y: PropTypes.number.required
};

export default RhythmCircle;

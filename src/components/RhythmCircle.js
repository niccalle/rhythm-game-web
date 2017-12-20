import React from "react";
import { Circle } from "react-konva";
import PropTypes from "prop-types";

class RhythmCircle extends React.Component {
  constructor() {
    super();
    setInterval(() => {
      // find out how to use this.setState() to change the approachingDistance
    }, 100);
    this.state = {
      approachingDistance: this.props.approachingDistance
    };
  }
  render() {
    return [
      <Circle
        radius={100}
        x={this.props.x}
        y={this.props.y}
        fillEnabled={false}
      />,
      <Circle radius={50} x={this.props.x} y={this.props.y} fill="black" />
    ];
  }
}

RhythmCircle.propTypes = {
  x: PropTypes.number.required,
  y: PropTypes.number.required,
  approachingDistance: PropTypes.number.required
};

export default RhythmCircle;

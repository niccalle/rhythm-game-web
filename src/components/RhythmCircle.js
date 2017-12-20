import React from "react";
import { Circle } from "react-konva";
import PropTypes from "prop-types";

class RhythmCircle extends React.Component {
  constructor(props) {
    super(props);
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
        stroke="black"
      />,
      <Circle radius={50} x={this.props.x} y={this.props.y} fill="black" />
    ];
  }
}

RhythmCircle.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  approachingDistance: PropTypes.number.isRequired
};

export default RhythmCircle;

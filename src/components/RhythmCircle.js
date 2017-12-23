import React from "react";
import { Circle } from "react-konva";
import PropTypes from "prop-types";

const RHYTHM_RADIUS = 140;
const CIRCLE_RADIUS = 40;

class RhythmCircle extends React.Component {
  constructor(props) {
    super(props);
    this.incrementScore = this.props.incrementScore;
    this.state = {
      approachingDistance: RHYTHM_RADIUS,
      exists: true
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 20);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      approachingDistance:
        this.state.approachingDistance - (RHYTHM_RADIUS - CIRCLE_RADIUS) / 50
    });

    if (this.state.approachingDistance <= CIRCLE_RADIUS / 2) {
      clearInterval(this.timerID);
      this.setState({
        exists: false
      });
      this.incrementScore(0);
    }
  }

  handleMousePress() {
    this.setState({
      exists: false
    });
    clearInterval(this.timerID);
    // Increment score
    // Grade timing based on approaching distance
    if (this.state.approachingDistance > CIRCLE_RADIUS * 2) {
      this.incrementScore(0);
    } else if (
      this.state.approachingDistance <= CIRCLE_RADIUS - 10 ||
      this.state.approachingDistance > CIRCLE_RADIUS + 10
    ) {
      this.incrementScore(0.5);
    } else {
      this.incrementScore(1);
    }
  }

  getOpacity() {
    // Opacity should be indirectly proportional to the size of the approaching circle
    return (CIRCLE_RADIUS / this.state.approachingDistance) ** 0.5;
  }

  render() {
    const { x, y } = this.props;
    return this.state.exists
      ? [
          <Circle
            radius={this.state.approachingDistance}
            opacity={this.getOpacity()}
            x={x}
            y={y}
            fillEnabled={false}
            stroke={this.props.color}
          />,
          <Circle
            radius={CIRCLE_RADIUS}
            opacity={this.getOpacity()}
            x={x}
            y={y}
            fill={this.props.color}
            onMouseDown={this.handleMousePress.bind(this)}
          />
        ]
      : null;
  }
}

RhythmCircle.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  approachingDistance: PropTypes.number.isRequired,
  incrementScore: PropTypes.func.isRequired
};

export default RhythmCircle;

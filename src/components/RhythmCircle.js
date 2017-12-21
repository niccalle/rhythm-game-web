import React from "react";
import { Circle } from "react-konva";
import PropTypes from "prop-types";

const RHYTHM_RADIUS = 140;
const CIRCLE_RADIUS = 40;

class RhythmCircle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      approachingDistance: RHYTHM_RADIUS,
      exists: true
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      20
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick(){
    this.setState({
      approachingDistance: this.state.approachingDistance-((RHYTHM_RADIUS - CIRCLE_RADIUS) / 50)
    });

    if(this.state.approachingDistance <= CIRCLE_RADIUS / 2){
      clearInterval(this.timerID);
      this.setState({
        exists: false
      });
      console.log("Miss");
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
      console.log("Miss");
    }
    else if (this.state.approachingDistance <= CIRCLE_RADIUS - 10 ||
      this.state.approachingDistance > CIRCLE_RADIUS + 10) {
      console.log("Bad");
    }
    else {
      console.log("Good");
    }
  }

  render() {
    const {x, y} = this.props;
    return this.state.exists ?
      [
        <Circle
          radius={this.state.approachingDistance}
          x={x}
          y={y}
          fillEnabled={false}
          stroke="black"
        />,
        <Circle radius={CIRCLE_RADIUS} x={x} y={y} fill="black" onMouseDown={this.handleMousePress.bind(this)}/>
      ] : null;
  }
}

RhythmCircle.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  approachingDistance: PropTypes.number.isRequired
};

export default RhythmCircle;


export function incrementScore(amount) {
  return {
    type: 'INCREMENT_SCORE',
    payload: amount,
  };
}

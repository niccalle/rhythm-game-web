import React from "react";
import { Circle } from "react-konva";
import PropTypes from "prop-types";

class RhythmCircle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      approachingDistance: this.props.approachingDistance
    };
  }
  componentDidMount() {
   this.timerID = setInterval(
     () => this.tick(),
     100
   );
 }

 componentWillUnmount() {
   clearInterval(this.timerID);
 }

  tick(){
    this.setState({approachingDistance: this.state.approachingDistance-5});
    if(this.state.approachingDistance <= 45){
      clearInterval(this.timerID);
    }
  }

  render() {
    return [
      <Circle
        radius={this.state.approachingDistance}
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

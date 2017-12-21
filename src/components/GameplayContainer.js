import React from "react";
import PropTypes from "prop-types";
import { Layer, Stage } from "react-konva";
import RhythmCircle from "./RhythmCircle";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/timerActions";

class GameplayContainer extends React.Component {
  componentDidMount() {
    this.timer = setInterval(() => this.props.actions.incrementBeat(), 1000);
  }

  render() {
    // render multiple circles here
    return (
      <Stage width={700} height={700}>
        <Layer>
          {this.props.beatMap.currentBeatmapCircles.map(circle => (
            <RhythmCircle x={circle.x} y={circle.y} approachingDistance={100} />
          ))}
        </Layer>
      </Stage>
    );
  }
}
GameplayContainer.propTypes = {
  beatMap: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    beatMap: state.app.beatMap
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameplayContainer);

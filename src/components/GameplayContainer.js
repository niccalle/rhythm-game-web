import React from "react";
import PropTypes from "prop-types";
import { Layer, Stage } from "react-konva";
import RhythmCircle from "./RhythmCircle";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as beatmapActions from "../actions/beatmapActions";
import * as scoreActions from "../actions/scoreActions";

class GameplayContainer extends React.Component {
  componentDidMount() {
    document.body.addEventListener("keydown", this.handleKeyPress);
    this.timer = setInterval(() => this.timerCallback(), 1000);
  }

  timerCallback() {
    if (this.props.beatmap.isPlaying) {
      this.props.actions.beatmapActions.incrementBeat();
    }
  }

  handleKeyPress = event => {
    if (document.activeElement.tagName === "INPUT") return;
    this.props.actions.beatmapActions.handleKeyPress(event.key);
  };

  render() {
    // render multiple circles here
    return (
      <div>
        <div> Score: {this.props.score.currentScore}</div>
        <div>
          {" "}
          Accuracy:{" "}
          {this.props.score.notesHit / this.props.score.notesTotal * 100}%
        </div>
        <Stage width={700} height={700}>
          <Layer>
            {this.props.beatmap.currentBeatmapCircles.map(circle => (
              <RhythmCircle
                x={circle.x}
                y={circle.y}
                color={circle.color}
                approachingDistance={100}
                isPlaying={this.props.beatmap.isPlaying}
                incrementScore={this.props.actions.scoreActions.incrementScore}
              />
            ))}
          </Layer>
        </Stage>
      </div>
    );
  }
}

GameplayContainer.propTypes = {
  beatmap: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  score: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    beatmap: state.beatmap,
    score: state.score
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      beatmapActions: bindActionCreators(beatmapActions, dispatch),
      scoreActions: bindActionCreators(scoreActions, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameplayContainer);

import React from "react";
import { Layer, Stage } from "react-konva";
import RhythmCircle from "./RhythmCircle";
const GameTimer = require("./GameTimer");

class GameplayContainer extends React.Component {
  componentDidMount() {
    GameTimer.start();
  }

  render() {
    // render multiple circles here
    return (
      <Stage width={700} height={700}>
        <Layer>
          <RhythmCircle x={200} y={200} approachingDistance={100} />
        </Layer>
      </Stage>
    );
  }
}

export default GameplayContainer;

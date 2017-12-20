import React from "react";
import { Layer, Stage } from "react-konva";
import RhythmCircle from "./RhythmCircle";

class GameplayContainer extends React.Component {
  render() {
    // render multiple circles here
    return (
      <Stage width={700} height={700}>
        <Layer>
          <RhythmCircle x={200} y={200} />
        </Layer>
      </Stage>
    );
  }
}

export default GameplayContainer;

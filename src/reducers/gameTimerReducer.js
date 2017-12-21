import { INCR_BEAT } from "../constants/actionTypes";
import initialState from "./initialState";

export default function gameTimerReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case INCR_BEAT:
      newState = { ...state };
      newState.beatMap = {
        currentBeatmapCircles: [
          ...newState.beatMap.currentBeatmapCircles,
          { x: Math.random() * 500, y: Math.random() * 500 }
        ]
      };
      return newState;

    default:
      return state;
  }
}

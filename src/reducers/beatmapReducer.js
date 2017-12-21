import { INCR_BEAT } from "../constants/actionTypes";

const initialState = {
  currentBeatmapCircles: []
};

export default function beatmapReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case INCR_BEAT:
      newState = {
        ...state,
        currentBeatmapCircles: [
          ...state.currentBeatmapCircles,
          { x: Math.random() * 500, y: Math.random() * 500 }
        ]
      };
      return newState;

    default:
      return state;
  }
}

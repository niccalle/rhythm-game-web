import { INCR_BEAT } from "../constants/actionTypes";

const RED = "#ff0000";

const initialState = {
  currentBeatmapCircles: [],
  currentBeat: 0,
  measureColor: RED
};

// Get a new random color for the measure
const getRandomMeasureColor = () => {
  // found this code online for getting a random color
  const randomColor = "#000000".replace(/0/g, function() {
    return (~~(Math.random() * 16)).toString(16);
  });
  return randomColor;
};

// Current logic for determining if the new beat will be the start of a new measure
// since we're just working with evenly spaced quarter notes right now, we're simplifying
// the logic by saying if the current beat is 4 then the next beat will be a new measure
const updateBeatAndColor = currentBeat => {
  if (currentBeat !== 4) {
    return { currentBeat: currentBeat + 1 };
  }
  return {
    currentBeat: 1,
    measureColor: getRandomMeasureColor()
  };
};

export default function beatmapReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case INCR_BEAT:
      newState = {
        ...state,
        ...updateBeatAndColor(state.currentBeat),
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

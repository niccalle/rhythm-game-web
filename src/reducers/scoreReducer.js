import { INCR_SCORE } from "../constants/actionTypes";

const initialState = {
  currentScore: 0,
  highScore: 0,
  notesHit: 0,
  notesTotal: 0
};

export default function scoreReducer(state = initialState, action) {

  switch (action.type) {
    case INCR_SCORE:
      return {
        ...state,
        currentScore: state.currentScore + action.payload*100,
        notesHit: state.notesHit + action.payload,
        notesTotal: state.notesHit + 1
      };

    default:
      return state;
  }
}

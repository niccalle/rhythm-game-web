// Set up your root reducer here...
import { combineReducers } from "redux";
import score from "./scoreReducer";
import beatmap from "./beatmapReducer";

export default combineReducers({
  score,
  beatmap
});

// Set up your root reducer here...
import { combineReducers } from "redux";
import gameTimerReducer from "./gameTimerReducer";

export default combineReducers({
  app: gameTimerReducer
});

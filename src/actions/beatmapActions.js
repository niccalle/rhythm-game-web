import * as types from "../constants/actionTypes";

export function incrementBeat() {
  return {
    type: types.INCR_BEAT
  };
}

export function handleKeyPress(key) {
  switch (key) {
    case "Escape":
      return {
        type: types.PAUSE
      };
  }
}

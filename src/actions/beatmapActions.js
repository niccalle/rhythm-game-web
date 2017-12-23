import * as types from "../constants/actionTypes";

export function incrementBeat() {
  return {
    type: types.INCR_BEAT
  };
}

import * as types from "../constants/actionTypes";

export function incrementScore(amount) {
  return {
    type: types.INCR_SCORE,
    payload: amount
  };
}

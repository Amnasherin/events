/* eslint-disable prettier/prettier */
import ACTION_TYPES from './types/Types';

export function IsLoggedChanged(value) {
  return {
    type: ACTION_TYPES.ISLOGGED_CHANGED,
    payload: {value},
  };
}

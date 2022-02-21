/* eslint-disable prettier/prettier */
import ACTION_TYPES from '../action/types/Types';
const initialState = {
    userData: null,
};

const IsLoggedReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.ISLOGGED_CHANGED:
      return {
        ...state,
        userData: action.payload.value,
      };

    default:
      return state;
  }
};

export default IsLoggedReducer;

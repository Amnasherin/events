/* eslint-disable prettier/prettier */
import {IsLoggedChanged} from '../action/LogService';

export const LoggedService = (value) => (dispatch) => {
  dispatch(IsLoggedChanged(value));
};

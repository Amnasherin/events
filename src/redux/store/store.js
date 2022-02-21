/* eslint-disable prettier/prettier */
import thunk from 'redux-thunk';
// import {createLogger} from 'redux-logger';
import IsLoggedReducer from '../reducers/LogReducer';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';

const appReducers = combineReducers({
  IsLoggedReducer,
});
// const logger = createLogger();

const reduxStore = createStore(appReducers, applyMiddleware(thunk));
export default reduxStore;
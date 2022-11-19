import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';

const rootReducer = combineReducers({
  // locations: locationReducer,
  weather: weatherReducer,
});

export default rootReducer;

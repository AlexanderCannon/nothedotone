//3rd party
import { combineReducers } from 'redux';
//Ours
import Work from './Work'
import WorkActive from './WorkActive'

const rootReducer = combineReducers({
  work:Work,
  workActive:WorkActive
});

export default rootReducer;
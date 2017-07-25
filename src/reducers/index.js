//3rd party
import { combineReducers } from 'redux';
//Ours
import Work from './Work'
import WorkActive from './WorkActive'
import Intro from './Intro'

const rootReducer = combineReducers({
  work:Work,
  workActive:WorkActive,
  intro: Intro
});

export default rootReducer;
//3rd party
import { combineReducers } from 'redux';
//Ours
import Work from './Work'
import WorkActive from './WorkActive'
import Intro from './Intro'
import Qualifications from './Qualifications'

const rootReducer = combineReducers({
  work:Work,
  workActive:WorkActive,
  intro: Intro,
  qualifications: Qualifications
});

export default rootReducer;
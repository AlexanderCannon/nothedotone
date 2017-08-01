//3rd party
import { combineReducers } from 'redux';
//Ours
import Work from './Work'
import WorkActive from './WorkActive'
import Intro from './Intro'
import Qualifications from './Qualifications'
import Skills from './Skills'

const rootReducer = combineReducers({
  Work,
  WorkActive,
  Intro,
  qualifications: Qualifications,
  Skills
});

export default rootReducer;
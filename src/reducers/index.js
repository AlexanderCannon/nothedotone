//3rd party
import { combineReducers } from 'redux';
//Ours
import Work from './Work'
import WorkActive from './WorkActive'
import Intro from './Intro'
import Qualifications from './Qualifications'
import Skills from './Skills'
import ContactForm from './ContactForm'

const rootReducer = combineReducers({
  Work,
  WorkActive,
  Intro,
  Qualifications,
  Skills,
  ContactForm
});

export default rootReducer;
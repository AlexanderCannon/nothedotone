import {WORK_SELECTED} from '../actions/index';

export default function (state = null, action) {
  switch (action.type) {
    case 'WORK_SELECTED':
      //best practise to retun a new object instead of mutating the one
      return action.payload;
    default:
      return state
  }
}
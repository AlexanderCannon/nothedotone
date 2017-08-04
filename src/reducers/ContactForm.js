export default function (state = {}, action) {
  switch (action.type) {
    case 'ADD_TO_FORM':
      let { name, value } = action.payload;
      let x = { ...state, [name]: value };
      x = pickButtons(x, state.picked);
      return x;
    case 'PICK_FORM':
      let picked = action.payload !== state.picked ? action.payload : !state.picked;
      let y = { ...state, picked, from:picked }
      y = pickButtons(y, state.picked);
      return y
    case 'SUBMIT_FORM':
      alert(JSON.stringify(state));
      return state;
    default:
      return state
  }
}

function pickButtons(newState, picked) {
  switch (picked) {
    case 'company':
      if (newState.message && newState.name && newState.company) {
        newState.page2 = true;
        newState.ready = true;
      } else {
        newState.ready = false;
      }
      break;
    case 'friend':
      if (newState.message && newState.name) {
        newState.ready = true;
        newState.page2 = false;
      } else {
        newState.ready = false;
      }
      break
    case 'agent':
      if (newState.message && newState.name && newState.company) {
        newState.page2 = true;
      } else {
        newState.ready = false;
      }
      break;
    case 'spec':
      if (newState.location && newState.title && newState.file) {
        newState.ready = true;
        newState.page2 = false;
      } else {
        newState.ready = false;
        newState.page2 = false;
      }
      break;
    default:
      break;
  }
  return newState;
}
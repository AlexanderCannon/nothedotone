export default function (state = {}, action) {
  switch (action.type) {
    case 'ADD_TO_FORM':
      let { name, value } = action.payload;
      return { ...state, [name]: value };
    case 'PICK_FORM':
      let picked = action.payload !== state.picked ? action.payload : !state.picked;
      let x = { ...state, picked }
      return x
    default:
      return state
  }
}
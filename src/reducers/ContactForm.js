export default function (state = {}, action) {
  switch (action.type) {
    case 'ADD_TO_FORM':
      let { name, value } = action.payload;
      return { ...state, [name]: value };
    default:
      return state
  }
}
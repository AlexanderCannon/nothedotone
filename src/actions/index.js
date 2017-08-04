export function selectWork(payload) {
  return {
    type: 'WORK_SELECTED',
    payload
  };
};
export function addToForm(payload) {
  return {
    type: 'ADD_TO_FORM',
    payload
  };
};
export function pickForm(payload) {
  return {
    type: 'PICK_FORM',
    payload
  };
};

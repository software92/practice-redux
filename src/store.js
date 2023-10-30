import { createStore } from 'redux';

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADD':
      console.log('ADD');
      return state + 1;
    case 'MINUS':
      console.log('MINUS');
      return state - 1;
    default:
      break;
  }
};
const store = createStore(reducer);

export default store;

import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

const addAction = createAction('ADD');
const minusAction = createAction('MINUS');

// // deprecated
// const reducer = createReducer(0, {
//   [addAction]: (state, action) => {
//     return state + 1;
//   },
//   [minusAction]: (state, action) => {
//     return state - 1;
//   },
// });

// builder callback
const reducer = createReducer({ count: 0 }, builder =>
  builder
    .addCase(addAction, (state, action) => {
      state.count++;
    })
    .addCase(minusAction, (state, action) => {
      state.count--;
    })
);

const store = configureStore({ reducer });

export default store;

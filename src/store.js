import { configureStore, createAction, createReducer, createSlice } from '@reduxjs/toolkit';

// const addAction = createAction('ADD');
// const minusAction = createAction('MINUS');

// // // deprecated
// // const reducer = createReducer(0, {
// //   [addAction]: (state, action) => {
// //     return state + 1;
// //   },
// //   [minusAction]: (state, action) => {
// //     return state - 1;
// //   },
// // });

// // builder callback
// const reducer = createReducer({ count: 0 }, builder =>
//   builder
//     .addCase(addAction, (state, action) => {
//       state.count++;
//     })
//     .addCase(minusAction, (state, action) => {
//       state.count--;
//     })
// );

const todo = createSlice({
  name: 'todo-reducer',
  initialState: { count: 0 },
  reducers: {
    add: (state, action) => {
      state.count++;
    },
    minus: (state, action) => {
      state.count--;
    },
  },
});

const store = configureStore({ reducer: todo.reducer });

export const { add, minus } = todo.actions;
export default store;

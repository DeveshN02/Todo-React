import { createSlice, nanoid } from "@reduxjs/toolkit";

// creating initial state for todos
const initialState = {
  todos: [{ id: 1, task: "Padai krna" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // here we have to write functions for performing tasks
    addTodo: (state, action) => {
      // create todo object and fetch value from user
      const todo = {
        id: nanoid(),
        task: action.payload,
      };

      // now push these todo object to state
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      // remove that todo using filter method and then update this to todos
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

// now export the reducer function
export const { addTodo, removeTodo } = todoSlice.actions;

// export reducer for store
export default todoSlice.reducer;

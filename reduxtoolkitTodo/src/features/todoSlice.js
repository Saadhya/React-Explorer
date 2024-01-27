import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 0, text: "Hello World" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      const todo = {
        id: nanoid(),
        text: payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, { payload }) => {
      state.todos = state.todos.filter((todo) => payload !== todo.id);
    },
  },
});
export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
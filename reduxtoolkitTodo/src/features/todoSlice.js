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
    updateTodo: (state, { payload }) => {
        state.todos = state.todos.map((todo) => {
          payload.id === todo.id ? payload.text: todo.text;
        });
      console.log(state.todos[0].text);
    },
  },
});
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;

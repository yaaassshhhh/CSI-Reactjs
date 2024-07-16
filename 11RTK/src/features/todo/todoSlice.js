import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id: 1,
        text: 'Learn React',
    }],

}
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(todo);
        },
        removeTodo: (state , action) => {
            const id  = action.payload;
            state.todos = state.todos.filter((todo)=> todo.id !== id);
        },
    }
})

export const {addTodo , removeTodo} = todoSlice.actions;
export default todoSlice.reducer;
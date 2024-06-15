import React, { useState } from 'react'
import { useTodo } from '../contexts';

function TodoForm() {
    
    const [todo,setTodo] = useState('');
    const {addTodo} = useTodo();

    const add = (e)=> {
        e.preventDefault();
        if(!todo) return;
        //since in the functionality that we defined for addTodo we are expecting an objext, we will pass an object here 
        addTodo({todo});
        setTodo('');
    }
    return (
        <form onSubmit={add} className="flex">
            <input
                value={todo}
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                onChange={(e)=>setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;



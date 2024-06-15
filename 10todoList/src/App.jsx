import { useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts'
import {TodoForm,TodoItem} from './components'
import { useEffect } from 'react';

function App() {
  //here the state variable todos will hold all the list of todos (todo objects)
  const [todos, setTodos] = useState([]);
  //here the todo we are taking in the addTodo function is the todo object that we are getting from the form
  const addTodo = (todo) => {
//we cant direclty add the new todo into the state vairable todos as setTodo(todo) because it will replace all the existing todos with the new todo
//thus we will use the previous state of todos and add the new todo to it
// also cannot directly add the new todo since we have defined the todos as an array of objects, thus we need to add the new todo as an object
    setTodos((prevTodos)=> [...prevTodos,{
      //***for now i will just take the id as the current time later i will use an ID genertor***
      id : Date.now(),
      todo : todo.todo,
      completed : false
    }]);
  }

  const updateTodo = (id,todo)=>{
    //will loop through the todos for the matching id 
    setTodos((prevTodos)=> prevTodos.map((prevTodo)=>(
      prevTodo.id === id ? {...prevTodo,todo:todo} : prevTodo
    )))
  }

  const deleteTodo = (id)=>{
    setTodos((prevTodos)=>prevTodos.filter((prevTodo)=>prevTodo.id !== id))
  }

  const toggleComplete =(id)=>{
    setTodos((prevTodos)=>prevTodos.map((prevTodo)=>(
      prevTodo.id === id ? {...prevTodo, completed : !prevTodo.completed} : prevTodo
    )))
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem('todos'))
    if(todos && todos.length > 0){
      setTodos(todos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])
  return (
    
      <TodoProvider value={{todos,addTodo,updateTodo,toggleComplete,deleteTodo}}>
        <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                      {todos.map((todo)=>(
                        <div
                        className="w-full"
                        key={todo.id} 
                        >
                          <TodoItem todo={todo} />
                        </div>
                      ))}
                    </div>
                </div>
            </div>
      </TodoProvider>
  )
}

export default App

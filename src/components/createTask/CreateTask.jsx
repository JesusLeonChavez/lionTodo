import React from 'react'
import "./createTask.css"

export default function CreateTask({ todo, setTodo, todos, setTodos }) {
    function handleSubmit(e){
        e.preventDefault();

        const newTodo = {
            id: new Date().getTime(),
            text: todo,
            completed: false
        };

        if(!newTodo.text){
          alert("Incomplete data");
          return;
        }

        setTodos([...todos].concat(newTodo));
        setTodo("");
    }

  return (
    <>
        <h1 className="title">Todo List</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
          <button className="buttonAdd" type="submit">
            Add Todo
          </button>
        </form>
    </>
  )
}

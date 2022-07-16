import React, { useState, useEffect } from "react";

import "./toDo.css"

export default function ToDo() {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("");
    const [todoEditing, setTodoEditing] = useState(null);
    const [editingText, setEditingText] = useState("");

    useEffect(() => {
        const json = localStorage.getItem("todos");
        const loadedTodos = JSON.parse(json);
        if (loadedTodos) {
          setTodos(loadedTodos);
        }
    }, [])
    
    useEffect(() => {
        const json = JSON.stringify(todos);
        localStorage.setItem("todos", json);
    }, [todos]);
    

    function handleSubmit(e){
        e.preventDefault();

        const newTodo = {
            id: new Date().getTime(),
            text: todo,
            completed: false,
        };

        setTodos([...todos].concat(newTodo));
        setTodo("");
    }

    function toggleComplete(id){
        let updateTodos = [...todos].map((todo) => {
            if(todo.id === id){
                todo.completed = !todo.completed;
            }
            return todo;
        });
        setTodos(updateTodos)       
    }

    function deleteTodo(id) {
        let updateTodos = [...todos].filter((todo) => todo.id !== id);
        setTodos(updateTodos)
    }

    function submitEdits(id) {
        const updatedTodos = [...todos].map((todo) => {
            if (todo.id === id) {
              todo.text = editingText;
            }
            return todo;
          });
          setTodos(updatedTodos);
          setTodoEditing(null);
    }

    return (
      <div className="toDoContainer">
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
        {todos.map((todo) => (
          <div key={todo.id} className="todo">
            <div className="todoText">
              <input
                type="checkbox"
                id="completed"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
              />
              {todo.id === todoEditing ? (
                <input
                  type="text"
                  onChange={(e) => setEditingText(e.target.value)}
                />
              ) : (
                <div>{todo.text}</div>
              )}
            </div>
            <div className="todoActions">
              {todo.id === todoEditing ? (
                <button
                  className="buttonEdit"
                  onClick={() => submitEdits(todo.id)}
                >
                  Submit Edits
                </button>
              ) : (
                <button
                  className="buttonEdit"
                  onClick={() => setTodoEditing(todo.id)}
                >
                  Edit
                </button>
              )}

              <button
                className="buttonDelete"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    );
}

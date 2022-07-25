import React, { useState, useEffect } from "react";
import "./toDo.css"
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

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

    const columns = [
      {
        field: "completed",
        headerName: "Completed",
        width: 150,
        renderCell: (params) => {
          return (
            <div className="todoText">
              <input
                type="checkbox"
                id="completed"
                checked={params.row.completed}
                onChange={() => toggleComplete(params.row.id)}
              />
            </div>
          );
        },
      },
      {
        field: "task",
        headerName: "Tasks",
        width: 500,
        renderCell: (params) => {
          return (
            <div className="todoText">
              {params.row.id === todoEditing ? (
                <input
                  type="text"
                  onChange={(e) => setEditingText(e.target.value)}
                />
              ) : (
                <div>{params.row.text}</div>
              )}
            </div>
          );
        },
      },
      {
        field: "actions",
        headerName: "Action",
        width: 500,
        renderCell: (params) => {
          return (
            <div className="todoActions">
              {params.row.id === todoEditing ? (
                <button
                  className="buttonEdit"
                  onClick={() => submitEdits(params.row.id)}
                >
                  Submit Edits
                </button>
              ) : (
                <button
                  className="buttonEdit"
                  onClick={() => setTodoEditing(params.row.id)}
                >
                  Edit
                </button>
              )}

              <button
                className="buttonDelete"
                onClick={() => deleteTodo(params.row.id)}
              >
                Delete
              </button>
            </div>
          );
        },
      },
    ];

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
        <Box sx={{ height: 620, width: "100%" }}>
          <DataGrid
            rows={todos}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[5]}
          />
        </Box>
      </div>
    );
}
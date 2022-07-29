import React from 'react'
import "./createTask.css"
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CreateTask({ todo, setTodo, todos, setTodos }) {

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpen(true);
    };

    const handleClose = (event, reason) => {
      if (reason === "clickaway") {
        return;
      }

      setOpen(false);
    };

    function handleSubmit(e){
        e.preventDefault();

        const newTodo = {
            id: new Date().getTime(),
            text: todo,
            completed: false
        };

        if(!newTodo.text){
           return (
             <Snackbar
               open={open}
               autoHideDuration={6000}
               onClose={handleClose}
             >
               <Alert
                 onClose={handleClose}
                 severity="warning"
                 sx={{ width: "100%" }}
               >
                 This is a success message!
               </Alert>
             </Snackbar>
           );
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
        <button onClick={handleClick} className="buttonAdd" type="submit">
          Add Todo
        </button>
      </form>
    </>
  );
}

import React, { useState, useEffect } from "react";
import {
  Container,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Checkbox,
  Box,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { Delete } from "@mui/icons-material";

const ToDoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
          <Typography variant="h4" align='center' sx={{marginTop:'20px'}} color="primary" gutterBottom>
        To-Do App
      </Typography>


      <Container
  maxWidth="sm"
  style={{
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch", // Ensures full width elements
  }}
>
  <TextField
  size="small"
  multiline
    label="New Task"
    variant="outlined"
    fullWidth
    value={newTask}
    onChange={(e) => setNewTask(e.target.value)}
  />

  {/* Button Wrapper - Pushes Button to Right */}
  <Box display="flex" justifyContent="flex-end" mt={2}>
    <Button variant="contained" color="primary" onClick={addTask}>
      Add Task
    </Button>
  </Box>

  {/* Task List */}
  <List>
    {tasks.map((task, index) => (
      <ListItem key={index}>
        <Checkbox checked={task.completed} onChange={() => toggleTask(index)} />
        <ListItemText
          primary={task.text}
          style={{ textDecoration: task.completed ? "line-through" : "none" }}
        />
        <IconButton onClick={() => deleteTask(index)}>
          <Delete color="error" />
        </IconButton>
      </ListItem>
    ))}
  </List>
</Container>

    </div>
  );
};

export default ToDoApp;

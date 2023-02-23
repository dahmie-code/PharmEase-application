import { useState, useEffect } from "react";
import "./TodoList.css";
import {MdDelete} from "react-icons/md";


function TodoList() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState(() => {
    return localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : [];
  });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, [setTasks]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() === "") {
      return;
    }
    setTasks([...tasks, { id: Date.now(), name: newTask, done: false }]);
    setNewTask("");
    setShowForm(false);
  };

  const handleDelete = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleToggle = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <div className="todo-list">
      <h2>Task To Do</h2>

      {showForm && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter a task"
            value={newTask}
            onChange={handleInputChange}
          />
          <button type="submit">Add</button>
        </form>
      )}
      <ul className="todo-list-done">
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => handleToggle(task.id)}
            />
            <span
              className={task.done ? "done" : ""}
              onClick={() => handleToggle(task.id)}
            >
              {task.name}
            </span>
            <button onClick={() => handleDelete(task.id)} className="delete-btn"><MdDelete/></button>
          </li>
        ))}
      </ul>
      <div style={{display:"flex", justifyContent:"flex-end"}}>
        <button onClick={() => setShowForm(!showForm)} className="add-btn">
          {showForm ? "-" : "+"}
        </button>
      </div>
    </div>
  );
}

export default TodoList;

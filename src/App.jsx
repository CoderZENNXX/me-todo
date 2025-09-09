import './App.css'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([
    { text: "Go to my sister's friend's university campus in New York City", done: false },
    { text: "Buy groceries", done: false },
    { text: "Finish my React project", done: false },
    { text: "Read a book", done: false },
    { text: "Exercise for 30 minutes", done: false }
  ])

  function addTask(e) {
    if (e.target.value.trim() !== "") {
      setTasks([...tasks, { text: e.target.value, done: false }])
    }
    e.target.value = ""
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index))
  }

  function toggleDoneTask(index) {
    setTasks(tasks.map((task, i) => 
      i === index ? { ...task, done: !task.done } : task
    ))
  }

  return (
    <div className="app">
      <header className="header">
        <h1 className="web-title">Me-ToDo</h1>
      </header>

      <main className="main">
        <h1 className="list-title">To-Do List</h1>
        <div className="menu">
          <input 
            type="text" 
            className="task-input" 
            placeholder="Enter a task" 
            onKeyDown={(e) => e.key === "Enter" && addTask(e)} 
          />
        </div>

        <ol className="tasks-list">
          {tasks.map((task, index) => (
            <div className="task-container" key={index}>
              <li 
                className="task" 
                style={{backgroundColor: task.done ? "green" : "inherit", textDecoration: task.done ? "line-through" : "none" }}
              >
                {task.text}
              </li>
              <button className="delete-btn" onClick={() => deleteTask(index)}>Remove</button>
              <button className="done-btn" onClick={() => toggleDoneTask(index)}>
                {task.done ? "Undo" : "Done"}
              </button>
            </div>
          ))}
        </ol>
      </main>
    </div>
  )
}

export default App
import './App.css'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([
    { text: "Go to my sister's friend's university campus in New York City", status: "normal" },
    { text: "Buy groceries", status: "normal" },
    { text: "Finish my React project", status: "normal" },
    { text: "Read a book", status: "normal" },
    { text: "Exercise for 30 minutes", status: "normal" }
  ])

  function addTask(e) {
    if (e.target.value.trim() !== "") {
      setTasks([...tasks, { text: e.target.value, status: "normal" }])
    }
    e.target.value = ""
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index))
  }

  function toggleStatus(index) {
    setTasks(tasks.map((task, i) => {
      if (i === index) {
        let nextStatus
        if (task.status === "done") {
          nextStatus = "pending"
        }
        else if (task.status === "pending") {
          nextStatus = "normal"
        }
        else {
          nextStatus = "done"
        }
        return { ...task, status: nextStatus }
      }
      return task
    }))
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
            <div 
              className="task-container" 
              key={index}
              style={{
                backgroundColor: task.status === "done" ? "green" : task.status === "pending" ? "orange" : "inherit",
                color: task.status === "done" || task.status === "pending" ? "black" : "inherit"
              }}
            >
              <li 
                className="task" 
                style={{textDecoration: task.status === "done" ? "line-through" : "none"}}
              >
                {task.text}
              </li>
              <button className="delete-btn" onClick={() => deleteTask(index)}>Remove</button>
              <button className="done-btn" onClick={() => toggleStatus(index)}
                style={{
                  backgroundColor: task.status === "done" ? "darkgreen" : task.status === "pending" ? "darkorange" : "black"
                }}>
                {task.status === "done" ? "Done" : task.status === "pending" ? "Pending" : "Normal"}
              </button>
            </div>
          ))}
        </ol>
      </main>
    </div>
  )
}

export default App

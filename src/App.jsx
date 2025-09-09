import './App.css'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState(["Go to my sister's friend's university campus in New York City", "Buy groceries", "Finish my React project", "Read a book", "Exercise for 30 minutes"])
  const [doneTasks, setDoneTasks] = useState([])
  const [showDone, setShowDone] = useState(false)

  function addTask(e) {
    if (e.target.value.trim() !== "") {
      setTasks([...tasks, e.target.value])
    }
    e.target.value = ""
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index))
  }

  function deleteDoneTask(index) {
    setDoneTasks(doneTasks.filter((_, i) => i !== index))
  }

  function doneTask(index) {
    const taskToMove = tasks[index]
    setDoneTasks([...doneTasks, taskToMove])
    deleteTask(index)
  }

  function unDoneTask(index) {
    const taskToMove = doneTasks[index]
    setTasks([...tasks, taskToMove])
    deleteDoneTask(index)
  }

  function toggleShowDone(e) {
    setShowDone(!showDone)
    e.target.textContent = showDone ? "Show Done Tasks" : "Hide Done Tasks"
  }

  return (
    <div className="app">
      <header className="header">
        <h1 className="web-title">Me-ToDo</h1>
      </header>

      <main className="main">
        <h1 className="list-title">To-Do List</h1>
        <div className="menu">
          <input type="text" className="task-input" placeholder="Enter a task" 
            onKeyDown={(e) => e.key === "Enter" && addTask(e, e.target.value)}
          />
          <button className="done-list-btn" onClick={(e) => toggleShowDone(e)}>Show Done Tasks</button>
        </div>
        {
          showDone ? (
            <ol className="tasks-list">
              {doneTasks.map((task, index) => (
                <div className="task-container" key={index}>
                    <li key={index} className="task">{task}</li>
                    <button className="delete-btn" onClick={() => deleteDoneTask(index)}>Remove</button>
                    <button className="done-btn" onClick={() => unDoneTask(index)}>Undone</button>
                </div>
              ))}
            </ol>
          ) : 
          (
            <ol className="tasks-list">
              {tasks.map((task, index) => (
                <div className="task-container" key={index}>
                    <li key={index} className="task">{task}</li>
                    <button className="delete-btn" onClick={() => deleteTask(index)}>Remove</button>
                    <button className="done-btn" onClick={() => doneTask(index)}>Done</button>
                </div>
              ))}
            </ol>
          )
        }
        
      </main>
    </div>
  )
}

export default App

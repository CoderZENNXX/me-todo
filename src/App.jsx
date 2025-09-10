import './App.css'
import { useState } from 'react'

function App() {
  const [normalTasks, setNormalTasks] = useState([
    "Go to my sister's friend's university campus in New York City", 
    "Buy groceries", 
    "Finish my React project", 
    "Read a book", 
    "Exercise for 30 minutes"
  ])
  const [doneTasks, setDoneTasks] = useState([])
  const [pendingTasks, setPendingTasks] = useState([])
  const [showList, setShowList] = useState("normal")

  function addTask(e) {
    if (e.target.value.trim() !== "") {
      setNormalTasks([...normalTasks, e.target.value])
    }
    e.target.value = ""
  }

  function deleteTask(index, type) {
    if(type === "normal") {
      setNormalTasks(normalTasks.filter((_, i) => i !== index))
    }

    if(type === "done") {
      setDoneTasks(doneTasks.filter((_, i) => i !== index))
    }

    if(type === "pending") {
      setPendingTasks(pendingTasks.filter((_, i) => i !== index))
    }
  }

  function moveTask(index, type) {
    let task;
    if(type === "normal") {
      task = normalTasks[index]
      setNormalTasks(normalTasks.filter((_, i) => i !== index))
      setDoneTasks([...doneTasks, task])
    }

    if(type === "done") {
      task = doneTasks[index]
      setDoneTasks(doneTasks.filter((_, i) => i !== index))
      setPendingTasks([...pendingTasks, task])
    }

    if(type === "pending") {
      task = pendingTasks[index]
      setPendingTasks(pendingTasks.filter((_, i) => i !== index))
      setNormalTasks([...normalTasks, task])
    }
  }

  function toggleShowList() {
    if(showList === "normal") {
      setShowList("done")
    }

    else if(showList === "done") {
      setShowList("pending")
    }

    else {
      setShowList("normal")
    }
  }

  let tasksToShow, typeForButton
  if(showList === "normal") {
    tasksToShow = normalTasks
    typeForButton = "normal"
  }
  else if(showList === "done") {
    tasksToShow = doneTasks
    typeForButton = "done"
  }
  else {
    tasksToShow = pendingTasks
    typeForButton = "pending"
  }

  return (
    <div className="app">
      <header className="header">
        <h1 className="web-title">Me-ToDo</h1>
      </header>

      <main className="main">
        <h1 className="list-title">To-Do List</h1>
        <div className="menu">
          {showList === "normal" && (
            <input 
              type="text" 
              className="task-input" 
              placeholder="Enter a task" 
              onKeyDown={(e) => e.key === "Enter" && addTask(e)} 
            />
          )}
          <button className="done-list-btn" onClick={toggleShowList}>
            {showList === "normal" ? "Normal Tasks" : showList === "done" ? "Done Tasks" : "Pending Tasks"}
          </button>
        </div>

        <ol className="tasks-list">
          {tasksToShow.map((task, index) => (
            <div className="task-container" key={index}>
              <li className="task">{task}</li>
              <button className="delete-btn" onClick={() => deleteTask(index, typeForButton)}>Remove</button>
              <button className="done-btn" onClick={() => moveTask(index, typeForButton)}
                style={{
                  backgroundColor: typeForButton === "normal" ? "black" : typeForButton === "done" ? "darkgreen" : "darkorange"
                }}>
                {typeForButton === "normal" ? "Normal" : typeForButton === "done" ? "Done" : "Pending"}
              </button>
            </div>
          ))}
        </ol>
      </main>
    </div>
  )
}

export default App
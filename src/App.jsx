import './App.css'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState(["Go to my sister's friend's university campus in New York City", "Buy groceries", "Finish my React project", "Read a book", "Exercise for 30 minutes", "Go to my sister's friend's university campus in New York City", "Buy groceries", "Finish my React project", "Read a book", "Exercise for 30 minutes", "Go to my sister's friend's university campus in New York City", "Buy groceries", "Finish my React project", "Read a book", "Exercise for 30 minutes", "Go to my sister's friend's university campus in New York City", "Buy groceries", "Finish my React project", "Read a book", "Exercise for 30 minutes", "Go to my sister's friend's university campus in New York City", "Buy groceries", "Finish my React project", "Read a book", "Exercise for 30 minutes", "Go to my sister's friend's university campus in New York City", "Buy groceries", "Finish my React project", "Read a book", "Exercise for 30 minutes", "Go to my sister's friend's university campus in New York City", "Buy groceries", "Finish my React project", "Read a book", "Exercise for 30 minutes", "Go to my sister's friend's university campus in New York City", "Buy groceries", "Finish my React project", "Read a book", "Exercise for 30 minutes", "Go to my sister's friend's university campus in New York City", "Buy groceries", "Finish my React project", "Read a book", "Exercise for 30 minutes", "Go to my sister's friend's university campus in New York City", "Buy groceries", "Finish my React project", "Read a book", "Exercise for 30 minutes", "Go to my sister's friend's university campus in New York City", "Buy groceries", "Finish my React project", "Read a book", "Exercise for 30 minutes", "Go to my sister's friend's university campus in New York City", "Buy groceries", "Finish my React project", "Read a book", "Exercise for 30 minutes", "Go to my sister's friend's university campus in New York City", "Buy groceries", "Finish my React project", "Read a book", "Exercise for 30 minutes", "Go to my sister's friend's university campus in New York City", "Buy groceries", "Finish my React project", "Read a book", "Exercise for 30 minutes", "Go to my sister's friend's university campus in New York City", "Buy groceries", "Finish my React project", "Read a book", "Exercise for 30 minutes"])
  const [doneTasks, setDoneTasks] = useState([""])

  function deleteTask(index) {
    const newTasks = tasks.filter((_, i) => i !== index)
    setTasks(newTasks)
  }

  function doneTask(index) {
    const taskToMove = tasks[index]
    setDoneTasks([...doneTasks, taskToMove])
    deleteTask(index)
  }

  return (
    <div className="app">
      <header className="header">
        <h1 className="web-title">Me-ToDo</h1>
      </header>

      <main className="main">
        <h1 className="list-title">To-Do List</h1>
        <div className="menu">
          <input type="text" className="task-input" placeholder="Enter a task" />
          <button className="done-list-btn">Show Done</button>
        </div>
        <ol className="tasks-list">
          {tasks.map((task, index) => (
            <div className="task-container" key={index}>
                <li key={index} className="task">{task}</li>
                <button className="delete-btn" onClick={() => deleteTask(index)}>Delete</button>
                <button className="done-btn" onClick={() => doneTask(index)}>Done</button>
            </div>
          ))}
        </ol>
      </main>
    </div>
  )
}

export default App

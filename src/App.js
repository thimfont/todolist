import React, { useState } from 'react'
import TaskTable from './table/TaskTable'
import AddTaskForm from './forms/AddTaskForm'
import EditTaskForm from './forms/EditTaskForm'

const App = () => {
  const tasksData = [
    {
      id: 1,
      title: 'Boletos',
      description: 'pay the bills'
    },
    {
      id: 2,
      title: 'Registration',
      description: 'go to school'
    },
    {
      id: 3,
      title: 'Movie',
      description: 'buy tickets'
    },
  ]

  const initialFormState = { id: null, title: '', description: '' }
  const [tasks, setTasks] = useState(tasksData)
  const [currentTask, setCurrentTask] = useState(initialFormState)
  const [editing, setEditing] = useState(false)

  const addTask = (task) => {
    task.id = tasks.length + 1
    setTasks([...tasks, task])
  }

  const updateTask = (id, updatedTask) => {
    setEditing(false)
    setTasks(tasks.map((task) => task.id === id ? updatedTask : task))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id != id))
  }

  const editRow = (task) => {
    setEditing(true)
    setCurrentTask(task)
  }

  return (
    <div className="container">
      <h1>Todo List App</h1>

      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h3>Edit task</h3>
              <EditTaskForm
                setEditing={setEditing}
                currentTask={currentTask}
                updateTask={updateTask} />
            </div>
          ) : (
            <div>
              <h3>Add task</h3>
              <AddTaskForm addTask={addTask} />
            </div>
          )}
        </div>

        <div className="flex-large">
          <h3>Table task list</h3>
          <TaskTable
            tasksData={tasks}
            deleteTask={deleteTask}
            editRow={editRow} />
        </div>
      </div>
    </div >
  )
}

export default App;

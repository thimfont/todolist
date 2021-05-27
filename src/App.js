import React, { useState } from 'react'
import TaskTable from './table/TaskTable'
import AddTaskForm from './forms/AddTaskForm'

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

  const [tasks, setTasks] = useState(tasksData)

  return (
    <div className="container">
      <h1>Todo List App</h1>

      <div className="flex-row">
        <div className="flex-large">
          <h3>Add task</h3>
          <AddTaskForm />
        </div>

        <div className="flex-large">
          <h3>Table task list</h3>
          <TaskTable tasksData={tasksData} />
        </div>
      </div>
    </div>
  )
}

export default App;

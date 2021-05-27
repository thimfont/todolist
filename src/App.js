import React from 'react'
import TaskTable from './table/TaskTable'

const App = () => {
  const tasksData = [
    {
      id: 1,
      title: 'Boletos',
      description: 'pay the bills',
    },
    {
      id: 2,
      title: 'Registration',
      description: 'go to school',
    },
    {
      id: 3,
      title: 'Movie',
      description: 'buy tickets',
    },
  ]

  return (
    <div className="container">
      <h1>Todo List App</h1>

      <div className="flex-row">
        <div className="flex-large">
          <h3>Add task</h3>

          <form>
            <label>Title</label>
            <input type="text" name="title" value="" />

            <label>Description</label>
            <input type="text" name="description" value="" />

            <button>Add new task</button>
          </form>
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

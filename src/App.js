import React from 'react'

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
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasksData.length > 0 ? (
                tasksData.map((task) => (
                  <tr key={task.id}>
                    <td>{task.title}</td>
                    <td>{task.description}</td>
                    <td>
                      <button className="button muted-button">Edit</button>
                      <button className="button muted-button">Delete</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td>No tasks.</td>
                </tr>
              )
              }

            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default App;

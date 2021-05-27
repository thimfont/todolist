import React from 'react'

const App = () => {
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
              <tr>
                <td>Study</td>
                <td>I have study inglish</td>
                <td>
                  <button className="button muted-button">Edit</button>
                  <button className="button muted-button">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default App;

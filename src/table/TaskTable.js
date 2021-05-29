import React from 'react'

const TaskTable = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.tasksData.length > 0 ? (
                    props.tasksData.map((task) => (
                        <tr key={task.id}>
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td>
                                <button
                                    onClick={() => props.editRow(task)}
                                    className="button muted-button">Edit</button>
                                <button
                                    onClick={() => props.deleteTask(task.id)}
                                    className="button muted-button">Delete</button>
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
    )
}

export default TaskTable
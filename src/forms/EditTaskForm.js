import React, { useState, useEffect } from 'react'

const EditTaskForm = (props) => {

    const [task, setTask] = useState(props.currentTask)

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setTask({ ...task, [name]: value })
    }

    useEffect(() => {
        setTask(props.currentTask)
    }, [props])

    return (
        <form
            onSubmit={event => {
                event.preventDefault()
                if (!task.title || !task.description) return
                props.updateTask(task.id, task)
            }}
        >
            <label>Title</label>
            <input
                type="text"
                name="title"
                value={task.title}
                onChange={handleInputChange}
            />

            <label>Description</label>
            <input
                type="text"
                name="description"
                value={task.description}
                onChange={handleInputChange}
            />
            <button
                className="button muted-button"
            >
                Update task
            </button>

            <button
                onClick={() => props.setEditing(false)}
                className="button muted-button"
            >
                Cancel
            </button>
        </form>
    )
}

export default EditTaskForm
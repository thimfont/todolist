import React, { useState } from 'react'

const AddTaskForm = (props) => {
    const initialFormState = {
        id: null,
        title: '',
        description: '',
    }

    const [task, setTask] = useState(initialFormState)

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setTask({ ...task, [name]: value })
    }

    return (
        <form
            onSubmit={event => {
                event.preventDefault()
                props.addTask(task)
                setTask(initialFormState)
            }}
        >
            <label>Title</label>
            <input
                type="text"
                name="title"
                value={task.title}
                onChange={handleInputChange} />

            <label>Description</label>
            <input
                type="text"
                name="description" value={task.description}
                onChange={handleInputChange} />

            <button>Add new task</button>
        </form >
    )
}

export default AddTaskForm
import React, { useState } from 'react'

const AddTaskForm = () => {
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
        <form>
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
        </form>
    )
}

export default AddTaskForm
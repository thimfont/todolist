import React from 'react'

const AddTaskForm = () => {
    return (
        <form>
            <label>Title</label>
            <input type="text" name="title" value="" />

            <label>Description</label>
            <input type="text" name="description" value="" />

            <button>Add new task</button>
        </form>
    )
}

export default AddTaskForm
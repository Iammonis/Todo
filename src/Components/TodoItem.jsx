import React from 'react'

export const TodoItem = ({ id, title, status, description, priority, handleToggle, handleDelete }) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{status ? "Done" : "Not done"}</p>
            <p>{description}</p>
            <p>{priority}</p>
            Toggle <input checked={ status } onChange={ e => handleToggle(id, e)} type="checkbox"/>
            <button onClick={ () => handleDelete(id) }>Delete</button>
        </div>
    )
}

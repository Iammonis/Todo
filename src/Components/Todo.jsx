import { useState } from 'react'
import { TodoList } from './TodoList'
import { v4 as uuid } from 'uuid'

export const Todo = () => {
    let initData = {
        title: '',
        status: false,
        description: '',
        priority: 1,
    }
    const [allTasks, setAllTasks] = useState([])
    const [todo, setTodo] = useState(initData)
    const [flag, setflag] = useState(false)

    const handleToggle = (id, e) => {
        let temp = allTasks.map( item => item.id === id ? { ...item, status: e.target.checked } : item )

        setAllTasks( temp )
    }

    const handleSubmit = e => {
        e.preventDefault()

        let payload = [ 
            ...allTasks,
            {
                id: uuid(),
                title: todo.title,
                status: todo.status,
                description: todo.description,
                priority: todo.priority
            } 
        ]

        setAllTasks( payload )
    }

    const handleChange = e => {
        const { name, value, type, checked } = e.target

        let payload = {
            ...todo,
            [name]: value
        }

        if( type === 'checkbox' ){
            payload = {
                ...todo,
                [name]: checked
            }
        }

        setTodo( payload )
    }

    const handleDelete = id => {
        let temp = allTasks.filter( item => item.id !== id )
        setAllTasks( temp )
    }


    return (
        <>
            <button onClick={ () => setflag( state => !state ) }>{ flag ? "Hide" : "Show" }</button>

            {
                flag && <div>
                    <h1>Todo</h1>
                    <form onSubmit={ handleSubmit }>
                        <input onChange={ handleChange } value={todo.title} name='title' placeholder="title" type="text"/>
                        Status
                        <input onChange={ handleChange } checked={todo.status} name='status' placeholder="status" type="checkbox"/>
                        <input onChange={ handleChange } value={todo.description} name='description' placeholder="description" type="text"/>
                        <input onChange={ handleChange } value={todo.priority} name='priority' placeholder="priority" type="number"/>
                        <button>Add</button>
                    </form>

                    <TodoList handleToggle={handleToggle} handleDelete={handleDelete} allTasks={allTasks} />
                </div>
            }
        </>
    )
}

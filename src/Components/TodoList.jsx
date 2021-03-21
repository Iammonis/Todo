import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({allTasks, handleToggle,handleDelete}) => {
    const [sort, setSort] = React.useState('def')
    const [flag, setFlag] = React.useState(false)


    return (
        <div>
            {/* <select value={ sort } onChange ={ e => setSort(e.target.value) }>
                <option value="def">Default</option>
                <option value="desc">Descending</option>
                <option value="asc">Ascending</option>
            </select>
            {
                sort === 'def' ? allTasks.map( item => <TodoItem 
                                                        key={ item.id } 
                                                        handleToggle={handleToggle} 
                                                        handleDelete={handleDelete} 
                                                        {...item} /> ) : 
                sort === 'desc' ? allTasks.sort( (a,b) => b.priority - a.priority ).map( item => <TodoItem 
                                                        key={ item.id } 
                                                        handleToggle={handleToggle} 
                                                        handleDelete={handleDelete} 
                                                        {...item} /> ) :
                allTasks.sort( (a,b) => a.priority - b.priority ).map( item => <TodoItem 
                                                        key={ item.id } 
                                                        handleToggle={handleToggle} 
                                                        handleDelete={handleDelete} 
                                                        {...item} /> )
            } */}
            { 
                allTasks.length > 0 && <button onClick={ () => setFlag( state => !state ) }>{ flag ? "hide finished tasks" : "show finished tasks" }</button>
            }
            <h1>Unfinished tasks</h1>
            {
                allTasks.filter( item => !item.status ).map( item => <TodoItem 
                    key={ item.id } 
                    handleToggle={handleToggle} 
                    handleDelete={handleDelete} 
                    {...item} /> )
            }
            <h1>Finished tasks</h1>
            {
                flag && allTasks.filter( item => item.status ).map( item => <TodoItem 
                    key={ item.id } 
                    handleToggle={handleToggle} 
                    handleDelete={handleDelete} 
                    {...item} /> ) 
            }
        </div>
    )
}

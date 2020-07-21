import NewTodoForm from './NewSongForm'
import React, { useState } from 'react';


/*************************************/
const TodoList = () => {
    const [todos, setTodos] = useState([ ]);
    function handleRemove(id){
const deleteList = todos.filter((todo) => todo.id !== id);

setTodos(deleteList)
    }
/*************************************/

    const addTodo = (title) => {
        setTodos([...todos, { title, id: Math.random() }])
    } 
   
    return(
        <div>
        <div>
            <p className="note">PS: If you want to edit your todo you can click on it and change it </p>
        </div>
        <div className="Todo-placement" >
            
           <ul>
              {todos.map(todo => {
                  return (
                      <div className="TODOS">
                       <p  contenteditable="true" className="todos-phrases" key={todo.id}>{todo.title}</p>
                       <button type="button" className="delete-button" onClick={() =>handleRemove(todo.id)}>delete</button> 
                       
                     
                       </div>
              )})}
           </ul>
           <NewTodoForm addTodo={addTodo}/>
           
           </div>
        </div>
    )
}

export default TodoList
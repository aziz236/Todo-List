import React, { useState } from 'react';

const NewTodoForm = ({ addTodo }) => {
    const [title, setTitle] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(title);
        setTitle('');
    }
    return(
        <form onSubmit={handleSubmit} className="Todo-input" >
            <input className="write-your-input" type="text" placeholder="Todo ?..." value={title} required onChange={(props)=> setTitle(props.target.value)}/>
            <input className="Add-button" type="submit" value="Add"></input>
            
        </form>
    )
}
export default NewTodoForm 
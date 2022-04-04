import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

const Todo = () => {
    const [value,setValue] = useState('')
    const [todos,setTodos] = useState([])
 
    const handleTodoInput = (e) => {
        setValue(e.target.value)
    }
    const adderTodoItemBtn = (e) => {
        e.preventDefault()
        
        const newTodo = {id: todos.length, name: value}
        if(value !== '')
            setTodos(prev => [...prev, newTodo])
        setValue('')
    }
    console.log(todos);
    const removeHandle = (id) => {
        setTodos(prev => [...prev.filter(todo => todo.id !== id) ])
    }
    
   
    return (
        <div className='todo'>
            <h1>Список задач</h1>
                <TodoForm value={value} adderTodoItemBtn={adderTodoItemBtn} handleTodoInput={handleTodoInput} />
            <h2>Текущие задачи: {todos.length}</h2>
            { todos.map((item,i) => {
             return <TodoItem 
                key={i}
                id={item.id}
                name={item.name}
                removeHandle={removeHandle}
            />
            })}
            
        </div>
    );
};

export default Todo;
import React from 'react';

const TodoInput = ({handleTodoInput,value}) => {
    return (
        <>
            <input 
                value={value} 
                onChange={e => handleTodoInput(e)} 
                className='todo__input' 
                type="text" 
                placeholder='Напишите...'
                />
        </>
    );
};

export default TodoInput;
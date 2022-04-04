import React from 'react';
import TodoButton from './TodoButton';
import TodoInput from './TodoInput';

const TodoForm = ({handleTodoInput,value,adderTodoItemBtn}) => {
    return (
        <form className='todo__form' action="">
            <TodoInput value={value} handleTodoInput={handleTodoInput}/>
            <TodoButton adderTodoItemBtn={adderTodoItemBtn}/>
        </form>
    );
};

export default TodoForm;
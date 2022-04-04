import React from 'react';

const TodoButton = ({adderTodoItemBtn}) => {
    return (
        <>
            <button onClick={(e) => adderTodoItemBtn(e)} className='todo__button'>Добаить</button>
        </>
    );
};

export default TodoButton;
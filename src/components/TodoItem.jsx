import React from 'react';
import RemoveBtn from './RemoveBtn';

const TodoItem = ({id,name,removeHandle}) => {
    return (
        <div id={id} className='todo__item'>
            <div className='todo__text-about'>{name}</div>
            <RemoveBtn id={id} removeHandle={removeHandle} />
        </div>
    );
};

export default TodoItem;
import React from 'react';

const RemoveBtn = ({removeHandle,id}) => {
    return (
        <>
            <button onClick={() => removeHandle(id)} className='todo__remove-btn'>🗑</button>
        </>
    );
};

export default RemoveBtn;
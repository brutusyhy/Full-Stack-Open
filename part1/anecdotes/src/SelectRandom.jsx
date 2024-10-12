import React from 'react';

export default function SelectRandom({length, setSelected}) {
    function handleClick(){
        const index = Math.floor(Math.random()*length)
        console.log(`New random anecdote No. ${index}`);
        setSelected(index);
    }

    return <button onClick={handleClick}>next anecdote</button>
}
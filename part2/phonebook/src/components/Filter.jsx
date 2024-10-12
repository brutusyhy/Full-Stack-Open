import React from 'react';

export default function Filter({setFilter}) {
    function handleChange(event) {
        setFilter(event.target.value);
    }
    return (
        <div>
            filter shown with <input onChange={handleChange}></input>
        </div>
    )
}
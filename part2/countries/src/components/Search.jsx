import React from 'react';

export default function Search({updateFilter}) {
    function handleChange(event) {
        updateFilter(event.target.value);
    }
    return (
        <div>
            find countries<input onChange={handleChange}></input>
        </div>
    )
}
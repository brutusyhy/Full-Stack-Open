import React from 'react';

export default function PersonEntry({person, onDelete}) {
    function handleClick() {
        if (confirm(`Delete ${person.name}?`)) {
            onDelete(person.id);
        }
    }
    return (
        <div>
            {person.name} {person.number}
            <button onClick={handleClick}>Delete</button>
        </div>
    )
}
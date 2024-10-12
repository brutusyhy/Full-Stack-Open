import React from 'react';
import uuid from 'react-uuid';
import Part from './Part';


export default function Content({parts}) {
    const total = parts.reduce((accumulator, currentPart) => accumulator + currentPart.exercises, 0);
    return (
        <div>
            {parts.map(p => <Part key={uuid()} part={p}/>)}
            <b>total of {total} exercises</b>
        </div>

    );
}
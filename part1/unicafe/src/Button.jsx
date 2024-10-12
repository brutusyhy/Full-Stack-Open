import React from 'react';

export default function Button({onClick, text}){
    console.log(`${text} Button rendered`);
    return (<button onClick={onClick}>{text}</button>);
}
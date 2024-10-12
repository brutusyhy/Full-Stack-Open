import React from 'react';

export default function Part({part}){
    const {name, exercises} = part;
    return <p>{name} {exercises}</p>;
}
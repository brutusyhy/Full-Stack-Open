import React from 'react';
import Header from './Header'
import Content from "./Content.jsx";


export default function Course({item}) {
    const {name, parts} = item;
    return (
        <div>
            <Header name = {name} />
            <Content parts={parts} />
        </div>
    )
}
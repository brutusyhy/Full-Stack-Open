import React from 'react';

export default function PersonForm({onAdd}) {
    const nameRef = React.useRef(null);
    const numberRef = React.useRef(null);
    function handleSubmit(event) {
        event.preventDefault();
        onAdd({
            name: nameRef.current.value,
            number: numberRef.current.value
        });
        nameRef.current.value = '';
        numberRef.current.value = '';
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>name: <input ref={nameRef}/></div>
            <div>number: <input ref={numberRef}/></div>
            <div><button type='submit'>add</button></div>
        </form>
    )
}
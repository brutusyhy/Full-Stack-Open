import React, { useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ]);
    function addPerson({name, number}) {
        setPersons(
            [
                ...persons,
                {
                    name: name,
                    number: number,
                    id: persons.length+1,
                }
            ]
        )
        console.log(persons);
    }
    const [filter, setFilter] = useState('');
    function filterName(person) {
        return filter === "" ? true:
            person.name.toLowerCase().includes(filter.toLowerCase());
    }

    return (
        <div>
            <h1>Phonebook</h1>
            <Filter setFilter={setFilter} />

            <h3>Add a new</h3>
            <PersonForm onSubmit={addPerson}/>

            <h3>Numbers</h3>
            <Persons persons={persons.filter(filterName)} />
        </div>
    )
}

export default App
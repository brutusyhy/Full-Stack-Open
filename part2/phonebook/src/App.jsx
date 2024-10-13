import React, {useEffect, useState} from 'react';




import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import { usePersons } from "./services/usePersons";
import Notification from './services/Notification'
import NotificationBar from './components/NotificationBar';

const App = () => {
    const {notification, sendNotification} = Notification()
    const {persons, addPerson, deletePerson} = usePersons(sendNotification);
    const [filter, setFilter] = useState('');
    function filterName(person) {
        return filter === "" ? true:
            person.name.toLowerCase().includes(filter.toLowerCase());
    }

    return (
        <div>
            <h1>Phonebook</h1>
            <NotificationBar notification={notification}/>
            <Filter setFilter={setFilter} />

            <h3>Add a new</h3>
            <PersonForm onAdd={addPerson}
                        notify={sendNotification}/>

            <h3>Numbers</h3>
            <Persons persons={persons.filter(filterName)}
                     onDelete={deletePerson}
                     notify={sendNotification}
            />
        </div>
    )
}

export default App
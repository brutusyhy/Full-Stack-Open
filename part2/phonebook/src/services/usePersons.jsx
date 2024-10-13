import { useState, useEffect } from "react";
import personService from "./personService.jsx";

export function usePersons(notify) {
    const [persons, setPersons] = useState([]);
    useEffect(() => {
        console.log("usePersons.useEffect");
        personService
            .getPersonsFromServer()
            .then(initialPersons => {
                console.log("Setting initial persons")
                setPersons(initialPersons);
            }).catch(error => {
                notify({
                    message: "Unable to query initial persons:\n" + error.message,
                    type: "error"
                })
            setPersons([]);
        })
    }, []);

    function addPerson({ name, number }) {
        console.log("usePersons.addPerson")
        const existingPerson = persons.find(person => person.name === name);
        if (existingPerson) {
            const replaceFlag = confirm(`${name} is already added to phone book, 
            replace the old number with a new one?`);
            if(replaceFlag) {
                console.log(`Updating ${name} with new number ${number}`);
                updatePerson(existingPerson.id, name, number);
            }
        } else {
            createPerson({name, number});
        }
    }

    function updatePerson(id, name, number) {
        const newPerson = {id, name, number}
        console.log("usePersons.updatePerson", newPerson);
        personService
            .updatePersonOnServer(id, newPerson)
            .then(newPerson => {
                setPersons(
                    [...persons.filter(person => person.id !== id),
                    newPerson]
                )
                console.log("Successfully updated person:\n", newPerson);
                notify({
                    message: `Updated ${name} with new number ${number}`,
                    type: 'notification'
                })
            })
            .catch(error => {
                notify({
                    message: `Unable to update the number of ${name} \n${error.message}`,
                    type: 'error'
                })
            })
        console.log(persons);
    }

    function createPerson({name, number}) {
        console.log("usePersons.createPerson")
        personService
            .createPersonOnServer({name, number})
            .then(newPerson => {
                setPersons(
                    [
                        ...persons,
                        {
                            name: name,
                            number: number,
                            id: newPerson.id,
                        }
                    ]
                )
                notify({
                    message: "Successfully created person:\n" + name,
                    type: 'notification'
                })
            })
            .catch(error => {
                notify({
                    message: `Unable to create person ${name}:\n` + error.message,
                    type: 'error'
                })
            });

        console.log(persons);
    }

    function deletePerson(id) {
        console.log("usePersons.deletePerson");
        const deletedPerson = persons.find(person => person.id === id);
        personService
            .deletePersonOnServer(id)
            .then(() => {
                notify({
                    message: "Successfully deleted person:" + deletedPerson.name,
                    type: 'notification'
                })
                console.log("Successfully deleted person:\n", deletedPerson.name);
                setPersons(persons.filter(person => person.id !== id));
            })
            .catch(error => {
                notify({
                    message: `Unable to delete person ${deletedPerson.name}\n` + error.message,
                    type: 'error'
                })
            })
    }


    return { persons, addPerson, deletePerson };
}
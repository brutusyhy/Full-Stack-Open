import axios from "axios";
const baseUrl = 'http://localhost:3001/persons'

const getPersonsFromServer = () => {
    console.log("personService.getPersonsFromServer");
    return axios
        .get(baseUrl)
        .then(response => {
            console.log("Successfully fetched persons from server:\n", response);
            return response.data;
        }).catch(error => {
            console.log("Error occurred during fetching:", error);
            return Promise.reject(error);  // Reject the promise to allow error handling in the caller
        });
}

const createPersonOnServer = (person) => {
    console.log("personService.createPersonOnServer");
    return axios
        .post(baseUrl, person)
        .then(response => {
            console.log(`Successfully created ${person.name} ${person.number} on server`);
            return response.data;
        }).catch(error => {
            console.log(`Unable to create ${person.name} ${person.number} on server\n`, error);
            return Promise.reject(error);  // Reject the promise to allow error handling in the caller
        });
}

const deletePersonOnServer = (id) => {
    console.log("PersonService.deletePersonOnServer");
    return axios
        .delete(`${baseUrl}/${id}`)
        .then(() => {
            console.log(`Successfully deleted ${id} on server`);
        })
        .catch(error => {
            console.log(`Unable to delete ${id} on server\n `, error);
            return Promise.reject(error);
        })
}

const updatePersonOnServer = (id, person) => {
    console.log("PersonService.updatePersonOnServer");
    return axios
        .put(`${baseUrl}/${id}`, person)
        .then((response) => {
            console.log(`Successfully updated ${person.name} ${person.number} on server`);
            return response.data;
        }).catch(error => {
            console.log(`Unable to update ${id} on server\n `, error);
            return Promise.reject(error);
        })
}

export default {getPersonsFromServer, createPersonOnServer, deletePersonOnServer, updatePersonOnServer}
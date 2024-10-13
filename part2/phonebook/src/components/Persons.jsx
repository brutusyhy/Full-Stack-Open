import React from 'react';
import PersonEntry from "./PersonEntry.jsx";

export default function Persons({persons, onDelete}) {
    return (
      <div>
          {persons.map(person =>
              <PersonEntry
                  key={person.id}
                  person={person}
                  onDelete={onDelete}
              />)
          }
      </div>
    );
}
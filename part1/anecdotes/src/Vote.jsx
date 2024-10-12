import React from 'react';

export default function Vote({index, votes, setVotes}) {
    function handleClick(){
        const newVotes = [...votes];
        newVotes[index] += 1;
        setVotes(newVotes);
    }
    return <button onClick={handleClick}>vote</button>;

}
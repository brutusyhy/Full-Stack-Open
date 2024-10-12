import React from 'react';

export default function MostVotedAnecdote({anecdotes, votes}) {
    const index = votes.indexOf(Math.max(...votes));
    return (
        <div>
            <h1>Anecdote with most votes</h1>
            <p>{anecdotes[index]}</p>
            <p>has {votes[index]} votes</p>
        </div>
    )
}
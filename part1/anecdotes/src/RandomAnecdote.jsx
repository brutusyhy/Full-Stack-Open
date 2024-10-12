import React from 'react';
import Vote from './Vote';
import SelectRandom from "./SelectRandom";

export default function RandomAnecdote({anecdotes, selected, setSelected, votes, setVotes}) {
    return (
        <div>
            <p>{anecdotes[selected]}</p>
            <p>has {votes[selected]} votes</p>
            <Vote index={selected} votes={votes} setVotes={setVotes} />
            <SelectRandom length={anecdotes.length} setSelected={setSelected} />
        </div>
    )
}
import React from 'react';
import StatisticLine from "../StatisticLine.jsx";

export default function Statistics ({good, neutral, bad}) {
    const all = good + neutral + bad;
    if (all === 0) {
        return <p>No feedback given</p>;
    }
    const average = (good - bad) / all;
    const positive_perc = good/all * 100;
    return (
        <table>
            <tbody>
                <StatisticLine text="good" value={good} />
                <StatisticLine text="neutral" value={neutral} />
                <StatisticLine text="bad" value={bad} />
                <StatisticLine text="all" value={all} />
                <StatisticLine text="average" value={average} />
                <StatisticLine text="positive" value={positive_perc+"%"} />
            </tbody>
        </table>
    );
}
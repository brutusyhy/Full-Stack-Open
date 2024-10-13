import React from 'react';
import CountryInfo from "./CountryInfo.jsx";

export default function CountryList({filter, filterCountries, selected, setSelected}) {
    const filteredList = filterCountries(filter);
    if(filteredList.length === 0){
        return <p>Too many countries, specify another filter</p>;
    } else if(filteredList.length === 1){
        return <CountryInfo country={filteredList[0]} />;
    } else if(selected !== ""){
        return <CountryInfo country={filteredList.find(country => country.name.common === selected)} />;
    }
    else {
        return (
            <div>
                {filteredList.map((country) =>
                    (
                        <div key={country.name.common}>
                            {country.name.common}
                            <button onClick={() => setSelected(country.name.common)}>select</button>
                        </div>

                    ))
                }
            </div>
        );
    }
}
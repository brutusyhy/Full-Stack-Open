import React, { useState } from 'react'

import Search from './components/Search';
import useCountriesAPI from "./services/useCountriesAPI";
import CountryList from "./components/CountryList.jsx";



function App() {
    const [filter, setFilter] = useState('');
    const [selected, setSelected] = React.useState("");
    const {filterCountries} = useCountriesAPI();
    function updateFilter(value) {
        setFilter(value);
        setSelected("");
    }
    return (
        <div>
            <Search updateFilter={updateFilter} />
            <CountryList filter={filter}
                         filterCountries={filterCountries}
                         selected={selected}
                         setSelected={setSelected}
            />
        </div>
    )
}

export default App

import React from 'react';
import axios from 'axios'


export default function useCountriesAPI() {
    const apiURL = "https://studies.cs.helsinki.fi/restcountries/api/";
    const [countryList, setCountryList] = React.useState([]);
    React.useEffect(() => {
        axios
            .get(apiURL+"all")
            .then((response) => {
                console.log(response.data);
                setCountryList(response.data);
            }).catch(error => {
                alert(error);
        })
    }, [])

    function filterCountries(filter) {
        const lowerCase = filter.toLowerCase();
        const filteredList = countryList.filter(country =>
            country.name.common.toLowerCase().includes(lowerCase));
        if (filteredList.length > 10) {
            return [];
        } else {
            return filteredList;
        }
    }

    function queryDetails(){

    }

    return {filterCountries, queryDetails};
}
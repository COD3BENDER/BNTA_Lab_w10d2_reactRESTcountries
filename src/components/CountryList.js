import React, { useState } from 'react';
import Country from './Country';

const CountryList = ({ countries }) => {
    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleCountryCheck = (country) => {
        if (!visitedCountries.includes(country)) {
            setVisitedCountries([...visitedCountries, country]);
        } else {
            // Remove the country from visitedCountries when unchecked
            const updatedVisitedCountries = visitedCountries.filter((c) => c !== country);
            setVisitedCountries(updatedVisitedCountries);
        }
    };

    const mappedCountries = countries.map((country) => (
        <li key={country.id}>
            <Country country={country} onCountryCheck={handleCountryCheck} />
        </li>
    ));

    return (
        <div className="country-container">
            <div className="countries">

                <h2>Countries</h2>
                <ul>{mappedCountries}</ul>

            </div>

            <div className="visited-country">

                <h2>Visited Countries</h2>
                <ul>
                    {visitedCountries.map((country) => (
                        <li key={country.id}>{country.name.common} {country.flag}</li>
                    ))}
                </ul>

            </div>
        </div>
    );
};

export default CountryList;

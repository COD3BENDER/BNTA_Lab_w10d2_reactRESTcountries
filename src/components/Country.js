import React, { useState } from 'react';

const Country = ({ country, onCountryCheck }) => {
    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
        setChecked(!checked);
        onCountryCheck(country, !checked); // Pass the checked state to the callback
    };

    return (
        <div>
            <label>
                <input type="checkbox" checked={checked} onChange={handleCheckboxChange} />
                {country.name.common}
                {country.flag}

            </label>
            <p>{country.capital}</p>
            <hr />
        </div>
    );
};

export default Country;
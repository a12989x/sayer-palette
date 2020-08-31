import React, { useState, useContext } from 'react';

import { NewColorContext } from '../../contexts/NewColorContext';

const Base = ({ value, handleChange }) => {
    const { bases } = useContext(NewColorContext);

    return (
        <div className="select-wrapper">
            <select
                name="bases"
                id="bases"
                defaultValue={bases[0]}
                onChange={handleChange}
            >
                {bases.map((name, key) => (
                    <option
                        key={key}
                        value={name}
                        disabled={name === bases[0] ? true : false}
                    >
                        {name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Base;

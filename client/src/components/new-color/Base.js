import React, { useState, useContext } from 'react';

import { NewColorContext } from '../../contexts/NewColorContext';

import Size from './Size';

const Base = ({ name }) => {
    const { bases } = useContext(NewColorContext);

    return (
        <section className="base">
            <h3>{name}</h3>

            <div className="select-wrapper">
                <select name="bases" id="bases" defaultValue={bases[0]}>
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

            <Size name="Liter" />
            <Size name="Galon" />
            <Size name="Bucket" />
        </section>
    );
};

export default Base;

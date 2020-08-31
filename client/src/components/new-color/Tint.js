import React, { useState, useContext } from 'react';

import { NewColorContext } from '../../contexts/NewColorContext';

const NewTint = ({ values, handleChange }) => {
    const { tints } = useContext(NewColorContext);
    const [isSelect, setIsSelect] = useState(false);

    return (
        <section className="tint">
            <div className="select-wrapper">
                <select
                    name="tint"
                    id="tint"
                    defaultValue={tints[0]}
                    onChange={(e) => {
                        handleChange(e);
                        values.tint !== tints[0]
                            ? setIsSelect(true)
                            : setIsSelect(false);
                    }}
                >
                    {tints.map((name, key) => (
                        <option
                            key={key}
                            value={name}
                            disabled={name === tints[0] ? true : false}
                        >
                            {name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="input-wrapper">
                <input
                    type="text"
                    name="oz"
                    id="oz"
                    required={true}
                    value={values.first}
                    onChange={handleChange}
                    disabled={!isSelect}
                />
                <label htmlFor="oz">
                    <span>Oz.</span>
                </label>
            </div>
            <div className="input-wrapper">
                <input
                    type="text"
                    name="sixty"
                    id="sixty"
                    required={true}
                    value={values.second}
                    onChange={handleChange}
                    disabled={!isSelect}
                />
                <label htmlFor="sixty">
                    <span>1 / 64</span>
                </label>
            </div>
            <div className="input-wrapper">
                <input
                    type="text"
                    name="oneHundred"
                    id="oneHundred"
                    required={true}
                    value={values.third}
                    onChange={handleChange}
                    disabled={!isSelect}
                />
                <label htmlFor="oneHundred">
                    <span>1 / 128</span>
                </label>
            </div>
        </section>
    );
};

export default NewTint;

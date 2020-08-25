import React, { useContext } from 'react';

import { NewColorContext } from '../../contexts/NewColorContext';

const NewTint = () => {
    const { tints } = useContext(NewColorContext);

    return (
        <section className="tint">
            <div className="select-wrapper">
                <select name="tint" id="tint" defaultValue={tints[0]}>
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
                <input type="text" name="oz" id="oz" required={true} />
                <label htmlFor="oz">
                    <span>Oz.</span>
                </label>
            </div>
            <div className="input-wrapper">
                <input type="text" name="sixty" id="sixty" required={true} />
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
                />
                <label htmlFor="oneHundred">
                    <span>1 / 128</span>
                </label>
            </div>
        </section>
    );
};

export default NewTint;

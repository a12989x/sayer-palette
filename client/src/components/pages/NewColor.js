import React, { useState, useContext } from 'react';

import { useForm } from '../useForm';
import { NewColorContext } from '../../contexts/NewColorContext';

import Base from '../new-color/Base';

const NewColor = () => {
    const { values, handleChange } = useContext(NewColorContext);

    return (
        <main className="new-color">
            <div className="container">
                <h1 className="title">Create a new color</h1>
                <h4 className="description">
                    Put the data to create a new color.
                </h4>

                <form>
                    <div className="input-wrapper">
                        <input
                            type="text"
                            id="codeNumber"
                            name="codeNumber"
                            value={values.codeNumber}
                            onChange={handleChange}
                            required={true}
                        />
                        <label htmlFor="codeNumber">
                            <span>Number / Color</span>
                        </label>
                    </div>

                    <div className="input-wrapper">
                        <input
                            type="text"
                            id="colorName"
                            name="colorName"
                            value={values.colorName}
                            onChange={handleChange}
                            required={true}
                        />
                        <label htmlFor="colorName">
                            <span>Name / Color</span>
                        </label>
                    </div>

                    <div className="input-wrapper">
                        <input
                            type="text"
                            id="hexCode"
                            name="hexCode"
                            value={values.hexCode}
                            onChange={handleChange}
                            required={true}
                        />
                        <label htmlFor="hexCode">
                            <span>Hex Number</span>
                        </label>
                    </div>

                    <Base name="First Base" />

                    <button
                        type="submit"
                        className="new-color__button primary-button"
                    >
                        Create Color
                    </button>
                </form>
            </div>
        </main>
    );
};

export default NewColor;

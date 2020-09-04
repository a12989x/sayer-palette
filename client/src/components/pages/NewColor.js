import React, { useState, useContext } from 'react';

import { NewColorContext } from '../../contexts/NewColorContext';

import Tint from '../new-color/Tint';

const NewColor = () => {
    const {
        lines,
        bases,
        values,
        handleChange,
        firstColorLiterFirstTint,
        setFirstColorLiterFirstTintHandleChange,
        firstColorLiterSecondTint,
        setFirstColorLiterSecondTintHandleChange,
        firstColorLiterThirdTint,
        setFirstColorLiterThirdTintHandleChange,
        firstColorLiterFourthTint,
        setFirstColorLiterFourthTintHandleChange,
        firstColorGalonFirstTint,
        setFirstColorGalonFirstTintHandleChange,
        firstColorGalonSecondTint,
        setFirstColorGalonSecondTintHandleChange,
        firstColorGalonThirdTint,
        setFirstColorGalonThirdTintHandleChange,
        firstColorGalonFourthTint,
        setFirstColorGalonFourthTintHandleChange,
        firstColorBucketFirstTint,
        setFirstColorBucketFirstTintHandleChange,
        firstColorBucketSecondTint,
        setFirstColorBucketSecondTintHandleChange,
        firstColorBucketThirdTint,
        setFirstColorBucketThirdTintHandleChange,
        firstColorBucketFourthTint,
        setFirstColorBucketFourthTintHandleChange,
        secondColorLiterFirstTint,
        setSecondColorLiterFirstTintHandleChange,
        secondColorLiterSecondTint,
        setSecondColorLiterSecondTintHandleChange,
        secondColorLiterThirdTint,
        setSecondColorLiterThirdTintHandleChange,
        secondColorLiterFourthTint,
        setSecondColorLiterFourthTintHandleChange,
        secondColorGalonFirstTint,
        setSecondColorGalonFirstTintHandleChange,
        secondColorGalonSecondTint,
        setSecondColorGalonSecondTintHandleChange,
        secondColorGalonThirdTint,
        setSecondColorGalonThirdTintHandleChange,
        secondColorGalonFourthTint,
        setSecondColorGalonFourthTintHandleChange,
        secondColorBucketFirstTint,
        setSecondColorBucketFirstTintHandleChange,
        secondColorBucketSecondTint,
        setSecondColorBucketSecondTintHandleChange,
        secondColorBucketThirdTint,
        setSecondColorBucketThirdTintHandleChange,
        secondColorBucketFourthTint,
        setSecondColorBucketFourthTintHandleChange,
        thirdColorLiterFirstTint,
        setThirdColorLiterFirstTintHandleChange,
        thirdColorLiterSecondTint,
        setThirdColorLiterSecondTintHandleChange,
        thirdColorLiterThirdTint,
        setThirdColorLiterThirdTintHandleChange,
        thirdColorLiterFourthTint,
        setThirdColorLiterFourthTintHandleChange,
        thirdColorGalonFirstTint,
        setThirdColorGalonFirstTintHandleChange,
        thirdColorGalonSecondTint,
        setThirdColorGalonSecondTintHandleChange,
        thirdColorGalonThirdTint,
        setThirdColorGalonThirdTintHandleChange,
        thirdColorGalonFourthTint,
        setThirdColorGalonFourthTintHandleChange,
        thirdColorBucketFirstTint,
        setThirdColorBucketFirstTintHandleChange,
        thirdColorBucketSecondTint,
        setThirdColorBucketSecondTintHandleChange,
        thirdColorBucketThirdTint,
        setThirdColorBucketThirdTintHandleChange,
        thirdColorBucketFourthTint,
        setThirdColorBucketFourthTintHandleChange,
        fourthColorLiterFirstTint,
        setFourthColorLiterFirstTintHandleChange,
        fourthColorLiterSecondTint,
        setFourthColorLiterSecondTintHandleChange,
        fourthColorLiterThirdTint,
        setFourthColorLiterThirdTintHandleChange,
        fourthColorLiterFourthTint,
        setFourthColorLiterFourthTintHandleChange,
        fourthColorGalonFirstTint,
        setFourthColorGalonFirstTintHandleChange,
        fourthColorGalonSecondTint,
        setFourthColorGalonSecondTintHandleChange,
        fourthColorGalonThirdTint,
        setFourthColorGalonThirdTintHandleChange,
        fourthColorGalonFourthTint,
        setFourthColorGalonFourthTintHandleChange,
        fourthColorBucketFirstTint,
        setFourthColorBucketFirstTintHandleChange,
        fourthColorBucketSecondTint,
        setFourthColorBucketSecondTintHandleChange,
        fourthColorBucketThirdTint,
        setFourthColorBucketThirdTintHandleChange,
        fourthColorBucketFourthTint,
        setFourthColorBucketFourthTintHandleChange,
        fifthColorLiterFirstTint,
        setFifthColorLiterFirstTintHandleChange,
        fifthColorLiterSecondTint,
        setFifthColorLiterSecondTintHandleChange,
        fifthColorLiterThirdTint,
        setFifthColorLiterThirdTintHandleChange,
        fifthColorLiterFourthTint,
        setFifthColorLiterFourthTintHandleChange,
        fifthColorGalonFirstTint,
        setFifthColorGalonFirstTintHandleChange,
        fifthColorGalonSecondTint,
        setFifthColorGalonSecondTintHandleChange,
        fifthColorGalonThirdTint,
        setFifthColorGalonThirdTintHandleChange,
        fifthColorGalonFourthTint,
        setFifthColorGalonFourthTintHandleChange,
        fifthColorBucketFirstTint,
        setFifthColorBucketFirstTintHandleChange,
        fifthColorBucketSecondTint,
        setFifthColorBucketSecondTintHandleChange,
        fifthColorBucketThirdTint,
        setFifthColorBucketThirdTintHandleChange,
        fifthColorBucketFourthTint,
        setFifthColorBucketFourthTintHandleChange,
        sixthColorLiterFirstTint,
        setSixthColorLiterFirstTintHandleChange,
        sixthColorLiterSecondTint,
        setSixthColorLiterSecondTintHandleChange,
        sixthColorLiterThirdTint,
        setSixthColorLiterThirdTintHandleChange,
        sixthColorLiterFourthTint,
        setSixthColorLiterFourthTintHandleChange,
        sixthColorGalonFirstTint,
        setSixthColorGalonFirstTintHandleChange,
        sixthColorGalonSecondTint,
        setSixthColorGalonSecondTintHandleChange,
        sixthColorGalonThirdTint,
        setSixthColorGalonThirdTintHandleChange,
        sixthColorGalonFourthTint,
        setSixthColorGalonFourthTintHandleChange,
        sixthColorBucketFirstTint,
        setSixthColorBucketFirstTintHandleChange,
        sixthColorBucketSecondTint,
        setSixthColorBucketSecondTintHandleChange,
        sixthColorBucketThirdTint,
        setSixthColorBucketThirdTintHandleChange,
        sixthColorBucketFourthTint,
        setSixthColorBucketFourthTintHandleChange,
        handleSubmit,
    } = useContext(NewColorContext);

    return (
        <main className="new-color">
            <div className="container">
                <h1 className="title">Create a new color</h1>
                <h4 className="description">
                    Put the data to create a new color.
                </h4>

                <form onSubmit={(e) => handleSubmit(e)}>
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

                    <section className="base">
                        <h3>First Color</h3>

                        <div className="selects-wrapper">
                            <div className="select-wrapper">
                                <select
                                    name="firstColor"
                                    id="firstColor"
                                    defaultValue={lines[0]}
                                    onChange={handleChange}
                                >
                                    {lines.map((name, key) => (
                                        <option
                                            key={key}
                                            value={name}
                                            disabled={
                                                name === lines[0] ? true : false
                                            }
                                        >
                                            {name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="select-wrapper">
                                <select
                                    name="firstBase"
                                    id="firstBase"
                                    defaultValue={bases[0]}
                                    onChange={handleChange}
                                >
                                    {bases.map((name, key) => (
                                        <option
                                            key={key}
                                            value={name}
                                            disabled={
                                                name === bases[0] ? true : false
                                            }
                                        >
                                            {name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <section className="size">
                            <h4>Liter</h4>
                            <Tint
                                values={firstColorLiterFirstTint}
                                handleChange={
                                    setFirstColorLiterFirstTintHandleChange
                                }
                            />
                            <Tint
                                values={firstColorLiterSecondTint}
                                handleChange={
                                    setFirstColorLiterSecondTintHandleChange
                                }
                            />
                            <Tint
                                values={firstColorLiterThirdTint}
                                handleChange={
                                    setFirstColorLiterThirdTintHandleChange
                                }
                            />
                            <Tint
                                values={firstColorLiterFourthTint}
                                handleChange={
                                    setFirstColorLiterFourthTintHandleChange
                                }
                            />
                        </section>

                        <section className="size">
                            <h4>Galon</h4>
                            <Tint
                                values={firstColorGalonFirstTint}
                                handleChange={
                                    setFirstColorGalonFirstTintHandleChange
                                }
                            />
                            <Tint
                                values={firstColorGalonSecondTint}
                                handleChange={
                                    setFirstColorGalonSecondTintHandleChange
                                }
                            />
                            <Tint
                                values={firstColorGalonThirdTint}
                                handleChange={
                                    setFirstColorGalonThirdTintHandleChange
                                }
                            />
                            <Tint
                                values={firstColorGalonFourthTint}
                                handleChange={
                                    setFirstColorGalonFourthTintHandleChange
                                }
                            />
                        </section>

                        <section className="size">
                            <h4>Bucket</h4>
                            <Tint
                                values={firstColorBucketFirstTint}
                                handleChange={
                                    setFirstColorBucketFirstTintHandleChange
                                }
                            />
                            <Tint
                                values={firstColorBucketSecondTint}
                                handleChange={
                                    setFirstColorBucketSecondTintHandleChange
                                }
                            />
                            <Tint
                                values={firstColorBucketThirdTint}
                                handleChange={
                                    setFirstColorBucketThirdTintHandleChange
                                }
                            />
                            <Tint
                                values={firstColorBucketFourthTint}
                                handleChange={
                                    setFirstColorBucketFourthTintHandleChange
                                }
                            />
                        </section>
                    </section>

                    <section className="base">
                        <h3>Second Color</h3>

                        <div className="selects-wrapper">
                            <div className="select-wrapper">
                                <select
                                    name="secondColor"
                                    id="secondColor"
                                    defaultValue={lines[0]}
                                    onChange={handleChange}
                                >
                                    {lines.map((name, key) => (
                                        <option
                                            key={key}
                                            value={name}
                                            disabled={
                                                name === lines[0] ? true : false
                                            }
                                        >
                                            {name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="select-wrapper">
                                <select
                                    name="secondBase"
                                    id="secondBase"
                                    defaultValue={bases[0]}
                                    onChange={handleChange}
                                >
                                    {bases.map((name, key) => (
                                        <option
                                            key={key}
                                            value={name}
                                            disabled={
                                                name === bases[0] ? true : false
                                            }
                                        >
                                            {name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <section className="size">
                            <h4>Liter</h4>
                            <Tint
                                values={secondColorLiterFirstTint}
                                handleChange={
                                    setSecondColorLiterFirstTintHandleChange
                                }
                            />
                            <Tint
                                values={secondColorLiterSecondTint}
                                handleChange={
                                    setSecondColorLiterSecondTintHandleChange
                                }
                            />
                            <Tint
                                values={secondColorLiterThirdTint}
                                handleChange={
                                    setSecondColorLiterThirdTintHandleChange
                                }
                            />
                            <Tint
                                values={secondColorLiterFourthTint}
                                handleChange={
                                    setSecondColorLiterFourthTintHandleChange
                                }
                            />
                        </section>

                        <section className="size">
                            <h4>Galon</h4>
                            <Tint
                                values={secondColorGalonFirstTint}
                                handleChange={
                                    setSecondColorGalonFirstTintHandleChange
                                }
                            />
                            <Tint
                                values={secondColorGalonSecondTint}
                                handleChange={
                                    setSecondColorGalonSecondTintHandleChange
                                }
                            />
                            <Tint
                                values={secondColorGalonThirdTint}
                                handleChange={
                                    setSecondColorGalonThirdTintHandleChange
                                }
                            />
                            <Tint
                                values={secondColorGalonFourthTint}
                                handleChange={
                                    setSecondColorGalonFourthTintHandleChange
                                }
                            />
                        </section>

                        <section className="size">
                            <h4>Bucket</h4>
                            <Tint
                                values={secondColorBucketFirstTint}
                                handleChange={
                                    setSecondColorBucketFirstTintHandleChange
                                }
                            />
                            <Tint
                                values={secondColorBucketSecondTint}
                                handleChange={
                                    setSecondColorBucketSecondTintHandleChange
                                }
                            />
                            <Tint
                                values={secondColorBucketThirdTint}
                                handleChange={
                                    setSecondColorBucketThirdTintHandleChange
                                }
                            />
                            <Tint
                                values={secondColorBucketFourthTint}
                                handleChange={
                                    setSecondColorBucketFourthTintHandleChange
                                }
                            />
                        </section>
                    </section>

                    <section className="base">
                        <h3>Third Color</h3>

                        <div className="selects-wrapper">
                            <div className="select-wrapper">
                                <select
                                    name="thirdColor"
                                    id="thirdColor"
                                    defaultValue={lines[0]}
                                    onChange={handleChange}
                                >
                                    {lines.map((name, key) => (
                                        <option
                                            key={key}
                                            value={name}
                                            disabled={
                                                name === lines[0] ? true : false
                                            }
                                        >
                                            {name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="select-wrapper">
                                <select
                                    name="thirdBase"
                                    id="thirdBase"
                                    defaultValue={bases[0]}
                                    onChange={handleChange}
                                >
                                    {bases.map((name, key) => (
                                        <option
                                            key={key}
                                            value={name}
                                            disabled={
                                                name === bases[0] ? true : false
                                            }
                                        >
                                            {name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <section className="size">
                            <h4>Liter</h4>
                            <Tint
                                values={thirdColorLiterFirstTint}
                                handleChange={
                                    setThirdColorLiterFirstTintHandleChange
                                }
                            />
                            <Tint
                                values={thirdColorLiterSecondTint}
                                handleChange={
                                    setThirdColorLiterSecondTintHandleChange
                                }
                            />
                            <Tint
                                values={thirdColorLiterThirdTint}
                                handleChange={
                                    setThirdColorLiterThirdTintHandleChange
                                }
                            />
                            <Tint
                                values={thirdColorLiterFourthTint}
                                handleChange={
                                    setThirdColorLiterFourthTintHandleChange
                                }
                            />
                        </section>

                        <section className="size">
                            <h4>Galon</h4>
                            <Tint
                                values={thirdColorGalonFirstTint}
                                handleChange={
                                    setThirdColorGalonFirstTintHandleChange
                                }
                            />
                            <Tint
                                values={thirdColorGalonSecondTint}
                                handleChange={
                                    setThirdColorGalonSecondTintHandleChange
                                }
                            />
                            <Tint
                                values={thirdColorGalonThirdTint}
                                handleChange={
                                    setThirdColorGalonThirdTintHandleChange
                                }
                            />
                            <Tint
                                values={thirdColorGalonFourthTint}
                                handleChange={
                                    setThirdColorGalonFourthTintHandleChange
                                }
                            />
                        </section>

                        <section className="size">
                            <h4>Bucket</h4>
                            <Tint
                                values={thirdColorBucketFirstTint}
                                handleChange={
                                    setThirdColorBucketFirstTintHandleChange
                                }
                            />
                            <Tint
                                values={thirdColorBucketSecondTint}
                                handleChange={
                                    setThirdColorBucketSecondTintHandleChange
                                }
                            />
                            <Tint
                                values={thirdColorBucketThirdTint}
                                handleChange={
                                    setThirdColorBucketThirdTintHandleChange
                                }
                            />
                            <Tint
                                values={thirdColorBucketFourthTint}
                                handleChange={
                                    setThirdColorBucketFourthTintHandleChange
                                }
                            />
                        </section>
                    </section>

                    <section className="base">
                        <h3>Fourth Color</h3>

                        <div className="selects-wrapper">
                            <div className="select-wrapper">
                                <select
                                    name="fourthColor"
                                    id="fourthColor"
                                    defaultValue={lines[0]}
                                    onChange={handleChange}
                                >
                                    {lines.map((name, key) => (
                                        <option
                                            key={key}
                                            value={name}
                                            disabled={
                                                name === lines[0] ? true : false
                                            }
                                        >
                                            {name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="select-wrapper">
                                <select
                                    name="fourthBase"
                                    id="fourthBase"
                                    defaultValue={bases[0]}
                                    onChange={handleChange}
                                >
                                    {bases.map((name, key) => (
                                        <option
                                            key={key}
                                            value={name}
                                            disabled={
                                                name === bases[0] ? true : false
                                            }
                                        >
                                            {name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <section className="size">
                            <h4>Liter</h4>
                            <Tint
                                values={fourthColorLiterFirstTint}
                                handleChange={
                                    setFourthColorLiterFirstTintHandleChange
                                }
                            />
                            <Tint
                                values={fourthColorLiterSecondTint}
                                handleChange={
                                    setFourthColorLiterSecondTintHandleChange
                                }
                            />
                            <Tint
                                values={fourthColorLiterThirdTint}
                                handleChange={
                                    setFourthColorLiterThirdTintHandleChange
                                }
                            />
                            <Tint
                                values={fourthColorLiterFourthTint}
                                handleChange={
                                    setFourthColorLiterFourthTintHandleChange
                                }
                            />
                        </section>

                        <section className="size">
                            <h4>Galon</h4>
                            <Tint
                                values={fourthColorGalonFirstTint}
                                handleChange={
                                    setFourthColorGalonFirstTintHandleChange
                                }
                            />
                            <Tint
                                values={fourthColorGalonSecondTint}
                                handleChange={
                                    setFourthColorGalonSecondTintHandleChange
                                }
                            />
                            <Tint
                                values={fourthColorGalonThirdTint}
                                handleChange={
                                    setFourthColorGalonThirdTintHandleChange
                                }
                            />
                            <Tint
                                values={fourthColorGalonFourthTint}
                                handleChange={
                                    setFourthColorGalonFourthTintHandleChange
                                }
                            />
                        </section>

                        <section className="size">
                            <h4>Bucket</h4>
                            <Tint
                                values={fourthColorBucketFirstTint}
                                handleChange={
                                    setFourthColorBucketFirstTintHandleChange
                                }
                            />
                            <Tint
                                values={fourthColorBucketSecondTint}
                                handleChange={
                                    setFourthColorBucketSecondTintHandleChange
                                }
                            />
                            <Tint
                                values={fourthColorBucketThirdTint}
                                handleChange={
                                    setFourthColorBucketThirdTintHandleChange
                                }
                            />
                            <Tint
                                values={fourthColorBucketFourthTint}
                                handleChange={
                                    setFourthColorBucketFourthTintHandleChange
                                }
                            />
                        </section>
                    </section>

                    <section className="base">
                        <h3>Fifth Color</h3>

                        <div className="selects-wrapper">
                            <div className="select-wrapper">
                                <select
                                    name="fifthColor"
                                    id="fifthColor"
                                    defaultValue={lines[0]}
                                    onChange={handleChange}
                                >
                                    {lines.map((name, key) => (
                                        <option
                                            key={key}
                                            value={name}
                                            disabled={
                                                name === lines[0] ? true : false
                                            }
                                        >
                                            {name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="select-wrapper">
                                <select
                                    name="fifthBase"
                                    id="fifthBase"
                                    defaultValue={bases[0]}
                                    onChange={handleChange}
                                >
                                    {bases.map((name, key) => (
                                        <option
                                            key={key}
                                            value={name}
                                            disabled={
                                                name === bases[0] ? true : false
                                            }
                                        >
                                            {name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <section className="size">
                            <h4>Liter</h4>
                            <Tint
                                values={fifthColorLiterFirstTint}
                                handleChange={
                                    setFifthColorLiterFirstTintHandleChange
                                }
                            />
                            <Tint
                                values={fifthColorLiterSecondTint}
                                handleChange={
                                    setFifthColorLiterSecondTintHandleChange
                                }
                            />
                            <Tint
                                values={fifthColorLiterThirdTint}
                                handleChange={
                                    setFifthColorLiterThirdTintHandleChange
                                }
                            />
                            <Tint
                                values={fifthColorLiterFourthTint}
                                handleChange={
                                    setFifthColorLiterFourthTintHandleChange
                                }
                            />
                        </section>

                        <section className="size">
                            <h4>Galon</h4>
                            <Tint
                                values={fifthColorGalonFirstTint}
                                handleChange={
                                    setFifthColorGalonFirstTintHandleChange
                                }
                            />
                            <Tint
                                values={fifthColorGalonSecondTint}
                                handleChange={
                                    setFifthColorGalonSecondTintHandleChange
                                }
                            />
                            <Tint
                                values={fifthColorGalonThirdTint}
                                handleChange={
                                    setFifthColorGalonThirdTintHandleChange
                                }
                            />
                            <Tint
                                values={fifthColorGalonFourthTint}
                                handleChange={
                                    setFifthColorGalonFourthTintHandleChange
                                }
                            />
                        </section>

                        <section className="size">
                            <h4>Bucket</h4>
                            <Tint
                                values={fifthColorBucketFirstTint}
                                handleChange={
                                    setFifthColorBucketFirstTintHandleChange
                                }
                            />
                            <Tint
                                values={fifthColorBucketSecondTint}
                                handleChange={
                                    setFifthColorBucketSecondTintHandleChange
                                }
                            />
                            <Tint
                                values={fifthColorBucketThirdTint}
                                handleChange={
                                    setFifthColorBucketThirdTintHandleChange
                                }
                            />
                            <Tint
                                values={fifthColorBucketFourthTint}
                                handleChange={
                                    setFifthColorBucketFourthTintHandleChange
                                }
                            />
                        </section>
                    </section>

                    <section className="base">
                        <h3>Sixth Color</h3>

                        <div className="selects-wrapper">
                            <div className="select-wrapper">
                                <select
                                    name="sixthColor"
                                    id="sixthColor"
                                    defaultValue={lines[0]}
                                    onChange={handleChange}
                                >
                                    {lines.map((name, key) => (
                                        <option
                                            key={key}
                                            value={name}
                                            disabled={
                                                name === lines[0] ? true : false
                                            }
                                        >
                                            {name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="select-wrapper">
                                <select
                                    name="sixthBase"
                                    id="sixthBase"
                                    defaultValue={bases[0]}
                                    onChange={handleChange}
                                >
                                    {bases.map((name, key) => (
                                        <option
                                            key={key}
                                            value={name}
                                            disabled={
                                                name === bases[0] ? true : false
                                            }
                                        >
                                            {name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <section className="size">
                            <h4>Liter</h4>
                            <Tint
                                values={sixthColorLiterFirstTint}
                                handleChange={
                                    setSixthColorLiterFirstTintHandleChange
                                }
                            />
                            <Tint
                                values={sixthColorLiterSecondTint}
                                handleChange={
                                    setSixthColorLiterSecondTintHandleChange
                                }
                            />
                            <Tint
                                values={sixthColorLiterThirdTint}
                                handleChange={
                                    setSixthColorLiterThirdTintHandleChange
                                }
                            />
                            <Tint
                                values={sixthColorLiterFourthTint}
                                handleChange={
                                    setSixthColorLiterFourthTintHandleChange
                                }
                            />
                        </section>

                        <section className="size">
                            <h4>Galon</h4>
                            <Tint
                                values={sixthColorGalonFirstTint}
                                handleChange={
                                    setSixthColorGalonFirstTintHandleChange
                                }
                            />
                            <Tint
                                values={sixthColorGalonSecondTint}
                                handleChange={
                                    setSixthColorGalonSecondTintHandleChange
                                }
                            />
                            <Tint
                                values={sixthColorGalonThirdTint}
                                handleChange={
                                    setSixthColorGalonThirdTintHandleChange
                                }
                            />
                            <Tint
                                values={sixthColorGalonFourthTint}
                                handleChange={
                                    setSixthColorGalonFourthTintHandleChange
                                }
                            />
                        </section>

                        <section className="size">
                            <h4>Bucket</h4>
                            <Tint
                                values={sixthColorBucketFirstTint}
                                handleChange={
                                    setSixthColorBucketFirstTintHandleChange
                                }
                            />
                            <Tint
                                values={sixthColorBucketSecondTint}
                                handleChange={
                                    setSixthColorBucketSecondTintHandleChange
                                }
                            />
                            <Tint
                                values={sixthColorBucketThirdTint}
                                handleChange={
                                    setSixthColorBucketThirdTintHandleChange
                                }
                            />
                            <Tint
                                values={sixthColorBucketFourthTint}
                                handleChange={
                                    setSixthColorBucketFourthTintHandleChange
                                }
                            />
                        </section>
                    </section>

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

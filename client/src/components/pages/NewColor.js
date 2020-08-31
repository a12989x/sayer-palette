import React, { useState, useContext } from 'react';

import { NewColorContext } from '../../contexts/NewColorContext';

import Tint from '../new-color/Tint';

const NewColor = () => {
    const {
        bases,
        values,
        handleChange,
        firstBaseLiterFirstTint,
        setFirstBaseLiterFirstTintHandleChange,
        firstBaseLiterSecondTint,
        setFirstBaseLiterSecondTintHandleChange,
        firstBaseLiterThirdTint,
        setFirstBaseLiterThirdTintHandleChange,
        firstBaseLiterFourthTint,
        setFirstBaseLiterFourthTintHandleChange,
        firstBaseGalonFirstTint,
        setFirstBaseGalonFirstTintHandleChange,
        firstBaseGalonSecondTint,
        setFirstBaseGalonSecondTintHandleChange,
        firstBaseGalonThirdTint,
        setFirstBaseGalonThirdTintHandleChange,
        firstBaseGalonFourthTint,
        setFirstBaseGalonFourthTintHandleChange,
        firstBaseBucketFirstTint,
        setFirstBaseBucketFirstTintHandleChange,
        firstBaseBucketSecondTint,
        setFirstBaseBucketSecondTintHandleChange,
        firstBaseBucketThirdTint,
        setFirstBaseBucketThirdTintHandleChange,
        firstBaseBucketFourthTint,
        setFirstBaseBucketFourthTintHandleChange,
        secondBaseLiterFirstTint,
        setSecondBaseLiterFirstTintHandleChange,
        secondBaseLiterSecondTint,
        setSecondBaseLiterSecondTintHandleChange,
        secondBaseLiterThirdTint,
        setSecondBaseLiterThirdTintHandleChange,
        secondBaseLiterFourthTint,
        setSecondBaseLiterFourthTintHandleChange,
        secondBaseGalonFirstTint,
        setSecondBaseGalonFirstTintHandleChange,
        secondBaseGalonSecondTint,
        setSecondBaseGalonSecondTintHandleChange,
        secondBaseGalonThirdTint,
        setSecondBaseGalonThirdTintHandleChange,
        secondBaseGalonFourthTint,
        setSecondBaseGalonFourthTintHandleChange,
        secondBaseBucketFirstTint,
        setSecondBaseBucketFirstTintHandleChange,
        secondBaseBucketSecondTint,
        setSecondBaseBucketSecondTintHandleChange,
        secondBaseBucketThirdTint,
        setSecondBaseBucketThirdTintHandleChange,
        secondBaseBucketFourthTint,
        setSecondBaseBucketFourthTintHandleChange,
        thirdBaseLiterFirstTint,
        setThirdBaseLiterFirstTintHandleChange,
        thirdBaseLiterSecondTint,
        setThirdBaseLiterSecondTintHandleChange,
        thirdBaseLiterThirdTint,
        setThirdBaseLiterThirdTintHandleChange,
        thirdBaseLiterFourthTint,
        setThirdBaseLiterFourthTintHandleChange,
        thirdBaseGalonFirstTint,
        setThirdBaseGalonFirstTintHandleChange,
        thirdBaseGalonSecondTint,
        setThirdBaseGalonSecondTintHandleChange,
        thirdBaseGalonThirdTint,
        setThirdBaseGalonThirdTintHandleChange,
        thirdBaseGalonFourthTint,
        setThirdBaseGalonFourthTintHandleChange,
        thirdBaseBucketFirstTint,
        setThirdBaseBucketFirstTintHandleChange,
        thirdBaseBucketSecondTint,
        setThirdBaseBucketSecondTintHandleChange,
        thirdBaseBucketThirdTint,
        setThirdBaseBucketThirdTintHandleChange,
        thirdBaseBucketFourthTint,
        setThirdBaseBucketFourthTintHandleChange,
        fourthBaseLiterFirstTint,
        setFourthBaseLiterFirstTintHandleChange,
        fourthBaseLiterSecondTint,
        setFourthBaseLiterSecondTintHandleChange,
        fourthBaseLiterThirdTint,
        setFourthBaseLiterThirdTintHandleChange,
        fourthBaseLiterFourthTint,
        setFourthBaseLiterFourthTintHandleChange,
        fourthBaseGalonFirstTint,
        setFourthBaseGalonFirstTintHandleChange,
        fourthBaseGalonSecondTint,
        setFourthBaseGalonSecondTintHandleChange,
        fourthBaseGalonThirdTint,
        setFourthBaseGalonThirdTintHandleChange,
        fourthBaseGalonFourthTint,
        setFourthBaseGalonFourthTintHandleChange,
        fourthBaseBucketFirstTint,
        setFourthBaseBucketFirstTintHandleChange,
        fourthBaseBucketSecondTint,
        setFourthBaseBucketSecondTintHandleChange,
        fourthBaseBucketThirdTint,
        setFourthBaseBucketThirdTintHandleChange,
        fourthBaseBucketFourthTint,
        setFourthBaseBucketFourthTintHandleChange,
        fifthBaseLiterFirstTint,
        setFifthBaseLiterFirstTintHandleChange,
        fifthBaseLiterSecondTint,
        setFifthBaseLiterSecondTintHandleChange,
        fifthBaseLiterThirdTint,
        setFifthBaseLiterThirdTintHandleChange,
        fifthBaseLiterFourthTint,
        setFifthBaseLiterFourthTintHandleChange,
        fifthBaseGalonFirstTint,
        setFifthBaseGalonFirstTintHandleChange,
        fifthBaseGalonSecondTint,
        setFifthBaseGalonSecondTintHandleChange,
        fifthBaseGalonThirdTint,
        setFifthBaseGalonThirdTintHandleChange,
        fifthBaseGalonFourthTint,
        setFifthBaseGalonFourthTintHandleChange,
        fifthBaseBucketFirstTint,
        setFifthBaseBucketFirstTintHandleChange,
        fifthBaseBucketSecondTint,
        setFifthBaseBucketSecondTintHandleChange,
        fifthBaseBucketThirdTint,
        setFifthBaseBucketThirdTintHandleChange,
        fifthBaseBucketFourthTint,
        setFifthBaseBucketFourthTintHandleChange,
        sixthBaseLiterFirstTint,
        setSixthBaseLiterFirstTintHandleChange,
        sixthBaseLiterSecondTint,
        setSixthBaseLiterSecondTintHandleChange,
        sixthBaseLiterThirdTint,
        setSixthBaseLiterThirdTintHandleChange,
        sixthBaseLiterFourthTint,
        setSixthBaseLiterFourthTintHandleChange,
        sixthBaseGalonFirstTint,
        setSixthBaseGalonFirstTintHandleChange,
        sixthBaseGalonSecondTint,
        setSixthBaseGalonSecondTintHandleChange,
        sixthBaseGalonThirdTint,
        setSixthBaseGalonThirdTintHandleChange,
        sixthBaseGalonFourthTint,
        setSixthBaseGalonFourthTintHandleChange,
        sixthBaseBucketFirstTint,
        setSixthBaseBucketFirstTintHandleChange,
        sixthBaseBucketSecondTint,
        setSixthBaseBucketSecondTintHandleChange,
        sixthBaseBucketThirdTint,
        setSixthBaseBucketThirdTintHandleChange,
        sixthBaseBucketFourthTint,
        setSixthBaseBucketFourthTintHandleChange,
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
                        <h3>First Base</h3>

                        <div>
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

                            {/* <div className="select-wrapper">
                                <select name="firstBaseBase" >
                                    
                                </select>
                            </div> */}
                        </div>

                        <section className="size">
                            <h4>Liter</h4>
                            <Tint
                                values={firstBaseLiterFirstTint}
                                handleChange={
                                    setFirstBaseLiterFirstTintHandleChange
                                }
                            />
                            <Tint
                                values={firstBaseLiterSecondTint}
                                handleChange={
                                    setFirstBaseLiterSecondTintHandleChange
                                }
                            />
                            <Tint
                                values={firstBaseLiterThirdTint}
                                handleChange={
                                    setFirstBaseLiterThirdTintHandleChange
                                }
                            />
                            <Tint
                                values={firstBaseLiterFourthTint}
                                handleChange={
                                    setFirstBaseLiterFourthTintHandleChange
                                }
                            />
                        </section>

                        <section className="size">
                            <h4>Galon</h4>
                            <Tint
                                values={firstBaseGalonFirstTint}
                                handleChange={
                                    setFirstBaseGalonFirstTintHandleChange
                                }
                            />
                            <Tint
                                values={firstBaseGalonSecondTint}
                                handleChange={
                                    setFirstBaseGalonSecondTintHandleChange
                                }
                            />
                            <Tint
                                values={firstBaseGalonThirdTint}
                                handleChange={
                                    setFirstBaseGalonThirdTintHandleChange
                                }
                            />
                            <Tint
                                values={firstBaseGalonFourthTint}
                                handleChange={
                                    setFirstBaseGalonFourthTintHandleChange
                                }
                            />
                        </section>

                        <section className="size">
                            <h4>Bucket</h4>
                            <Tint
                                values={firstBaseBucketFirstTint}
                                handleChange={
                                    setFirstBaseBucketFirstTintHandleChange
                                }
                            />
                            <Tint
                                values={firstBaseBucketSecondTint}
                                handleChange={
                                    setFirstBaseBucketSecondTintHandleChange
                                }
                            />
                            <Tint
                                values={firstBaseBucketThirdTint}
                                handleChange={
                                    setFirstBaseBucketThirdTintHandleChange
                                }
                            />
                            <Tint
                                values={firstBaseBucketFourthTint}
                                handleChange={
                                    setFirstBaseBucketFourthTintHandleChange
                                }
                            />
                        </section>
                    </section>

                    <section className="base">
                        <h3>Second Base</h3>

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

                        <section className="size">
                            <h4>Liter</h4>
                            <Tint
                                values={secondBaseLiterFirstTint}
                                handleChange={
                                    setSecondBaseLiterFirstTintHandleChange
                                }
                            />
                            <Tint
                                values={secondBaseLiterSecondTint}
                                handleChange={
                                    setSecondBaseLiterSecondTintHandleChange
                                }
                            />
                            <Tint
                                values={secondBaseLiterThirdTint}
                                handleChange={
                                    setSecondBaseLiterThirdTintHandleChange
                                }
                            />
                            <Tint
                                values={secondBaseLiterFourthTint}
                                handleChange={
                                    setSecondBaseLiterFourthTintHandleChange
                                }
                            />
                        </section>

                        <section className="size">
                            <h4>Galon</h4>
                            <Tint
                                values={secondBaseGalonFirstTint}
                                handleChange={
                                    setSecondBaseGalonFirstTintHandleChange
                                }
                            />
                            <Tint
                                values={secondBaseGalonSecondTint}
                                handleChange={
                                    setSecondBaseGalonSecondTintHandleChange
                                }
                            />
                            <Tint
                                values={secondBaseGalonThirdTint}
                                handleChange={
                                    setSecondBaseGalonThirdTintHandleChange
                                }
                            />
                            <Tint
                                values={secondBaseGalonFourthTint}
                                handleChange={
                                    setSecondBaseGalonFourthTintHandleChange
                                }
                            />
                        </section>

                        <section className="size">
                            <h4>Bucket</h4>
                            <Tint
                                values={secondBaseBucketFirstTint}
                                handleChange={
                                    setSecondBaseBucketFirstTintHandleChange
                                }
                            />
                            <Tint
                                values={secondBaseBucketSecondTint}
                                handleChange={
                                    setSecondBaseBucketSecondTintHandleChange
                                }
                            />
                            <Tint
                                values={secondBaseBucketThirdTint}
                                handleChange={
                                    setSecondBaseBucketThirdTintHandleChange
                                }
                            />
                            <Tint
                                values={secondBaseBucketFourthTint}
                                handleChange={
                                    setSecondBaseBucketFourthTintHandleChange
                                }
                            />
                        </section>
                    </section>

                    <section className="base">
                        <h3>Third Base</h3>

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

                        <section className="size">
                            <h4>Liter</h4>
                            <Tint
                                values={thirdBaseLiterFirstTint}
                                handleChange={
                                    setThirdBaseLiterFirstTintHandleChange
                                }
                            />
                            <Tint
                                values={thirdBaseLiterSecondTint}
                                handleChange={
                                    setThirdBaseLiterSecondTintHandleChange
                                }
                            />
                            <Tint
                                values={thirdBaseLiterThirdTint}
                                handleChange={
                                    setThirdBaseLiterThirdTintHandleChange
                                }
                            />
                            <Tint
                                values={thirdBaseLiterFourthTint}
                                handleChange={
                                    setThirdBaseLiterFourthTintHandleChange
                                }
                            />
                        </section>

                        <section className="size">
                            <h4>Galon</h4>
                            <Tint
                                values={thirdBaseGalonFirstTint}
                                handleChange={
                                    setThirdBaseGalonFirstTintHandleChange
                                }
                            />
                            <Tint
                                values={thirdBaseGalonSecondTint}
                                handleChange={
                                    setThirdBaseGalonSecondTintHandleChange
                                }
                            />
                            <Tint
                                values={thirdBaseGalonThirdTint}
                                handleChange={
                                    setThirdBaseGalonThirdTintHandleChange
                                }
                            />
                            <Tint
                                values={thirdBaseGalonFourthTint}
                                handleChange={
                                    setThirdBaseGalonFourthTintHandleChange
                                }
                            />
                        </section>

                        <section className="size">
                            <h4>Bucket</h4>
                            <Tint
                                values={thirdBaseBucketFirstTint}
                                handleChange={
                                    setThirdBaseBucketFirstTintHandleChange
                                }
                            />
                            <Tint
                                values={thirdBaseBucketSecondTint}
                                handleChange={
                                    setThirdBaseBucketSecondTintHandleChange
                                }
                            />
                            <Tint
                                values={thirdBaseBucketThirdTint}
                                handleChange={
                                    setThirdBaseBucketThirdTintHandleChange
                                }
                            />
                            <Tint
                                values={thirdBaseBucketFourthTint}
                                handleChange={
                                    setThirdBaseBucketFourthTintHandleChange
                                }
                            />
                        </section>
                    </section>

                    <section className="base">
                        <h3>Fourth Base</h3>

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

                        <section className="size">
                            <h4>Liter</h4>
                            <Tint
                                values={fourthBaseLiterFirstTint}
                                handleChange={
                                    setFourthBaseLiterFirstTintHandleChange
                                }
                            />
                            <Tint
                                values={fourthBaseLiterSecondTint}
                                handleChange={
                                    setFourthBaseLiterSecondTintHandleChange
                                }
                            />
                            <Tint
                                values={fourthBaseLiterThirdTint}
                                handleChange={
                                    setFourthBaseLiterThirdTintHandleChange
                                }
                            />
                            <Tint
                                values={fourthBaseLiterFourthTint}
                                handleChange={
                                    setFourthBaseLiterFourthTintHandleChange
                                }
                            />
                        </section>

                        <section className="size">
                            <h4>Galon</h4>
                            <Tint
                                values={fourthBaseGalonFirstTint}
                                handleChange={
                                    setFourthBaseGalonFirstTintHandleChange
                                }
                            />
                            <Tint
                                values={fourthBaseGalonSecondTint}
                                handleChange={
                                    setFourthBaseGalonSecondTintHandleChange
                                }
                            />
                            <Tint
                                values={fourthBaseGalonThirdTint}
                                handleChange={
                                    setFourthBaseGalonThirdTintHandleChange
                                }
                            />
                            <Tint
                                values={fourthBaseGalonFourthTint}
                                handleChange={
                                    setFourthBaseGalonFourthTintHandleChange
                                }
                            />
                        </section>

                        <section className="size">
                            <h4>Bucket</h4>
                            <Tint
                                values={fourthBaseBucketFirstTint}
                                handleChange={
                                    setFourthBaseBucketFirstTintHandleChange
                                }
                            />
                            <Tint
                                values={fourthBaseBucketSecondTint}
                                handleChange={
                                    setFourthBaseBucketSecondTintHandleChange
                                }
                            />
                            <Tint
                                values={fourthBaseBucketThirdTint}
                                handleChange={
                                    setFourthBaseBucketThirdTintHandleChange
                                }
                            />
                            <Tint
                                values={fourthBaseBucketFourthTint}
                                handleChange={
                                    setFourthBaseBucketFourthTintHandleChange
                                }
                            />
                        </section>
                    </section>

                    <section className="base">
                        <h3>Fifth Base</h3>

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

                        <section className="size">
                            <h4>Liter</h4>
                            <Tint
                                values={fifthBaseLiterFirstTint}
                                handleChange={
                                    setFifthBaseLiterFirstTintHandleChange
                                }
                            />
                            <Tint
                                values={fifthBaseLiterSecondTint}
                                handleChange={
                                    setFifthBaseLiterSecondTintHandleChange
                                }
                            />
                            <Tint
                                values={fifthBaseLiterThirdTint}
                                handleChange={
                                    setFifthBaseLiterThirdTintHandleChange
                                }
                            />
                            <Tint
                                values={fifthBaseLiterFourthTint}
                                handleChange={
                                    setFifthBaseLiterFourthTintHandleChange
                                }
                            />
                        </section>

                        <section className="size">
                            <h4>Galon</h4>
                            <Tint
                                values={fifthBaseGalonFirstTint}
                                handleChange={
                                    setFifthBaseGalonFirstTintHandleChange
                                }
                            />
                            <Tint
                                values={fifthBaseGalonSecondTint}
                                handleChange={
                                    setFifthBaseGalonSecondTintHandleChange
                                }
                            />
                            <Tint
                                values={fifthBaseGalonThirdTint}
                                handleChange={
                                    setFifthBaseGalonThirdTintHandleChange
                                }
                            />
                            <Tint
                                values={fifthBaseGalonFourthTint}
                                handleChange={
                                    setFifthBaseGalonFourthTintHandleChange
                                }
                            />
                        </section>

                        <section className="size">
                            <h4>Bucket</h4>
                            <Tint
                                values={fifthBaseBucketFirstTint}
                                handleChange={
                                    setFifthBaseBucketFirstTintHandleChange
                                }
                            />
                            <Tint
                                values={fifthBaseBucketSecondTint}
                                handleChange={
                                    setFifthBaseBucketSecondTintHandleChange
                                }
                            />
                            <Tint
                                values={fifthBaseBucketThirdTint}
                                handleChange={
                                    setFifthBaseBucketThirdTintHandleChange
                                }
                            />
                            <Tint
                                values={fifthBaseBucketFourthTint}
                                handleChange={
                                    setFifthBaseBucketFourthTintHandleChange
                                }
                            />
                        </section>
                    </section>

                    <section className="base">
                        <h3>Sixth Base</h3>

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

                        <section className="size">
                            <h4>Liter</h4>
                            <Tint
                                values={sixthBaseLiterFirstTint}
                                handleChange={
                                    setSixthBaseLiterFirstTintHandleChange
                                }
                            />
                            <Tint
                                values={sixthBaseLiterSecondTint}
                                handleChange={
                                    setSixthBaseLiterSecondTintHandleChange
                                }
                            />
                            <Tint
                                values={sixthBaseLiterThirdTint}
                                handleChange={
                                    setSixthBaseLiterThirdTintHandleChange
                                }
                            />
                            <Tint
                                values={sixthBaseLiterFourthTint}
                                handleChange={
                                    setSixthBaseLiterFourthTintHandleChange
                                }
                            />
                        </section>

                        <section className="size">
                            <h4>Galon</h4>
                            <Tint
                                values={sixthBaseGalonFirstTint}
                                handleChange={
                                    setSixthBaseGalonFirstTintHandleChange
                                }
                            />
                            <Tint
                                values={sixthBaseGalonSecondTint}
                                handleChange={
                                    setSixthBaseGalonSecondTintHandleChange
                                }
                            />
                            <Tint
                                values={sixthBaseGalonThirdTint}
                                handleChange={
                                    setSixthBaseGalonThirdTintHandleChange
                                }
                            />
                            <Tint
                                values={sixthBaseGalonFourthTint}
                                handleChange={
                                    setSixthBaseGalonFourthTintHandleChange
                                }
                            />
                        </section>

                        <section className="size">
                            <h4>Bucket</h4>
                            <Tint
                                values={sixthBaseBucketFirstTint}
                                handleChange={
                                    setSixthBaseBucketFirstTintHandleChange
                                }
                            />
                            <Tint
                                values={sixthBaseBucketSecondTint}
                                handleChange={
                                    setSixthBaseBucketSecondTintHandleChange
                                }
                            />
                            <Tint
                                values={sixthBaseBucketThirdTint}
                                handleChange={
                                    setSixthBaseBucketThirdTintHandleChange
                                }
                            />
                            <Tint
                                values={sixthBaseBucketFourthTint}
                                handleChange={
                                    setSixthBaseBucketFourthTintHandleChange
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

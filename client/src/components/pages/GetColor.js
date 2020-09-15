import React, { useState, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ClipLoader } from 'react-spinners';

import { useForm } from '../useForm';
import { notifySuccess, notifyError, notifyInfo } from '../Toastify';
import { LanguageContext } from '../../contexts/LanguageContext';

toast.configure();

const GetColor = () => {
    const { t } = useContext(LanguageContext);

    const [values, handleChange] = useForm({ number: '', name: '' });
    const [color, setColor] = useState({});
    const [prevValue, setPrevValue] = useState('');
    const [selectsDisabled, setSelectsDisabled] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const [bases, setBases] = useState([
        'base',
        'x-trong',
        'esmalack',
        'hidrosayer',
        'magicolor',
        'promaster',
        'ultra profesional',
    ]);
    const [sizes, setSizes] = useState(['size', 'liter', 'galon', 'bucket']);

    const [baseSel, setBaseSel] = useState(bases[0]);
    const [sizeSel, setSizeSel] = useState(sizes[0]);
    const [colorSel, setColorSel] = useState('');
    const getColor = async (e) => {
        e.preventDefault();

        let value;
        if (values.name.length !== 0) value = values.name.replace(/\-|\//g, '');
        else if (values.number.length !== 0)
            value = values.number.replace(/\-|\//g, '');
        setPrevValue(value);

        if (value !== prevValue) {
            setIsLoading(true);

            try {
                setColorSel('');
                const res = await axios.get(`/api/colors/${value}`);
                setColor(res.data);
                setBasesIfExists(res.data.base);
                setSelectsDisabled(false);
                setIsLoading(false);
                notifySuccess('Color obtained satisfactorily');
            } catch (error) {
                notifyError('Color not found');
            }
        } else {
            if (baseSel === bases[0] || sizeSel === sizes[0]) {
                notifyInfo('Please select one base or size');
                return;
            }
            setIsLoading(false);
            findBaseAndSize(color.base);
        }
    };

    const setBasesIfExists = (base) => {
        base.map((base) => {
            setBases(bases, [base.typeName]);
        });
    };

    const findBaseAndSize = (base) => {
        base.map((base) => {
            if (base.typeName === baseSel) {
                if (sizeSel === 'liter')
                    setColorSel(Object.entries(base.sizes.liter));
                else if (sizeSel === 'galon')
                    setColorSel(Object.entries(base.sizes.galon));
                else if (sizeSel === 'bucket')
                    setColorSel(Object.entries(base.sizes.bucket));
            }
        });
    };

    return (
        <main className="get-color">
            <div className="container">
                <h1 className="title">{t('getColor.title')}</h1>
                <h4 className="description">{t('getColor.description')}</h4>

                <form onSubmit={(e) => getColor(e)}>
                    <div className="input-wrapper">
                        <input
                            required={true}
                            type="text"
                            id="number"
                            name="number"
                            value={values.number}
                            onChange={handleChange}
                            disabled={values.name.length ? true : false}
                        />
                        <label htmlFor="number">
                            <span>{t('getColor.number')}</span>
                        </label>
                    </div>

                    <div className="input-wrapper">
                        <input
                            required={true}
                            type="text"
                            id="name"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            disabled={values.number.length ? true : false}
                        />
                        <label htmlFor="name">
                            <span>{t('getColor.name')}</span>
                        </label>
                    </div>

                    <div className="select-wrapper">
                        <select
                            onChange={(e) => setBaseSel(e.target.value)}
                            defaultValue={bases[0]}
                            disabled={selectsDisabled}
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

                    <div className="select-wrapper">
                        <select
                            onChange={(e) => setSizeSel(e.target.value)}
                            defaultValue={sizes[0]}
                            disabled={selectsDisabled}
                        >
                            {sizes.map((name, key) => (
                                <option
                                    key={key}
                                    value={name}
                                    disabled={name === sizes[0] ? true : false}
                                >
                                    {name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="get-color__button primary-button"
                    >
                        {!isLoading ? (
                            t('getColor.title')
                        ) : (
                            <ClipLoader
                                loading={true}
                                color="#1a8ccb"
                                size={35}
                            />
                        )}
                    </button>
                </form>

                {colorSel && (
                    <div className="get-color__wrapper">
                        <section className="get-color__result">
                            <p className="get-color__result-size">Oz.</p>
                            <p className="get-color__result-size">1/64</p>
                            <p className="get-color__result-size">1/128</p>
                            {colorSel.map((entry) => {
                                const tint = entry[0];
                                const quantities = entry[1];

                                return (
                                    <React.Fragment key={tint}>
                                        <p className="get-color__result-tint">
                                            {tint}
                                        </p>
                                        {quantities.map((quantity, key) => (
                                            <span
                                                key={key}
                                                className="get-color__result-quantity"
                                            >
                                                {quantity}
                                            </span>
                                        ))}
                                    </React.Fragment>
                                );
                            })}
                        </section>

                        <span
                            className="get-color__color"
                            style={{ background: color.hexCode }}
                        ></span>
                    </div>
                )}
            </div>
        </main>
    );
};

export default GetColor;

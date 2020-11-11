import React, { useState, createContext } from 'react';
import axios from 'axios';

import { useForm } from '../components/useForm';
import { notifySuccess, notifyError } from '../components/Toastify';

toast.configure();

export const NewColorContext = createContext();

const NewColorContextProvider = (props) => {
    const [lines, setLines] = useState([
        'lines',
        'x-trong',
        'esmalack',
        'hidrosayer',
        'magicolor',
        'promaster',
        'ultra profesional',
    ]);
    const [sizes, setSizes] = useState(['size', 'liter', 'galon', 'bucket']);
    const [tints, setTints] = useState([
        'tint',
        'blk',
        'wht',
        'oxr',
        'mag',
        'tbl',
        'grn',
        'ffr',
        'lfy',
        'yox',
    ]);
    const [bases, setBases] = useState([
        'Bases',
        'White',
        'Cake',
        'Medium',
        'Intense',
        'Accent',
    ]);

    const [values, handleChange] = useForm({
        codeNumber: '',
        colorName: '',
        hexCode: '',
        firstColor: '',
        firstBase: '',
        secondColor: '',
        secondBase: '',
        thirdColor: '',
        thirdBase: '',
        fourthColor: '',
        fourthBase: '',
        fifthColor: '',
        fifthBase: '',
        sixthColor: '',
        sixthBase: '',
    });

    /* ────────────────────────────────────────────────────── */
    /*                    First Color Tints                    */
    /* ────────────────────────────────────────────────────── */

    /* ──────────────────────── Liter ─────────────────────── */
    const [
        firstColorLiterFirstTint,
        setFirstColorLiterFirstTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        firstColorLiterSecondTint,
        setFirstColorLiterSecondTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        firstColorLiterThirdTint,
        setFirstColorLiterThirdTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        firstColorLiterFourthTint,
        setFirstColorLiterFourthTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    /* ──────────────────────── Galon ─────────────────────── */
    const [
        firstColorGalonFirstTint,
        setFirstColorGalonFirstTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        firstColorGalonSecondTint,
        setFirstColorGalonSecondTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        firstColorGalonThirdTint,
        setFirstColorGalonThirdTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        firstColorGalonFourthTint,
        setFirstColorGalonFourthTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    /* ─────────────────────── Bucket ─────────────────────── */
    const [
        firstColorBucketFirstTint,
        setFirstColorBucketFirstTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        firstColorBucketSecondTint,
        setFirstColorBucketSecondTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        firstColorBucketThirdTint,
        setFirstColorBucketThirdTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        firstColorBucketFourthTint,
        setFirstColorBucketFourthTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    /* ────────────────────────────────────────────────────── */
    /*                    Second Color Tints                   */
    /* ────────────────────────────────────────────────────── */

    /* ──────────────────────── Liter ─────────────────────── */
    const [
        secondColorLiterFirstTint,
        setSecondColorLiterFirstTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        secondColorLiterSecondTint,
        setSecondColorLiterSecondTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        secondColorLiterThirdTint,
        setSecondColorLiterThirdTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        secondColorLiterFourthTint,
        setSecondColorLiterFourthTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    /* ──────────────────────── Galon ─────────────────────── */
    const [
        secondColorGalonFirstTint,
        setSecondColorGalonFirstTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        secondColorGalonSecondTint,
        setSecondColorGalonSecondTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        secondColorGalonThirdTint,
        setSecondColorGalonThirdTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        secondColorGalonFourthTint,
        setSecondColorGalonFourthTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    /* ─────────────────────── Bucket ─────────────────────── */
    const [
        secondColorBucketFirstTint,
        setSecondColorBucketFirstTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        secondColorBucketSecondTint,
        setSecondColorBucketSecondTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        secondColorBucketThirdTint,
        setSecondColorBucketThirdTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        secondColorBucketFourthTint,
        setSecondColorBucketFourthTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    /* ────────────────────────────────────────────────────── */
    /*                     Third Color Tint                    */
    /* ────────────────────────────────────────────────────── */

    /* ──────────────────────── Liter ─────────────────────── */
    const [
        thirdColorLiterFirstTint,
        setThirdColorLiterFirstTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        thirdColorLiterSecondTint,
        setThirdColorLiterSecondTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        thirdColorLiterThirdTint,
        setThirdColorLiterThirdTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        thirdColorLiterFourthTint,
        setThirdColorLiterFourthTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    /* ──────────────────────── Galon ─────────────────────── */
    const [
        thirdColorGalonFirstTint,
        setThirdColorGalonFirstTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        thirdColorGalonSecondTint,
        setThirdColorGalonSecondTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        thirdColorGalonThirdTint,
        setThirdColorGalonThirdTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        thirdColorGalonFourthTint,
        setThirdColorGalonFourthTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    /* ─────────────────────── Bucket ─────────────────────── */
    const [
        thirdColorBucketFirstTint,
        setThirdColorBucketFirstTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        thirdColorBucketSecondTint,
        setThirdColorBucketSecondTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        thirdColorBucketThirdTint,
        setThirdColorBucketThirdTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        thirdColorBucketFourthTint,
        setThirdColorBucketFourthTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    /* ────────────────────────────────────────────────────── */
    /*                    Fourth Color Tints                   */
    /* ────────────────────────────────────────────────────── */

    /* ──────────────────────── Liter ─────────────────────── */
    const [
        fourthColorLiterFirstTint,
        setFourthColorLiterFirstTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        fourthColorLiterSecondTint,
        setFourthColorLiterSecondTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        fourthColorLiterThirdTint,
        setFourthColorLiterThirdTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        fourthColorLiterFourthTint,
        setFourthColorLiterFourthTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    /* ──────────────────────── Galon ─────────────────────── */
    const [
        fourthColorGalonFirstTint,
        setFourthColorGalonFirstTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        fourthColorGalonSecondTint,
        setFourthColorGalonSecondTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        fourthColorGalonThirdTint,
        setFourthColorGalonThirdTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        fourthColorGalonFourthTint,
        setFourthColorGalonFourthTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    /* ─────────────────────── Bucket ─────────────────────── */
    const [
        fourthColorBucketFirstTint,
        setFourthColorBucketFirstTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        fourthColorBucketSecondTint,
        setFourthColorBucketSecondTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        fourthColorBucketThirdTint,
        setFourthColorBucketThirdTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        fourthColorBucketFourthTint,
        setFourthColorBucketFourthTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    /* ────────────────────────────────────────────────────── */
    /*                    Fifth Color Tints                    */
    /* ────────────────────────────────────────────────────── */

    /* ──────────────────────── Liter ─────────────────────── */
    const [
        fifthColorLiterFirstTint,
        setFifthColorLiterFirstTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        fifthColorLiterSecondTint,
        setFifthColorLiterSecondTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        fifthColorLiterThirdTint,
        setFifthColorLiterThirdTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        fifthColorLiterFourthTint,
        setFifthColorLiterFourthTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    /* ──────────────────────── Galon ─────────────────────── */
    const [
        fifthColorGalonFirstTint,
        setFifthColorGalonFirstTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        fifthColorGalonSecondTint,
        setFifthColorGalonSecondTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        fifthColorGalonThirdTint,
        setFifthColorGalonThirdTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        fifthColorGalonFourthTint,
        setFifthColorGalonFourthTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    /* ─────────────────────── Bucket ─────────────────────── */
    const [
        fifthColorBucketFirstTint,
        setFifthColorBucketFirstTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        fifthColorBucketSecondTint,
        setFifthColorBucketSecondTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        fifthColorBucketThirdTint,
        setFifthColorBucketThirdTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        fifthColorBucketFourthTint,
        setFifthColorBucketFourthTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    /* ────────────────────────────────────────────────────── */
    /*                    Sixth Color Tints                    */
    /* ────────────────────────────────────────────────────── */

    /* ──────────────────────── Liter ─────────────────────── */
    const [
        sixthColorLiterFirstTint,
        setSixthColorLiterFirstTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        sixthColorLiterSecondTint,
        setSixthColorLiterSecondTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        sixthColorLiterThirdTint,
        setSixthColorLiterThirdTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        sixthColorLiterFourthTint,
        setSixthColorLiterFourthTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    /* ──────────────────────── Galon ─────────────────────── */
    const [
        sixthColorGalonFirstTint,
        setSixthColorGalonFirstTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        sixthColorGalonSecondTint,
        setSixthColorGalonSecondTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        sixthColorGalonThirdTint,
        setSixthColorGalonThirdTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        sixthColorGalonFourthTint,
        setSixthColorGalonFourthTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    /* ─────────────────────── Bucket ─────────────────────── */
    const [
        sixthColorBucketFirstTint,
        setSixthColorBucketFirstTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        sixthColorBucketSecondTint,
        setSixthColorBucketSecondTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        sixthColorBucketThirdTint,
        setSixthColorBucketThirdTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        sixthColorBucketFourthTint,
        setSixthColorBucketFourthTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const checkTypeNumber = (color) => {
            const typeNumber =
                color === lines[1]
                    ? 'ex-0xxx'
                    : color === lines[2]
                    ? 'ee-0xxx'
                    : color === lines[3]
                    ? 'eh-0xxx'
                    : color === lines[4]
                    ? 'vg-0xxx'
                    : color === lines[5]
                    ? 'vp-0xxx'
                    : color === lines[6]
                    ? 'vu-0xxx'
                    : '';

            return typeNumber;
        };
        const checkBaseNumber = (base) => {
            const baseNumber =
                base === bases[1]
                    ? '-0010'
                    : base === bases[2]
                    ? '-0030'
                    : base === bases[3]
                    ? '-0060'
                    : base === bases[4]
                    ? '-0070'
                    : base === bases[5]
                    ? '-0080'
                    : '';

            return baseNumber;
        };

        const {
            codeNumber,
            colorName,
            hexCode,
            firstColor,
            firstBase,
            secondColor,
            secondBase,
            thirdColor,
            thirdBase,
            fourthColor,
            fourthBase,
            fifthColor,
            fifthBase,
            sixthColor,
            sixthBase,
        } = values;

        const firstColorGroup = {
            typeNumber: checkTypeNumber(firstColor),
            typeName: firstColor,
            baseNumber:
                checkTypeNumber(firstColor).slice(0, 2) +
                checkBaseNumber(firstBase),
            baseName: 'Base' + ' ' + firstBase,
            sizes: {
                liter: {
                    [firstColorLiterFirstTint.tint]: [
                        firstColorLiterFirstTint.oz,
                        firstColorLiterFirstTint.sixty,
                        firstColorLiterFirstTint.oneHundred,
                    ],
                    [firstColorLiterSecondTint.tint]: [
                        firstColorLiterSecondTint.oz,
                        firstColorLiterSecondTint.sixty,
                        firstColorLiterSecondTint.oneHundred,
                    ],
                    [firstColorLiterThirdTint.tint]: [
                        firstColorLiterThirdTint.oz,
                        firstColorLiterThirdTint.sixty,
                        firstColorLiterThirdTint.oneHundred,
                    ],
                    [firstColorLiterFourthTint.tint]: [
                        firstColorLiterFourthTint.oz,
                        firstColorLiterFourthTint.sixty,
                        firstColorLiterFourthTint.oneHundred,
                    ],
                },
                galon: {
                    [firstColorGalonFirstTint.tint]: [
                        firstColorGalonFirstTint.oz,
                        firstColorGalonFirstTint.sixty,
                        firstColorGalonFirstTint.oneHundred,
                    ],
                    [firstColorGalonSecondTint.tint]: [
                        firstColorGalonSecondTint.oz,
                        firstColorGalonSecondTint.sixty,
                        firstColorGalonSecondTint.oneHundred,
                    ],
                    [firstColorGalonThirdTint.tint]: [
                        firstColorGalonThirdTint.oz,
                        firstColorGalonThirdTint.sixty,
                        firstColorGalonThirdTint.oneHundred,
                    ],
                    [firstColorGalonFourthTint.tint]: [
                        firstColorGalonFourthTint.oz,
                        firstColorGalonFourthTint.sixty,
                        firstColorGalonFourthTint.oneHundred,
                    ],
                },
                bucket: {
                    [firstColorBucketFirstTint.tint]: [
                        firstColorBucketFirstTint.oz,
                        firstColorBucketFirstTint.sixty,
                        firstColorBucketFirstTint.oneHundred,
                    ],
                    [firstColorBucketSecondTint.tint]: [
                        firstColorBucketSecondTint.oz,
                        firstColorBucketSecondTint.sixty,
                        firstColorBucketSecondTint.oneHundred,
                    ],
                    [firstColorBucketThirdTint.tint]: [
                        firstColorBucketThirdTint.oz,
                        firstColorBucketThirdTint.sixty,
                        firstColorBucketThirdTint.oneHundred,
                    ],
                    [firstColorBucketFourthTint.tint]: [
                        firstColorBucketFourthTint.oz,
                        firstColorBucketFourthTint.sixty,
                        firstColorBucketFourthTint.oneHundred,
                    ],
                },
            },
        };

        const secondColorGroup = {
            typeNumber: checkTypeNumber(secondColor),
            typeName: secondColor,
            baseNumber:
                checkTypeNumber(secondColor).slice(0, 2) +
                checkBaseNumber(secondBase),
            baseName: 'Base' + secondBase,
            sizes: {
                liter: {
                    [secondColorLiterFirstTint.tint]: [
                        secondColorLiterFirstTint.oz,
                        secondColorLiterFirstTint.sixty,
                        secondColorLiterFirstTint.oneHundred,
                    ],
                    [secondColorLiterSecondTint.tint]: [
                        secondColorLiterSecondTint.oz,
                        secondColorLiterSecondTint.sixty,
                        secondColorLiterSecondTint.oneHundred,
                    ],
                    [secondColorLiterThirdTint.tint]: [
                        secondColorLiterThirdTint.oz,
                        secondColorLiterThirdTint.sixty,
                        secondColorLiterThirdTint.oneHundred,
                    ],
                    [secondColorLiterFourthTint.tint]: [
                        secondColorLiterFourthTint.oz,
                        secondColorLiterFourthTint.sixty,
                        secondColorLiterFourthTint.oneHundred,
                    ],
                },
                galon: {
                    [secondColorGalonFirstTint.tint]: [
                        secondColorGalonFirstTint.oz,
                        secondColorGalonFirstTint.sixty,
                        secondColorGalonFirstTint.oneHundred,
                    ],
                    [secondColorGalonSecondTint.tint]: [
                        secondColorGalonSecondTint.oz,
                        secondColorGalonSecondTint.sixty,
                        secondColorGalonSecondTint.oneHundred,
                    ],
                    [secondColorGalonThirdTint.tint]: [
                        secondColorGalonThirdTint.oz,
                        secondColorGalonThirdTint.sixty,
                        secondColorGalonThirdTint.oneHundred,
                    ],
                    [secondColorGalonFourthTint.tint]: [
                        secondColorGalonFourthTint.oz,
                        secondColorGalonFourthTint.sixty,
                        secondColorGalonFourthTint.oneHundred,
                    ],
                },
                bucket: {
                    [secondColorBucketFirstTint.tint]: [
                        secondColorBucketFirstTint.oz,
                        secondColorBucketFirstTint.sixty,
                        secondColorBucketFirstTint.oneHundred,
                    ],
                    [secondColorBucketSecondTint.tint]: [
                        secondColorBucketSecondTint.oz,
                        secondColorBucketSecondTint.sixty,
                        secondColorBucketSecondTint.oneHundred,
                    ],
                    [secondColorBucketThirdTint.tint]: [
                        secondColorBucketThirdTint.oz,
                        secondColorBucketThirdTint.sixty,
                        secondColorBucketThirdTint.oneHundred,
                    ],
                    [secondColorBucketFourthTint.tint]: [
                        secondColorBucketFourthTint.oz,
                        secondColorBucketFourthTint.sixty,
                        secondColorBucketFourthTint.oneHundred,
                    ],
                },
            },
        };

        const thirdColorGroup = {
            typeNumber: checkTypeNumber(thirdColor),
            typeName: thirdColor,
            baseNumber:
                checkTypeNumber(thirdColor).slice(0, 2) +
                checkBaseNumber(thirdBase),
            baseName: 'Base' + thirdBase,
            sizes: {
                liter: {
                    [thirdColorLiterFirstTint.tint]: [
                        thirdColorLiterFirstTint.oz,
                        thirdColorLiterFirstTint.sixty,
                        thirdColorLiterFirstTint.oneHundred,
                    ],
                    [thirdColorLiterSecondTint.tint]: [
                        thirdColorLiterSecondTint.oz,
                        thirdColorLiterSecondTint.sixty,
                        thirdColorLiterSecondTint.oneHundred,
                    ],
                    [thirdColorLiterThirdTint.tint]: [
                        thirdColorLiterThirdTint.oz,
                        thirdColorLiterThirdTint.sixty,
                        thirdColorLiterThirdTint.oneHundred,
                    ],
                    [thirdColorLiterFourthTint.tint]: [
                        thirdColorLiterFourthTint.oz,
                        thirdColorLiterFourthTint.sixty,
                        thirdColorLiterFourthTint.oneHundred,
                    ],
                },
                galon: {
                    [thirdColorGalonFirstTint.tint]: [
                        thirdColorGalonFirstTint.oz,
                        thirdColorGalonFirstTint.sixty,
                        thirdColorGalonFirstTint.oneHundred,
                    ],
                    [thirdColorGalonSecondTint.tint]: [
                        thirdColorGalonSecondTint.oz,
                        thirdColorGalonSecondTint.sixty,
                        thirdColorGalonSecondTint.oneHundred,
                    ],
                    [thirdColorGalonThirdTint.tint]: [
                        thirdColorGalonThirdTint.oz,
                        thirdColorGalonThirdTint.sixty,
                        thirdColorGalonThirdTint.oneHundred,
                    ],
                    [thirdColorGalonFourthTint.tint]: [
                        thirdColorGalonFourthTint.oz,
                        thirdColorGalonFourthTint.sixty,
                        thirdColorGalonFourthTint.oneHundred,
                    ],
                },
                bucket: {
                    [thirdColorBucketFirstTint.tint]: [
                        thirdColorBucketFirstTint.oz,
                        thirdColorBucketFirstTint.sixty,
                        thirdColorBucketFirstTint.oneHundred,
                    ],
                    [thirdColorBucketSecondTint.tint]: [
                        thirdColorBucketSecondTint.oz,
                        thirdColorBucketSecondTint.sixty,
                        thirdColorBucketSecondTint.oneHundred,
                    ],
                    [thirdColorBucketThirdTint.tint]: [
                        thirdColorBucketThirdTint.oz,
                        thirdColorBucketThirdTint.sixty,
                        thirdColorBucketThirdTint.oneHundred,
                    ],
                    [thirdColorBucketFourthTint.tint]: [
                        thirdColorBucketFourthTint.oz,
                        thirdColorBucketFourthTint.sixty,
                        thirdColorBucketFourthTint.oneHundred,
                    ],
                },
            },
        };

        const fourthColorGroup = {
            typeNumber: checkTypeNumber(fourthColor),
            typeName: fourthColor,
            baseNumber:
                checkTypeNumber(fourthColor).slice(0, 2) +
                checkBaseNumber(fourthBase),
            baseName: 'Base' + fourthBase,
            sizes: {
                liter: {
                    [fourthColorLiterFirstTint.tint]: [
                        fourthColorLiterFirstTint.oz,
                        fourthColorLiterFirstTint.sixty,
                        fourthColorLiterFirstTint.oneHundred,
                    ],
                    [fourthColorLiterSecondTint.tint]: [
                        fourthColorLiterSecondTint.oz,
                        fourthColorLiterSecondTint.sixty,
                        fourthColorLiterSecondTint.oneHundred,
                    ],
                    [fourthColorLiterThirdTint.tint]: [
                        fourthColorLiterThirdTint.oz,
                        fourthColorLiterThirdTint.sixty,
                        fourthColorLiterThirdTint.oneHundred,
                    ],
                    [fourthColorLiterFourthTint.tint]: [
                        fourthColorLiterFourthTint.oz,
                        fourthColorLiterFourthTint.sixty,
                        fourthColorLiterFourthTint.oneHundred,
                    ],
                },
                galon: {
                    [fourthColorGalonFirstTint.tint]: [
                        fourthColorGalonFirstTint.oz,
                        fourthColorGalonFirstTint.sixty,
                        fourthColorGalonFirstTint.oneHundred,
                    ],
                    [fourthColorGalonSecondTint.tint]: [
                        fourthColorGalonSecondTint.oz,
                        fourthColorGalonSecondTint.sixty,
                        fourthColorGalonSecondTint.oneHundred,
                    ],
                    [fourthColorGalonThirdTint.tint]: [
                        fourthColorGalonThirdTint.oz,
                        fourthColorGalonThirdTint.sixty,
                        fourthColorGalonThirdTint.oneHundred,
                    ],
                    [fourthColorGalonFourthTint.tint]: [
                        fourthColorGalonFourthTint.oz,
                        fourthColorGalonFourthTint.sixty,
                        fourthColorGalonFourthTint.oneHundred,
                    ],
                },
                bucket: {
                    [fourthColorBucketFirstTint.tint]: [
                        fourthColorBucketFirstTint.oz,
                        fourthColorBucketFirstTint.sixty,
                        fourthColorBucketFirstTint.oneHundred,
                    ],
                    [fourthColorBucketSecondTint.tint]: [
                        fourthColorBucketSecondTint.oz,
                        fourthColorBucketSecondTint.sixty,
                        fourthColorBucketSecondTint.oneHundred,
                    ],
                    [fourthColorBucketThirdTint.tint]: [
                        fourthColorBucketThirdTint.oz,
                        fourthColorBucketThirdTint.sixty,
                        fourthColorBucketThirdTint.oneHundred,
                    ],
                    [fourthColorBucketFourthTint.tint]: [
                        fourthColorBucketFourthTint.oz,
                        fourthColorBucketFourthTint.sixty,
                        fourthColorBucketFourthTint.oneHundred,
                    ],
                },
            },
        };

        const fifthColorGroup = {
            typeNumber: checkTypeNumber(fifthColor),
            typeName: fifthColor,
            baseNumber:
                checkTypeNumber(fifthColor).slice(0, 2) +
                checkBaseNumber(fifthBase),
            baseName: 'Base' + fifthBase,
            sizes: {
                liter: {
                    [fifthColorLiterFirstTint.tint]: [
                        fifthColorLiterFirstTint.oz,
                        fifthColorLiterFirstTint.sixty,
                        fifthColorLiterFirstTint.oneHundred,
                    ],
                    [fifthColorLiterSecondTint.tint]: [
                        fifthColorLiterSecondTint.oz,
                        fifthColorLiterSecondTint.sixty,
                        fifthColorLiterSecondTint.oneHundred,
                    ],
                    [fifthColorLiterThirdTint.tint]: [
                        fifthColorLiterThirdTint.oz,
                        fifthColorLiterThirdTint.sixty,
                        fifthColorLiterThirdTint.oneHundred,
                    ],
                    [fifthColorLiterFourthTint.tint]: [
                        fifthColorLiterFourthTint.oz,
                        fifthColorLiterFourthTint.sixty,
                        fifthColorLiterFourthTint.oneHundred,
                    ],
                },
                galon: {
                    [fifthColorGalonFirstTint.tint]: [
                        fifthColorGalonFirstTint.oz,
                        fifthColorGalonFirstTint.sixty,
                        fifthColorGalonFirstTint.oneHundred,
                    ],
                    [fifthColorGalonSecondTint.tint]: [
                        fifthColorGalonSecondTint.oz,
                        fifthColorGalonSecondTint.sixty,
                        fifthColorGalonSecondTint.oneHundred,
                    ],
                    [fifthColorGalonThirdTint.tint]: [
                        fifthColorGalonThirdTint.oz,
                        fifthColorGalonThirdTint.sixty,
                        fifthColorGalonThirdTint.oneHundred,
                    ],
                    [fifthColorGalonFourthTint.tint]: [
                        fifthColorGalonFourthTint.oz,
                        fifthColorGalonFourthTint.sixty,
                        fifthColorGalonFourthTint.oneHundred,
                    ],
                },
                bucket: {
                    [fifthColorBucketFirstTint.tint]: [
                        fifthColorBucketFirstTint.oz,
                        fifthColorBucketFirstTint.sixty,
                        fifthColorBucketFirstTint.oneHundred,
                    ],
                    [fifthColorBucketSecondTint.tint]: [
                        fifthColorBucketSecondTint.oz,
                        fifthColorBucketSecondTint.sixty,
                        fifthColorBucketSecondTint.oneHundred,
                    ],
                    [fifthColorBucketThirdTint.tint]: [
                        fifthColorBucketThirdTint.oz,
                        fifthColorBucketThirdTint.sixty,
                        fifthColorBucketThirdTint.oneHundred,
                    ],
                    [fifthColorBucketFourthTint.tint]: [
                        fifthColorBucketFourthTint.oz,
                        fifthColorBucketFourthTint.sixty,
                        fifthColorBucketFourthTint.oneHundred,
                    ],
                },
            },
        };

        const sixthColorGroup = {
            typeNumber: checkTypeNumber(sixthColor),
            typeName: sixthColor,
            baseNumber:
                checkTypeNumber(sixthColor).slice(0, 2) +
                checkBaseNumber(sixthBase),
            baseName: 'Base' + sixthBase,
            sizes: {
                liter: {
                    [sixthColorLiterFirstTint.tint]: [
                        sixthColorLiterFirstTint.oz,
                        sixthColorLiterFirstTint.sixty,
                        sixthColorLiterFirstTint.oneHundred,
                    ],
                    [sixthColorLiterSecondTint.tint]: [
                        sixthColorLiterSecondTint.oz,
                        sixthColorLiterSecondTint.sixty,
                        sixthColorLiterSecondTint.oneHundred,
                    ],
                    [sixthColorLiterThirdTint.tint]: [
                        sixthColorLiterThirdTint.oz,
                        sixthColorLiterThirdTint.sixty,
                        sixthColorLiterThirdTint.oneHundred,
                    ],
                    [sixthColorLiterFourthTint.tint]: [
                        sixthColorLiterFourthTint.oz,
                        sixthColorLiterFourthTint.sixty,
                        sixthColorLiterFourthTint.oneHundred,
                    ],
                },
                galon: {
                    [sixthColorGalonFirstTint.tint]: [
                        sixthColorGalonFirstTint.oz,
                        sixthColorGalonFirstTint.sixty,
                        sixthColorGalonFirstTint.oneHundred,
                    ],
                    [sixthColorGalonSecondTint.tint]: [
                        sixthColorGalonSecondTint.oz,
                        sixthColorGalonSecondTint.sixty,
                        sixthColorGalonSecondTint.oneHundred,
                    ],
                    [sixthColorGalonThirdTint.tint]: [
                        sixthColorGalonThirdTint.oz,
                        sixthColorGalonThirdTint.sixty,
                        sixthColorGalonThirdTint.oneHundred,
                    ],
                    [sixthColorGalonFourthTint.tint]: [
                        sixthColorGalonFourthTint.oz,
                        sixthColorGalonFourthTint.sixty,
                        sixthColorGalonFourthTint.oneHundred,
                    ],
                },
                bucket: {
                    [sixthColorBucketFirstTint.tint]: [
                        sixthColorBucketFirstTint.oz,
                        sixthColorBucketFirstTint.sixty,
                        sixthColorBucketFirstTint.oneHundred,
                    ],
                    [sixthColorBucketSecondTint.tint]: [
                        sixthColorBucketSecondTint.oz,
                        sixthColorBucketSecondTint.sixty,
                        sixthColorBucketSecondTint.oneHundred,
                    ],
                    [sixthColorBucketThirdTint.tint]: [
                        sixthColorBucketThirdTint.oz,
                        sixthColorBucketThirdTint.sixty,
                        sixthColorBucketThirdTint.oneHundred,
                    ],
                    [sixthColorBucketFourthTint.tint]: [
                        sixthColorBucketFourthTint.oz,
                        sixthColorBucketFourthTint.sixty,
                        sixthColorBucketFourthTint.oneHundred,
                    ],
                },
            },
        };

        const newColor = {
            codeNumber,
            colorName,
            hexCode,
            base: [
                firstColorGroup,
                secondColorGroup,
                thirdColorGroup,
                fourthColorGroup,
                fifthColorGroup,
                sixthColorGroup,
            ],
        };

        try {
            const res = await axios.post('/api/colors/new', newColor);
            notifySuccess(t('notify.newColor.success'));
        } catch (error) {
            notifyError(t('notify.newColor.error'));
        }
    };

    return (
        <NewColorContext.Provider
            value={{
                values,
                handleChange,
                lines,
                bases,
                sizes,
                tints,
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
            }}
        >
            {props.children}
        </NewColorContext.Provider>
    );
};

export default NewColorContextProvider;

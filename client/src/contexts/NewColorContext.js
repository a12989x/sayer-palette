import React, { useState, createContext } from 'react';
import axios from 'axios';

import { useForm } from '../components/useForm';

export const NewColorContext = createContext();

const NewColorContextProvider = (props) => {
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
    const [line, setLine] = useState(['white', 'accent']);

    const [values, handleChange] = useForm({
        codeNumber: '',
        colorName: '',
        hexCode: '',
        firstBase: '',
        firstBaseBase: '',
        secondBase: '',
        firstBaseBase: '',
        thirdBase: '',
        firstBaseBase: '',
        fourthBase: '',
        fifthBase: '',
        firstBaseBase: '',
        sixthBase: '',
        firstBaseBase: '',
    });

    /* ────────────────────────────────────────────────────── */
    /*                    First Base Tints                    */
    /* ────────────────────────────────────────────────────── */

    /* ──────────────────────── Liter ─────────────────────── */
    const [
        firstBaseLiterFirstTint,
        setFirstBaseLiterFirstTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        firstBaseLiterSecondTint,
        setFirstBaseLiterSecondTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        firstBaseLiterThirdTint,
        setFirstBaseLiterThirdTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        firstBaseLiterFourthTint,
        setFirstBaseLiterFourthTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    /* ──────────────────────── Galon ─────────────────────── */
    const [
        firstBaseGalonFirstTint,
        setFirstBaseGalonFirstTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        firstBaseGalonSecondTint,
        setFirstBaseGalonSecondTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        firstBaseGalonThirdTint,
        setFirstBaseGalonThirdTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        firstBaseGalonFourthTint,
        setFirstBaseGalonFourthTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    /* ─────────────────────── Bucket ─────────────────────── */
    const [
        firstBaseBucketFirstTint,
        setFirstBaseBucketFirstTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        firstBaseBucketSecondTint,
        setFirstBaseBucketSecondTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        firstBaseBucketThirdTint,
        setFirstBaseBucketThirdTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        firstBaseBucketFourthTint,
        setFirstBaseBucketFourthTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    /* ────────────────────────────────────────────────────── */
    /*                    Second Base Tints                   */
    /* ────────────────────────────────────────────────────── */

    /* ──────────────────────── Liter ─────────────────────── */
    const [
        secondBaseLiterFirstTint,
        setSecondBaseLiterFirstTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        secondBaseLiterSecondTint,
        setSecondBaseLiterSecondTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        secondBaseLiterThirdTint,
        setSecondBaseLiterThirdTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        secondBaseLiterFourthTint,
        setSecondBaseLiterFourthTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    /* ──────────────────────── Galon ─────────────────────── */
    const [
        secondBaseGalonFirstTint,
        setSecondBaseGalonFirstTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        secondBaseGalonSecondTint,
        setSecondBaseGalonSecondTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        secondBaseGalonThirdTint,
        setSecondBaseGalonThirdTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        secondBaseGalonFourthTint,
        setSecondBaseGalonFourthTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    /* ─────────────────────── Bucket ─────────────────────── */
    const [
        secondBaseBucketFirstTint,
        setSecondBaseBucketFirstTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        secondBaseBucketSecondTint,
        setSecondBaseBucketSecondTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        secondBaseBucketThirdTint,
        setSecondBaseBucketThirdTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        secondBaseBucketFourthTint,
        setSecondBaseBucketFourthTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    /* ────────────────────────────────────────────────────── */
    /*                     Third Base Tint                    */
    /* ────────────────────────────────────────────────────── */

    /* ──────────────────────── Liter ─────────────────────── */
    const [
        thirdBaseLiterFirstTint,
        setThirdBaseLiterFirstTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        thirdBaseLiterSecondTint,
        setThirdBaseLiterSecondTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        thirdBaseLiterThirdTint,
        setThirdBaseLiterThirdTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        thirdBaseLiterFourthTint,
        setThirdBaseLiterFourthTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    /* ──────────────────────── Galon ─────────────────────── */
    const [
        thirdBaseGalonFirstTint,
        setThirdBaseGalonFirstTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        thirdBaseGalonSecondTint,
        setThirdBaseGalonSecondTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        thirdBaseGalonThirdTint,
        setThirdBaseGalonThirdTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        thirdBaseGalonFourthTint,
        setThirdBaseGalonFourthTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    /* ─────────────────────── Bucket ─────────────────────── */
    const [
        thirdBaseBucketFirstTint,
        setThirdBaseBucketFirstTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        thirdBaseBucketSecondTint,
        setThirdBaseBucketSecondTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        thirdBaseBucketThirdTint,
        setThirdBaseBucketThirdTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        thirdBaseBucketFourthTint,
        setThirdBaseBucketFourthTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    /* ────────────────────────────────────────────────────── */
    /*                    Fourth Base Tints                   */
    /* ────────────────────────────────────────────────────── */

    /* ──────────────────────── Liter ─────────────────────── */
    const [
        fourthBaseLiterFirstTint,
        setFourthBaseLiterFirstTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        fourthBaseLiterSecondTint,
        setFourthBaseLiterSecondTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        fourthBaseLiterThirdTint,
        setFourthBaseLiterThirdTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        fourthBaseLiterFourthTint,
        setFourthBaseLiterFourthTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    /* ──────────────────────── Galon ─────────────────────── */
    const [
        fourthBaseGalonFirstTint,
        setFourthBaseGalonFirstTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        fourthBaseGalonSecondTint,
        setFourthBaseGalonSecondTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        fourthBaseGalonThirdTint,
        setFourthBaseGalonThirdTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        fourthBaseGalonFourthTint,
        setFourthBaseGalonFourthTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    /* ─────────────────────── Bucket ─────────────────────── */
    const [
        fourthBaseBucketFirstTint,
        setFourthBaseBucketFirstTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        fourthBaseBucketSecondTint,
        setFourthBaseBucketSecondTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        fourthBaseBucketThirdTint,
        setFourthBaseBucketThirdTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        fourthBaseBucketFourthTint,
        setFourthBaseBucketFourthTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    /* ────────────────────────────────────────────────────── */
    /*                    Fifth Base Tints                    */
    /* ────────────────────────────────────────────────────── */

    /* ──────────────────────── Liter ─────────────────────── */
    const [
        fifthBaseLiterFirstTint,
        setFifthBaseLiterFirstTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        fifthBaseLiterSecondTint,
        setFifthBaseLiterSecondTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        fifthBaseLiterThirdTint,
        setFifthBaseLiterThirdTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        fifthBaseLiterFourthTint,
        setFifthBaseLiterFourthTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    /* ──────────────────────── Galon ─────────────────────── */
    const [
        fifthBaseGalonFirstTint,
        setFifthBaseGalonFirstTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        fifthBaseGalonSecondTint,
        setFifthBaseGalonSecondTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        fifthBaseGalonThirdTint,
        setFifthBaseGalonThirdTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        fifthBaseGalonFourthTint,
        setFifthBaseGalonFourthTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    /* ─────────────────────── Bucket ─────────────────────── */
    const [
        fifthBaseBucketFirstTint,
        setFifthBaseBucketFirstTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        fifthBaseBucketSecondTint,
        setFifthBaseBucketSecondTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        fifthBaseBucketThirdTint,
        setFifthBaseBucketThirdTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        fifthBaseBucketFourthTint,
        setFifthBaseBucketFourthTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    /* ────────────────────────────────────────────────────── */
    /*                    Sixth Base Tints                    */
    /* ────────────────────────────────────────────────────── */

    /* ──────────────────────── Liter ─────────────────────── */
    const [
        sixthBaseLiterFirstTint,
        setSixthBaseLiterFirstTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        sixthBaseLiterSecondTint,
        setSixthBaseLiterSecondTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        sixthBaseLiterThirdTint,
        setSixthBaseLiterThirdTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        sixthBaseLiterFourthTint,
        setSixthBaseLiterFourthTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    /* ──────────────────────── Galon ─────────────────────── */
    const [
        sixthBaseGalonFirstTint,
        setSixthBaseGalonFirstTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        sixthBaseGalonSecondTint,
        setSixthBaseGalonSecondTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        sixthBaseGalonThirdTint,
        setSixthBaseGalonThirdTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        sixthBaseGalonFourthTint,
        setSixthBaseGalonFourthTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    /* ─────────────────────── Bucket ─────────────────────── */
    const [
        sixthBaseBucketFirstTint,
        setSixthBaseBucketFirstTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        sixthBaseBucketSecondTint,
        setSixthBaseBucketSecondTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        sixthBaseBucketThirdTint,
        setSixthBaseBucketThirdTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const [
        sixthBaseBucketFourthTint,
        setSixthBaseBucketFourthTintHandleChange,
    ] = useForm({
        tint: '',
        oz: '',
        sixty: '',
        oneHundred: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(
            values,
            firstBaseLiterFirstTint,
            firstBaseLiterSecondTint,
            firstBaseLiterThirdTint,
            firstBaseLiterFourthTint,
            firstBaseGalonFirstTint,
            firstBaseGalonSecondTint,
            firstBaseGalonThirdTint,
            firstBaseGalonFourthTint,
            firstBaseBucketFirstTint,
            firstBaseBucketSecondTint,
            firstBaseBucketThirdTint,
            firstBaseBucketFourthTint,
            secondBaseLiterFirstTint,
            secondBaseLiterSecondTint,
            secondBaseLiterThirdTint,
            secondBaseLiterFourthTint,
            secondBaseGalonFirstTint,
            secondBaseGalonSecondTint,
            secondBaseGalonThirdTint,
            secondBaseGalonFourthTint,
            secondBaseBucketFirstTint,
            secondBaseBucketSecondTint,
            secondBaseBucketThirdTint,
            secondBaseBucketFourthTint,
            thirdBaseLiterFirstTint,
            thirdBaseLiterSecondTint,
            thirdBaseLiterThirdTint,
            thirdBaseLiterFourthTint,
            thirdBaseGalonFirstTint,
            thirdBaseGalonSecondTint,
            thirdBaseGalonThirdTint,
            thirdBaseGalonFourthTint,
            thirdBaseBucketFirstTint,
            thirdBaseBucketSecondTint,
            thirdBaseBucketThirdTint,
            thirdBaseBucketFourthTint,
            fourthBaseLiterFirstTint,
            fourthBaseLiterSecondTint,
            fourthBaseLiterThirdTint,
            fourthBaseLiterFourthTint,
            fourthBaseGalonFirstTint,
            fourthBaseGalonSecondTint,
            fourthBaseGalonThirdTint,
            fourthBaseGalonFourthTint,
            fourthBaseBucketFirstTint,
            fourthBaseBucketSecondTint,
            fourthBaseBucketThirdTint,
            fourthBaseBucketFourthTint,
            fifthBaseLiterFirstTint,
            fifthBaseLiterSecondTint,
            fifthBaseLiterThirdTint,
            fifthBaseLiterFourthTint,
            fifthBaseGalonFirstTint,
            fifthBaseGalonSecondTint,
            fifthBaseGalonThirdTint,
            fifthBaseGalonFourthTint,
            fifthBaseBucketFirstTint,
            fifthBaseBucketSecondTint,
            fifthBaseBucketThirdTint,
            fifthBaseBucketFourthTint,
            sixthBaseLiterFirstTint,
            sixthBaseLiterSecondTint,
            sixthBaseLiterThirdTint,
            sixthBaseLiterFourthTint,
            sixthBaseGalonFirstTint,
            sixthBaseGalonSecondTint,
            sixthBaseGalonThirdTint,
            sixthBaseGalonFourthTint,
            sixthBaseBucketFirstTint,
            sixthBaseBucketSecondTint,
            sixthBaseBucketThirdTint,
            sixthBaseBucketFourthTint
        );
    };

    return (
        <NewColorContext.Provider
            value={{
                values,
                handleChange,
                bases,
                sizes,
                tints,
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
            }}
        >
            {props.children}
        </NewColorContext.Provider>
    );
};

export default NewColorContextProvider;

import React, { useState, createContext } from 'react';
import axios from 'axios';

import { useForm } from '../components/useForm';

export const NewColorContext = createContext();

const NewColorContextProvider = (props) => {
    const [newColor, setNewColor] = useState({});
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

    const [values, handleChange] = useForm({
        codeNumber: '',
        colorName: '',
        hexCode: '',
        bases: [],
    });

    return (
        <NewColorContext.Provider
            value={{ values, handleChange, bases, sizes, tints }}
        >
            {props.children}
        </NewColorContext.Provider>
    );
};

export default NewColorContextProvider;

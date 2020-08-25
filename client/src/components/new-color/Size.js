import React, { useContext } from 'react';

import { NewColorContext } from '../../contexts/NewColorContext';
import Tint from './Tint';

const Size = ({ name }) => {
    const { sizes } = useContext(NewColorContext);

    return (
        <section className="size">
            <h4>{name}</h4>

            <Tint />
            <Tint />
            <Tint />
            <Tint />
        </section>
    );
};

export default Size;

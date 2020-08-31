import React, { useContext } from 'react';

import { NewColorContext } from '../../contexts/NewColorContext';
import Tint from './Tint';

const Size = ({ name, values }) => {
    const { sizes } = useContext(NewColorContext);
    const { firstBaseLiterFirstTint } = values;

    return (
        <section className="size">
            <h4>{name}</h4>

            <Tint values={firstBaseLiterFirstTint} />
            <Tint />
            <Tint />
            <Tint />
        </section>
    );
};

export default Size;

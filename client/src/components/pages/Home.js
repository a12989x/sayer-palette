import React, { useState, useEffect } from 'react';
import axios from 'axios';

import History from '../History';

const Home = () => {
    const [colors, setColors] = useState({});

    useEffect(() => {
        getColors();
    }, []);

    const getColors = async () => {
        try {
            const res = await axios.get('/api/colors');
            console.log(res.data);
        } catch (error) {
            console.error('You need sign in');
            History.push('/access');
        }
    };

    return (
        <div>
            <p>Home Component</p>
        </div>
    );
};

export default Home;

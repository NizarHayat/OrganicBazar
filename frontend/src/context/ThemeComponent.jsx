// ThemeComponent.js
import React, { useContext } from 'react';
import { ThemeContext } from './contextApi';

const ThemeComponent = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={`App ${theme}`}>
            <button className='btn btn-primary sm' onClick={toggleTheme}>Click Me</button>
            <p>Color changed: {theme}</p>
        </div>
    );
};

export default ThemeComponent;

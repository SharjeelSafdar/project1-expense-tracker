import React, { useContext } from 'react';
import './CalcStyle.css';
import { GlobalContext } from '../../Context/GlobalProvider';
import { CalcHead } from './CalcHead';
import { Screen } from './Screen';
import { Keypad } from './Keypad';

export const Calculator = () => {
    const { showCalculator } = useContext(GlobalContext);
    
    // Set the className to change the visibility of calculator 
    // depending on the value of 'showCalculator' (true/false).
    return (
        <div className={`Calculator ${showCalculator ? 'show' : 'hide'}`}>
            <CalcHead />
            <Screen />
            <Keypad />
        </div>
    );
}

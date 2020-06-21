import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalProvider';

export const CalcHead = () => {
    const { setShowCalculator } = useContext(GlobalContext);
    return (
        <div className="CalcHead">
            <h3>Calculator</h3>
            <button onClick={() => setShowCalculator(false)}>X</button>
        </div>
    )
}

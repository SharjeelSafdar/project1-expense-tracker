import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalProvider';

// Header Component of Calculator.
export const CalcHead = () => {
    // Calculator's visibility is 'hidden' by default.
    // It's visibility is set to 'visible' when the 'Open Calculator' 
    // button in the NewTransaction component is pressed.
    const { setShowCalculator } = useContext(GlobalContext);
    return (
        <div className="CalcHead">
            <h3>Calculator</h3>
            {/* Pressing the 'X' button resets the calculator's visibility
                to 'hidden'. */}
            <button onClick={() => setShowCalculator(false)}>X</button>
        </div>
    )
}

import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalProvider';

// Component to simply display a string. 
// Mimics calculator's screen.
export const Screen = () => {
    const { calcScreen } = useContext(GlobalContext);
    return (
        <div className="Screen">
            {calcScreen}
        </div>
    );
}

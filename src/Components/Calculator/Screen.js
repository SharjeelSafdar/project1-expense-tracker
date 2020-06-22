import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalProvider';

export const Screen = () => {
    const { calcScreen } = useContext(GlobalContext);
    return (
        <div className="Screen">
            {calcScreen}
        </div>
    );
}

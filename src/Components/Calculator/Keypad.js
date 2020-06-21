import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalProvider';

export const Keypad = () => {
    const { calcScreen, setCalcScreen } = useContext(GlobalContext)
    const setScreen = (key) => {
        // If an error has occured clear the screen first
        setCalcScreen(calcScreen === 'error' 
            ? "0" 
            // Else if screen has a zero only, remove it.
            : calcScreen === '0'
                ? ''
                : calcScreen);
        switch (key) {
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '0':
            case '.':
            case '+':
            case '-':
            case '*':
            case '/':
            case '(':
            case ')':
                setCalcScreen(calcScreen+key);
                break;
            case 'C':
                setCalcScreen("0");
                break;
            case 'CE':
                setCalcScreen(calcScreen.length > 1 ? calcScreen.slice(0,-1)
                                                    : '0');
                break;
            case '=':
                var checkResult = calcScreen.includes('--') 
                    ? calcScreen.replace('--','+')
                    : calcScreen;

                try {
                    // eslint-disable-next-line
                    setCalcScreen( (eval(checkResult) || "0" ) + "" )
                } catch (e) {
                    setCalcScreen("error")
                }
                break;
            default:
                break;
        }
    };
    return (
        <div className="Keypad">
            <div className="CalcRow">
                <button onClick={() => setScreen('(')}>(</button>
                <button onClick={() => setScreen(')')}>)</button>
                <button onClick={() => setScreen('CE')}><img src="/images/backspace.png" alt="CE"/></button>
                <button onClick={() => setScreen('C')}>C</button>
            </div>

            <div className="CalcRow">
                <button onClick={() => setScreen('1')}>1</button>
                <button onClick={() => setScreen('2')}>2</button>
                <button onClick={() => setScreen('3')}>3</button>
                <button onClick={() => setScreen('+')}>+</button>
            </div>

            <div className="CalcRow">
                <button onClick={() => setScreen('4')}>4</button>
                <button onClick={() => setScreen('5')}>5</button>
                <button onClick={() => setScreen('6')}>6</button>
                <button onClick={() => setScreen('-')}>-</button>
            </div>
            
            <div className="CalcRow">
                <button onClick={() => setScreen('7')}>7</button>
                <button onClick={() => setScreen('8')}>8</button>
                <button onClick={() => setScreen('9')}>9</button>
                <button onClick={() => setScreen('*')}>x</button>
            </div>

            <div className="CalcRow">
                <button onClick={() => setScreen('.')}>.</button>
                <button onClick={() => setScreen('0')}>0</button>
                <button onClick={() => setScreen('=')}>=</button>
                <button onClick={() => setScreen('/')}>÷</button>
            </div>
        </div>
    );
}

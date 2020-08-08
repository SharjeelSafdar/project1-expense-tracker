import React, { useContext } from 'react';
import cx from 'classnames';
// Context
import { GlobalContext } from '../../Context/GlobalProvider';
// Styles
import styles from './Calculator.module.css';

const Calculator = () => {
    const { showCalculator, setShowCalculator, calcScreen, setCalcScreen } = useContext(GlobalContext);
    const setScreen = (key) => {
        // If an error has occured clear the screen first
        let temp = calcScreen === 'error' 
            ? "" 
            // Else if screen has a zero only, remove it.
            : calcScreen === '0'
                ? ''
                : calcScreen;
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
                // Just append the pressed button.
                temp += key;
                break;
            case 'C':
                // Clear the screen.
                temp = '0';
                break;
            case 'CE':
                // Backspace: remove the last character.
                temp = calcScreen.length > 1    ? temp.slice(0,-1)
                                                : '0';
                break;
            case '=':
                temp = temp.includes('--') 
                    ? temp.replace('--','+')
                    : temp;

                try {
                    // Try to evaluate the expression in temp.
                    // eslint-disable-next-line
                    temp = (eval(temp) || "0" ) + "";
                } catch (e) {
                    // else display 'error'.
                    temp = "error";
                }
                break;
            default:
                break;
        }
        setCalcScreen(temp);
    };
    
    // Set the className to change the visibility of calculator 
    // depending on the value of 'showCalculator' (true/false).
    return (
        <div className={cx(styles.container, showCalculator ? styles.show : styles.hide)}>
            <div className={styles.calcHead}>
                <h3>Calculator</h3>
                {/* Pressing the 'X' button resets the calculator's visibility to 'hidden'. */}
                <button onClick={() => setShowCalculator(false)}>X</button>
            </div>
            
            <div className={styles.screen}>
                {calcScreen}
            </div>

            <div className={styles.keypad}>
                <div className={styles.calcRow}>
                    <button onClick={() => setScreen('(')}>(</button>
                    <button onClick={() => setScreen(')')}>)</button>
                    <button onClick={() => setScreen('CE')}><img src="/images/backspace.png" alt="CE"/></button>
                    <button onClick={() => setScreen('C')}>C</button>
                </div>

                <div className={styles.calcRow}>
                    <button onClick={() => setScreen('1')}>1</button>
                    <button onClick={() => setScreen('2')}>2</button>
                    <button onClick={() => setScreen('3')}>3</button>
                    <button onClick={() => setScreen('+')}>+</button>
                </div>

                <div className={styles.calcRow}>
                    <button onClick={() => setScreen('4')}>4</button>
                    <button onClick={() => setScreen('5')}>5</button>
                    <button onClick={() => setScreen('6')}>6</button>
                    <button onClick={() => setScreen('-')}>-</button>
                </div>
                
                <div className={styles.calcRow}>
                    <button onClick={() => setScreen('7')}>7</button>
                    <button onClick={() => setScreen('8')}>8</button>
                    <button onClick={() => setScreen('9')}>9</button>
                    <button onClick={() => setScreen('*')}>x</button>
                </div>

                <div className={styles.calcRow}>
                    <button onClick={() => setScreen('.')}>.</button>
                    <button onClick={() => setScreen('0')}>0</button>
                    <button onClick={() => setScreen('=')}>=</button>
                    <button onClick={() => setScreen('/')}>÷</button>
                </div>
            </div>
        </div>
    );
}

export default Calculator;
import React, { useContext } from 'react';
// Context
import { GlobalContext } from '../../Context/GlobalProvider';
// Styles
import styles from './NewTransaction.module.css';

const NewTransaction = () => {
    // Extract the states from the GlobalContext to hold the contents of input boxes.
    const { addTransaction, 
            description, setDescription,
            date, setDate,
            time, setTime,
            amount, setAmount,
            setShowCalculator } = useContext(GlobalContext)
    
    // This function will run when the 'Add Transaction' button will be pressed.
    const submit = (e) => {
        // Prevents the form element from running its own routine.
        // This allows us to run our own functionality when the form is submitted.
        e.preventDefault();

        // Make a new transaction object from the data given by the user. 
        const newTransaction = {
            id: Math.round(Math.random()*10000000),
            description: description,
            amount: +amount,
            date: new Date(date+' '+time)
        };
        addTransaction(newTransaction);
        // Reset the input boxes to empty.
        setDescription(""); setDate(""); setTime(""); setAmount("");
    };

    const showCalculator = (e) => {
        e.preventDefault();
        setShowCalculator(true);
    }

    return (
            <fieldset className={styles.container}>
                <legend>Add New Transaction</legend>
                <form onSubmit={submit}>
                    {/* Input box for description of transaction. */}
                    <div className={styles.description}>
                        <label htmlFor="description">Description<sup>*</sup></label>
                        <input  id="description" 
                                type="text" 
                                className={styles.input}
                                placeholder="Describe the transaction..."
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                                />
                    </div>
                    
                    {/* Input field for Date. */}
                    <div className={styles.date}>
                        <label htmlFor="date">Date<sup>*</sup></label>
                        <input  id="date" 
                                type="date"
                                className={styles.input}
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                required
                        />
                    </div>

                    {/* Input field for Time. */}
                    <div className={styles.time}>
                        <label htmlFor="time">Time</label>
                        <input  id="time" 
                                type="time"
                                className={styles.input}
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                        />
                    </div>

                    {/* Input field for Amount. */}
                    <div className={styles.amount}>
                        <label htmlFor="amount">Amount<sup>*</sup> ($)<sup>**</sup></label>
                        <input  id="amount" 
                                type="number"
                                className={styles.input}
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                placeholder="$0"
                                required
                                />
                    </div>

                    {/* Add Transaction Button */}
                    <button className={styles.addBtn}>
                        <img src="/images/add.png" alt="" align="top" />
                        Add Transaction
                    </button>
                    {/* Show Calculator Button */}
                    <button className={styles.calcBtn} onClick={showCalculator}>
                        <img src="/images/calculator.png" alt="" align="top" />
                        Open Calculator
                    </button>
                </form>

                <p>* Required field</p>
                <p>** Enter positive amount for income and negative amount for expenses.</p>
            </fieldset>
    );
}

export default NewTransaction;
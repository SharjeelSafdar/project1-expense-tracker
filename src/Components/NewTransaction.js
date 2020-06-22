import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalProvider';

export const NewTransaction = () => {
    const { addTransaction, 
            description, setDescription,
            date, setDate,
            time, setTime,
            amount, setAmount,
            setShowCalculator } = useContext(GlobalContext)
    
    const submit = (e) => {
        e.preventDefault();
        if (!description || !date || !amount)
            return;
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

    return (
        <div className="NewTransaction">
            <fieldset>
                <legend>Add New Transaction</legend>
                <form onSubmit={submit}>
                    {/* Input box for description of transaction. */}
                    <div className="description">
                        <label htmlFor="description">Description<sup>*</sup></label>
                        <input  id="description" 
                                type="text" 
                                placeholder="Describe the transaction..."
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                                />
                    </div>
                    
                    {/* Input field for Date. */}
                    <div className="date">
                        <label htmlFor="date">Date<sup>*</sup></label>
                        <input  id="date" 
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                required
                        />
                    </div>

                    {/* Input field for Time. */}
                    <div className="time">
                        <label htmlFor="time">Time</label>
                        <input  id="time" 
                                type="time"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                        />
                    </div>

                    {/* Input field for Amount. */}
                    <div className="amount">
                        <label htmlFor="amount">Amount<sup>*</sup> ($)<sup>**</sup></label>
                        <input  id="amount" 
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                placeholder="$0"
                                required
                                />
                    </div>

                    {/* Add Transaction Button */}
                    <div className="add-btn">
                        <button>
                            <img src="/images/add.png" alt="" align="top" />
                            Add Transaction
                        </button>
                    </div>
                </form>

                {/* Show Calculator Button */}
                <div className="calc-btn">
                    <button onClick={() => setShowCalculator(true)}>
                        <img src="/images/calculator.png" alt="" align="top" />
                        Open Calculator
                    </button>
                </div>
                <p>* Required field</p>
                <p>** Enter positive amount for income and negative amount for expenses.</p>
            </fieldset>
        </div>
    );
}

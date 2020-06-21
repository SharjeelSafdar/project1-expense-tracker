import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalProvider';

export const NewTransaction = () => {
    const { addTransaction, 
            description, setDescription,
            date, setDate,
            time, setTime,
            amount, setAmount,
            setShowCalculator } = useContext(GlobalContext)
    
    const submit = () => {
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

                {/* Input box for description of transaction. */}
                <div className="formLine1">
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
                </div>
                
                <div className="formLine2">
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
                </div>
                <br />

                {/* Buttons */}
                <div className="formLine3">
                    <button className="add-btn"
                            onClick={() => submit()}
                    >
                        <img src="/images/add.png" alt="" />
                        <div>Add Transaction</div>
                    </button>
                    <button className="calc-btn"
                            onClick={() => setShowCalculator(true)}
                    >
                        <img src="/images/calculator.png" alt="" />
                        <div>Open Calculator</div>
                    </button>
                </div>
                <p>
                    * Required field
                    ** Enter positive amount for income and negative amount for expenses.
                </p>
            </fieldset>
        </div>
    );
}

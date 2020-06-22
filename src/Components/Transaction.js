import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalProvider';

export const Transaction = ({transaction}) => {
    const { deleteTransaction, editTransaction } = useContext(GlobalContext);
    const amount_sign = transaction.amount < 0 ? '-' : '+';
    
    return (
        // Set the className based on te sign of transaction amount.
        // Green border for postive amount and red border for negative amount.
        <li key={transaction.id} className={`transactionItem ${amount_sign === '+' ? 'plus' : 'minus'}`}>
            {/* This span elements holds the contents to be displayed on the left 
                side of each list list, i.e., Description, date and time. */}
            <span>
                <div className="trans-descrip">{transaction.description}</div>
                <div className="trans-date">
                    {transaction.date.toString().slice(0,21)}
                </div>
            </span>

            {/* This span element holds the contents to be displayed on the right
                side of each list item, i.e., amount, edit and delete buttons. */}
            <span className="trans-amount">
                <span>
                    {`${amount_sign}$${Math.abs(transaction.amount)}`}
                </span>
                <button className="edit-btn"
                        onClick={() => editTransaction(transaction)}
                >
                    <img src="/images/edit.png" alt="Edit" />
                </button>
                <button className="del-btn" 
                        onClick={() => deleteTransaction(transaction.id)}
                >X</button>
            </span>
        </li>
    )
}

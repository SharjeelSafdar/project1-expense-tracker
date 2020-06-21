import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalProvider';

export const Transaction = ({transaction}) => {
    const { deleteTransaction, editTransaction } = useContext(GlobalContext);
    const amount_sign = transaction.amount < 0 ? '-' : '+';
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return (
        <li key={transaction.id} className={`transactionItem ${amount_sign === '+' ? 'plus' : 'minus'}`}>
            <span>
                <div className="trans-descrip">{transaction.description}</div>
                <div className="trans-date">
                    {`
                        ${months[transaction.date.getMonth()]}. 
                        ${transaction.date.getDate()}, 
                        ${transaction.date.getFullYear()} 
                        ${transaction.date.getHours()}:${transaction.date.getMinutes()}
                    `}
                </div>
            </span>
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

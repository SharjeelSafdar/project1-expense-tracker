import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalProvider'

export const AccountSummary = () => {
    // 'transactions' array holds all the transactions entered by the user.
    const { transactions } = useContext(GlobalContext);
    // Extract transaction amounts.
    const amounts = transactions.map( transaction => transaction.amount );
    // Sum of all amounts to calculate the current balance.
    const total = amounts.reduce( (acc, amount) => acc += amount, 0 );
    // Sum of positive amounts only to calculate the income.
    const income = amounts.filter( item => item>0 ).reduce( (acc, amount) => acc += amount, 0 );
    const expense = total - income;
    
    return (
        <div className="AccountSummary">
            <div className="balance">
                <div className="balanceImage"><img src="/images/balance.png" alt="Current Balance"/></div>
                <div>
                    <h2>{`${total<0 ? '-' : ''}$${Math.abs(total.toFixed(2))}`}</h2>
                    <h4>Current Balance</h4>
                </div>
            </div>
            <div className="income">
                <div className="incomeImage"><img src="/images/income.png" alt="Current Balance"/></div>
                <div>
                    <h2>{`${income<0 ? '-' : ''}$${Math.abs(income.toFixed(2))}`}</h2>
                    <h4>Total Income</h4>
                </div>
            </div>
            <div className="expense">
                <div className="expenseImage"><img src="/images/expense.png" alt="Current Balance"/></div>
                <div>
                    <h2>{`${expense<0 ? '-' : ''}$${Math.abs(expense.toFixed(2))}`}</h2>
                    <h4>Total Expenditure</h4>
                </div>
            </div>
        </div>
    );
}

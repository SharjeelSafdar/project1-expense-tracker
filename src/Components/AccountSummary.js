import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalProvider'

export const AccountSummary = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map( transaction => transaction.amount );
    const total = amounts.reduce( (acc, amount) => acc += amount, 0 );
    const income = amounts.filter( item => item>0 ).reduce( (acc, amount) => acc += amount, 0 );
    const expense = total - income;
    return (
        <div className="AccountSummary">
            <div className="balance">
                <div className="balanceImage"><img src="/images/balance.png" alt="Current Balance"/></div>
                <div>
                    <h2>{`${total<0 ? '-' : ''}$${Math.abs(total)}`}</h2>
                    <h4>Current Balance</h4>
                </div>
            </div>
            <div className="income">
                <div className="incomeImage"><img src="/images/income.png" alt="Current Balance"/></div>
                <div>
                    <h2>{`${income<0 ? '-' : ''}$${Math.abs(income)}`}</h2>
                    <h4>Total Income</h4>
                </div>
            </div>
            <div className="expense">
                <div className="expenseImage"><img src="/images/expense.png" alt="Current Balance"/></div>
                <div>
                    <h2>{`${expense<0 ? '-' : ''}$${Math.abs(expense)}`}</h2>
                    <h4>Total Expenditure</h4>
                </div>
            </div>
        </div>
    );
}

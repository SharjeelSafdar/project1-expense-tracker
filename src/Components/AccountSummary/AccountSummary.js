import React, { useContext } from 'react';
// Context
import { GlobalContext } from '../../context/GlobalProvider'
// Styles
import styles from './AccountSummary.module.css';

const AccountSummary = () => {
    // 'transactions' array holds all the transactions entered by the user.
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map( transaction => transaction.amount );
    const total = amounts.reduce( (acc, amount) => acc += amount, 0 );
    const income = amounts.filter( item => item>0 ).reduce( (acc, amount) => acc += amount, 0 );
    const expense = total - income;
    
    return (
        <div className={styles.container}>

            <div className={styles.balance}>
                <div className={styles.balanceImage}>
                    <img className={styles.image} src="/images/balance.png" alt="Current Balance"/>
                </div>
                <h2>{`${total<0 ? '-' : ''}$${Math.abs(total.toFixed(2))}`}</h2>
                <h4>Current Balance</h4>
            </div>

            <div className={styles.income}>
                <div className={styles.incomeImage}>
                    <img className={styles.image} src="/images/income.png" alt="Current Balance"/>
                </div>
                <h2>{`${income<0 ? '-' : ''}$${Math.abs(income.toFixed(2))}`}</h2>
                <h4>Total Income</h4>
            </div>

            <div className={styles.expense}>
                <div className={styles.expenseImage}>
                    <img className={styles.image} src="/images/expense.png" alt="Current Balance"/>
                </div>
                <h2>{`${expense<0 ? '-' : ''}$${Math.abs(expense.toFixed(2))}`}</h2>
                <h4>Total Expenditure</h4>
            </div>

        </div>
    );
}

export default AccountSummary;
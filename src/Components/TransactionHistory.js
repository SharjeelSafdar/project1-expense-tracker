import React, { useContext } from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../Context/GlobalProvider';

export const TransactionHistory = () => {
    const { transactions } = useContext(GlobalContext);
    
    return (
        <div>
            <fieldset className="TransactionHistory">
                <legend>Transaction History</legend>
                {
                    // If there is atleast one transaction
                    transactions.length 
                    ? 
                        // Reder it as a list.
                        <ul>
                            {transactions.map( transaction => 
                                <Transaction key={transaction.id} transaction={transaction}/>
                            )}
                        </ul>
                    :
                        // Else if the transactions list is empty.
                        <div className="noTransaction">
                            <img src="/images/add2.png" alt=""/>
                            <h4>Add transactions to see history.</h4>
                        </div>
                }
            </fieldset>
        </div>
    );
}

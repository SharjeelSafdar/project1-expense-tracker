import React, { useState, useReducer, createContext } from 'react';
import { reducerFunc } from './ReducerFunc';

const initialState = {
    transactions: [
        // Dummy Transactions
        { id: 1, description: "Flowers", amount: -30, date: new Date("June 11, 2020 13:11")},
        { id: 2, description: "Salary", amount: 300, date: new Date("June 12, 2020 13:11")},
        { id: 3, description: "Belt", amount: -50, date: new Date("June 13, 2020 13:11")},
        { id: 4, description: "Payment", amount: 100, date: new Date("June 14, 2020 13:11")},
        { id: 5, description: "Flowers", amount: -30, date: new Date("June 11, 2020 13:11")},
        { id: 6, description: "Salary", amount: 300, date: new Date("June 12, 2020 13:11")},
        { id: 7, description: "Belt", amount: -50, date: new Date("June 13, 2020 13:11")},
        { id: 8, description: "Payment", amount: 100, date: new Date("June 14, 2020 13:11")},
        { id: 9, description: "Belt", amount: -50, date: new Date("June 13, 2020 13:11")},
        { id: 10, description: "Payment", amount: 100, date: new Date("June 14, 2020 13:11")},
    ]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducerFunc, initialState);
    // All the state to hold the inputs by the user. 
    const [ description, setDescription ] = useState("");
    const [ date, setDate ] = useState("");
    const [ time, setTime ] = useState("");
    const [ amount, setAmount ] = useState("");
    // State to hold the visibility status of calculator component.
    const [ showCalculator, setShowCalculator ] = useState(false);
    // State to hold the contents of calculator screen.
    const [ calcScreen, setCalcScreen ] = useState("0");

    // Actions
    function addTransaction (transaction) {
        dispatch({type: 'ADD_TRANSACTION', payload: transaction});
    }

    function deleteTransaction (id) {
        dispatch({type: 'DELETE_TRANSACTION', payload: id});
    }

    function editTransaction (transaction) {
        // Copying the information of the transaction to the input boxes.
        setDescription(transaction.description);
        setAmount(transaction.amount);
        setTime(transaction.date.toTimeString().slice(0,8));
        
        // Formatting the date string before assigning it to 'date' state.
        const date = transaction.date.toLocaleDateString().split("/");
        let dateString =  date[2] + '-';
        dateString += (+date[0] < 10) ? ('0'+date[0]) : (date[0]);
        dateString += '-' + ((date[1]<10) ? ('0'+date[1]) : (date[1]));
        setDate(dateString);

        dispatch({type: 'EDIT_TRANSACTION', payload: transaction.id});
    }

    return (
        <GlobalContext.Provider
            value={{
                transactions: state.transactions,
                description, setDescription,
                date, setDate,
                time, setTime,
                amount, setAmount,
                showCalculator, setShowCalculator,
                addTransaction,
                deleteTransaction,
                editTransaction,
                calcScreen, setCalcScreen,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

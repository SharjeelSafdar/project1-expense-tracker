export const reducerFunc = (state, action) => {
    switch (action.type) {
        case 'ADD_TRANSACTION':
            console.log(state.transactions)
            let newState = {
                ...state,
                transactions: [action.payload, ...state.transactions]
            };
            console.log(newState.transactions)
            newState.transactions.sort((a,b) => a.date.getTime() - b.date.getTime());
            console.log(newState.transactions)
            return newState; 
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case 'EDIT_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        default:
            return state;
    }
}
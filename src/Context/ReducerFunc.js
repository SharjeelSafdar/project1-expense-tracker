export const reducerFunc = (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      let newState = {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
      // Sort the transactions in chronological order: resent transactions first.
      newState.transactions.sort((a, b) => b.date.getTime() - a.date.getTime());

      return newState;
    case "DELETE_TRANSACTION":
      return {
        ...state,
        // Copy all the transactions except the one with a particular id.
        transactions: state.transactions.filter(
          transaction => transaction.id !== action.payload
        ),
      };
    case "EDIT_TRANSACTION":
      return {
        ...state,
        // Copy all the transactions except the one with a particular id.
        transactions: state.transactions.filter(
          transaction => transaction.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

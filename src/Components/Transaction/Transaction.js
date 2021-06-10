import React, { useContext } from "react";
import cx from "classnames";
// Context
import { GlobalContext } from "../../Context/GlobalProvider";
// Styles
import styles from "./Transaction.module.css";

const Transaction = ({ transaction }) => {
  const { deleteTransaction, editTransaction } = useContext(GlobalContext);
  const amount_sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li
      key={transaction.id}
      className={cx(
        styles.transactionItem,
        amount_sign === "+" ? styles.plus : styles.minus
      )}
    >
      <span>
        <div className={styles.transDescrip}>{transaction.description}</div>
        <div className={styles.transDate}>
          {transaction.date.toString().slice(0, 21)}
        </div>
      </span>

      <span className={styles.transAmount}>
        <span>
          {`${amount_sign}$${Math.abs(transaction.amount.toFixed(2))}`}
        </span>
        <button
          className={styles.editBtn}
          onClick={() => editTransaction(transaction)}
        >
          <img src="/images/edit.png" alt="Edit" />
        </button>
        <button
          className={styles.delBtn}
          onClick={() => deleteTransaction(transaction.id)}
        >
          X
        </button>
      </span>
    </li>
  );
};

export default Transaction;

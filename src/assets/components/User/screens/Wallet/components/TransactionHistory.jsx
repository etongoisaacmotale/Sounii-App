import React, { Component } from "react";
import "./TransactionHistory.css";

export default class TransactionHistory extends Component {
  state = {
    transactions: [],
  };

  componentDidMount() {
    const savedTransactions = localStorage.getItem("sounii_transactions");
    if (savedTransactions) {
      this.setState({ transactions: JSON.parse(savedTransactions) });
    }
  }

  render() {
    const { transactions } = this.state;

    return (
      <div className="tx-container">
        <h2 className="tx-title">Transaction History</h2>

        {transactions.length === 0 ? (
          <p className="tx-empty">No transactions yet.</p>
        ) : (
          <ul className="tx-list">
            {transactions
              .slice()
              .reverse()
              .map((tx, index) => (
                <li key={index} className="tx-item">
                  <div>
                    <p className="tx-type">{tx.type}</p>
                    <p className="tx-date">{tx.date}</p>
                  </div>

                  <p className={tx.amount >= 0 ? "tx-amount income" : "tx-amount expense"}>
                    {tx.amount >= 0
                      ? `+$${tx.amount.toFixed(2)}`
                      : `-$${Math.abs(tx.amount).toFixed(2)}`}
                  </p>
                </li>
              ))}
          </ul>
        )}
      </div>
    );
  }
}

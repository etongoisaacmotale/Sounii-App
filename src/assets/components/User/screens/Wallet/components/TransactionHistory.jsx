import React, { Component } from "react";

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
      <div className="bg-black/60 backdrop-blur-md rounded-2xl shadow-lg p-6 mt-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-orange-400 mb-4 text-center">
          Transaction History
        </h2>

        {transactions.length === 0 ? (
          <p className="text-gray-300 text-center">No transactions yet.</p>
        ) : (
          <ul className="space-y-3">
            {transactions
              .slice()
              .reverse()
              .map((tx, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-black/40 p-3 rounded-lg hover:bg-black/50 transition-colors"
                >
                  <div>
                    <p className="text-white font-medium">{tx.type}</p>
                    <p className="text-gray-300 text-sm">{tx.date}</p>
                  </div>
                  <p
                    className={`font-bold ${
                      tx.amount >= 0 ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {tx.amount >= 0 ? `+$${tx.amount.toFixed(2)}` : `-$${Math.abs(tx.amount).toFixed(2)}`}
                  </p>
                </li>
              ))}
          </ul>
        )}
      </div>
    );
  }
}

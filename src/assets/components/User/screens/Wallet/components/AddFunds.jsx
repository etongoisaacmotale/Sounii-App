import React, { Component } from "react";
import "./AddFunds.css";

export default class AddFunds extends Component {
  state = {
    balance: 0,
    amount: "",
  };

  componentDidMount() {
    const savedBalance = localStorage.getItem("sounii_wallet_balance");
    if (savedBalance) {
      this.setState({ balance: parseFloat(savedBalance) });
    }
  }

  handleChange = (e) => {
    this.setState({ amount: e.target.value });
  };

  handleAddFunds = (e) => {
    e.preventDefault();
    let { amount, balance } = this.state;
    const numericAmount = parseFloat(amount);

    if (isNaN(numericAmount) || numericAmount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    const newBalance = balance + numericAmount;
    this.setState({ balance: newBalance, amount: "" }, () => {
      localStorage.setItem("sounii_wallet_balance", newBalance.toString());
      alert(`✅ Added $${numericAmount.toFixed(2)}! New Balance: $${newBalance.toFixed(2)}`);
    });
  };

  render() {
    const { balance, amount } = this.state;

    return (
      <div className="addfunds-container">
        
        {/* Header */}
        <header className="addfunds-header">
          <h2 className="addfunds-title">Add Funds</h2>
        </header>

        {/* Current Balance */}
        <div className="addfunds-balance-card">
          <p className="addfunds-balance-label">Current Balance</p>
          <p className="addfunds-balance-amount">${balance.toFixed(2)}</p>
        </div>

        {/* Add Funds Form */}
        <form onSubmit={this.handleAddFunds} className="addfunds-form">
          <label className="addfunds-input-label">Enter Amount</label>

          <input
            type="number"
            value={amount}
            onChange={this.handleChange}
            placeholder="0.00"
            min="0"
            step="0.01"
            className="addfunds-input"
          />

          <button type="submit" className="addfunds-button">
            Add Funds
          </button>
        </form>
      </div>
    );
  }
}

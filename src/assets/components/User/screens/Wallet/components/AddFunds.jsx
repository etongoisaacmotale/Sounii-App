import React, { Component } from "react";

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
      <div className="min-h-screen bg-gradient-to-r from-black via-white to-orange-500 text-white p-6">
        {/* Header */}
        <header className="p-4 bg-black/70 backdrop-blur-md rounded-lg shadow-lg mb-6 flex justify-between items-center">
          <h2 className="text-3xl font-bold">Add Funds</h2>
        </header>

        {/* Current Balance */}
        <div className="bg-black/60 backdrop-blur-md p-6 rounded-2xl shadow-lg text-center mb-6">
          <p className="text-gray-300">Current Balance</p>
          <p className="text-4xl font-bold text-orange-500">${balance.toFixed(2)}</p>
        </div>

        {/* Add Funds Form */}
        <form
          onSubmit={this.handleAddFunds}
          className="bg-black/60 backdrop-blur-md p-6 rounded-2xl shadow-lg space-y-4"
        >
          <label className="block text-gray-300 font-medium">
            Enter Amount
          </label>
          <input
            type="number"
            value={amount}
            onChange={this.handleChange}
            placeholder="0.00"
            className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-orange-500"
            min="0"
            step="0.01"
          />

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold py-3 rounded-lg transition-colors"
          >
            Add Funds
          </button>
        </form>
      </div>
    );
  }
}

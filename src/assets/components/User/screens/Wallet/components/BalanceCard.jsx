import React, { Component } from "react";

export default class BalanceCard extends Component {
  state = {
    balance: 0,
  };

  componentDidMount() {
    const savedBalance = localStorage.getItem("sounii_wallet_balance");
    if (savedBalance) {
      this.setState({ balance: parseFloat(savedBalance) });
    }
  }

  render() {
    const { balance } = this.state;

    return (
      <div className="bg-black/60 backdrop-blur-md rounded-2xl shadow-lg p-6 flex flex-col items-center text-center max-w-sm mx-auto">
        <h3 className="text-gray-300 text-lg mb-2">Wallet Balance</h3>
        <p className="text-4xl font-bold text-orange-500">${balance.toFixed(2)}</p>
      </div>
    );
  }
}

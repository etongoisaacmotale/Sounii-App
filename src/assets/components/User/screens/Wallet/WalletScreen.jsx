import React, { Component } from "react";
import BalanceCard from "./components/BalanceCard.jsx";
import AddFunds from "./components/AddFunds.jsx";
import TransactionHistory from "./components/TransactionHistory.jsx";

export default class WalletScreen extends Component {
  render() {
    return (
      <div className="min-h-screen bg-gradient-to-r from-black via-white to-orange-500 text-white p-6">
        {/* Header */}
        <header className="p-4 bg-black/70 backdrop-blur-md rounded-lg shadow-lg mb-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold drop-shadow-lg">Wallet</h1>
        </header>

        {/* Current Balance */}
        <BalanceCard />

        {/* Add Funds Section */}
        <div className="mt-6">
          <AddFunds />
        </div>

        {/* Transaction History */}
        <div className="mt-6">
          <TransactionHistory />
        </div>
      </div>
    );
  }
}

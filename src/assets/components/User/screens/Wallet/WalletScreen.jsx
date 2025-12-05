import React, { Component } from "react";
import BalanceCard from "./components/BalanceCard.jsx";
import AddFunds from "./components/AddFunds.jsx";
import TransactionHistory from "./components/TransactionHistory.jsx";
import "./WalletScreen.css";

export default class WalletScreen extends Component {
  render() {
    return (
      <div className="wallet-screen">
        
        {/* Header */}
        <header className="wallet-header">
          <h1 className="wallet-title">Wallet</h1>
        </header>

        {/* Current Balance */}
        <BalanceCard />

        {/* Add Funds Section */}
        <div className="wallet-section">
          <AddFunds />
        </div>

        {/* Transaction History */}
        <div className="wallet-section">
          <TransactionHistory />
        </div>
      </div>
    );
  }
}

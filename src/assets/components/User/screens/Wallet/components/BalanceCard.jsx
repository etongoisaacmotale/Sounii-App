import React, { Component } from "react";
import "./BalanceCard.css";

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
      <div className="balancecard-container">
        <h3 className="balancecard-label">Wallet Balance</h3>
        <p className="balancecard-amount">${balance.toFixed(2)}</p>
      </div>
    );
  }
}

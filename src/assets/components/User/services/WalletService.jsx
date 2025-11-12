// walletService.js
// Class-based mock wallet service

class WalletService {
  simulateDelay(ms = 500) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  constructor() {
    this.balances = {}; // userId -> balance
    this.transactions = {}; // userId -> array of transactions
  }

  async getBalance(userId) {
    await this.simulateDelay();
    return this.balances[userId] || 0;
  }

  async deposit(userId, amount) {
    await this.simulateDelay();
    this.balances[userId] = (this.balances[userId] || 0) + amount;
    const tx = { type: "deposit", amount, date: new Date() };
    this.transactions[userId] = this.transactions[userId] || [];
    this.transactions[userId].push(tx);
    return tx;
  }

  async withdraw(userId, amount) {
    await this.simulateDelay();
    const balance = this.balances[userId] || 0;
    if (amount > balance) throw new Error("Insufficient funds");
    this.balances[userId] -= amount;
    const tx = { type: "withdraw", amount, date: new Date() };
    this.transactions[userId].push(tx);
    return tx;
  }

  async getTransactions(userId) {
    await this.simulateDelay();
    return this.transactions[userId] || [];
  }
}

// Export an instance
export const walletService = new WalletService();

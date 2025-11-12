import React, { Component } from "react";

export default class TicketModal extends Component {
  state = {
    quantity: 1,
  };

  increaseQuantity = () => {
    this.setState((prev) => ({ quantity: prev.quantity + 1 }));
  };

  decreaseQuantity = () => {
    this.setState((prev) => ({ quantity: Math.max(prev.quantity - 1, 1) }));
  };

  handlePurchase = () => {
    const { onPurchase } = this.props;
    onPurchase(this.state.quantity);
  };

  render() {
    const { onClose, event } = this.props;
    const { quantity } = this.state;

    return (
      <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
        <div className="bg-black/80 backdrop-blur-md rounded-lg p-6 w-80 text-white">
          <h2 className="text-xl font-bold mb-4">Purchase Ticket</h2>
          <p className="mb-2">Event: {event.title}</p>
          <p className="mb-4">Artist: {event.artist}</p>

          <div className="flex items-center justify-between mb-4">
            <button
              onClick={this.decreaseQuantity}
              className="px-3 py-1 bg-orange-500 text-black rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              -
            </button>
            <span className="text-lg">{quantity}</span>
            <button
              onClick={this.increaseQuantity}
              className="px-3 py-1 bg-orange-500 text-black rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              +
            </button>
          </div>

          <div className="flex justify-between">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-black/70 text-white rounded-lg hover:bg-orange-500 hover:text-black transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={this.handlePurchase}
              className="px-4 py-2 bg-orange-500 text-black rounded-lg hover:bg-orange-600 transition-colors"
            >
              Purchase
            </button>
          </div>
        </div>
      </div>
    );
  }
}

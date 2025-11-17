import React, { Component } from "react";
import "./TicketModal.css";

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
            <div className="ticketmodal-overlay">
                <div className="ticketmodal-container">
                    <h2>Purchase Ticket</h2>
                    <p>Event: {event.title}</p>
                    <p>Artist: {event.artist}</p>

                    <div className="ticketmodal-quantity">
                        <button onClick={this.decreaseQuantity}>-</button>
                        <span>{quantity}</span>
                        <button onClick={this.increaseQuantity}>+</button>
                    </div>

                    <div className="ticketmodal-actions">
                        <button onClick={onClose} className="cancel-btn">
                            Cancel
                        </button>
                        <button onClick={this.handlePurchase} className="purchase-btn">
                            Purchase
                        </button>
                    </div>
                </div>
            </div>

        );
    }
}

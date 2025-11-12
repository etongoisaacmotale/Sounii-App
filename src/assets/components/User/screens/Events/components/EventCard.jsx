import React, { Component } from "react";
import TicketModal from "./TicketModal.jsx";

export default class EventCard extends Component {
  constructor(props) {
    super(props);

    // Load purchases from localStorage
    const purchases = JSON.parse(localStorage.getItem("eventPurchases")) || {};
    const purchasedQuantity = purchases[props.event.id] || 0;

    this.state = {
      showModal: false,
      purchasedQuantity,
    };
  }

  toggleModal = () => {
    this.setState((prev) => ({ showModal: !prev.showModal }));
  };

  handlePurchase = (quantity) => {
    const { event } = this.props;
    const { purchasedQuantity } = this.state;

    const newQuantity = purchasedQuantity + quantity;

    // Update local state
    this.setState({ purchasedQuantity: newQuantity }, () => {
      // Persist to localStorage
      const purchases = JSON.parse(localStorage.getItem("eventPurchases")) || {};
      purchases[event.id] = newQuantity;
      localStorage.setItem("eventPurchases", JSON.stringify(purchases));
      alert(`You purchased ${quantity} item(s) for ${event.title}`);
      this.toggleModal();
    });
  };

  render() {
    const { event, carousel } = this.props;
    const { showModal, purchasedQuantity } = this.state;

    return (
      <div
        className={`bg-black/70 backdrop-blur-md shadow-lg rounded-lg p-4 text-white ${
          carousel ? "min-w-[300px]" : ""
        }`}
      >
        <div className="flex justify-between items-start">
          <div>
            <h2 className="font-bold text-xl mb-1">{event.title}</h2>
            <p className="text-gray-300 text-sm mb-1">{event.artist}</p>
            {event.venue && <p className="text-gray-300 text-sm mb-1">{event.venue}</p>}
            {event.date && <p className="text-gray-300 text-sm mb-1">{event.date}</p>}
          </div>
          {event.type === "live" && (
            <span className="px-2 py-1 bg-red-600 text-white text-xs rounded-full font-bold">
              LIVE NOW
            </span>
          )}
        </div>

        {/* Media */}
        {event.media && event.mediaType === "image" && (
          <img
            src={event.media}
            alt={event.title}
            className="w-full h-48 object-cover rounded my-2"
          />
        )}
        {event.media && event.mediaType === "video" && (
          <video
            src={event.media}
            controls
            className="w-full h-48 rounded my-2"
          />
        )}

        {/* Purchase Button */}
        <button
          onClick={this.toggleModal}
          className="mt-2 px-6 py-2 bg-orange-500 text-black font-semibold rounded-lg hover:bg-orange-600 transition-colors"
        >
          {event.type === "merch" ? "Buy Now" : "Get Ticket"}
        </button>

        {purchasedQuantity > 0 && (
          <p className="text-green-400 mt-2 text-sm">
            Purchased: {purchasedQuantity} {event.type === "merch" ? "item(s)" : "ticket(s)"}
          </p>
        )}

        {/* Ticket / Merch Modal */}
        {showModal && (
          <TicketModal
            event={event}
            onClose={this.toggleModal}
            onPurchase={this.handlePurchase}
          />
        )}
      </div>
    );
  }
}

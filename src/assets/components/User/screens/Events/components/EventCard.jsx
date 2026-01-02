import React, { Component } from "react";
import TicketModal from "./TicketModal.jsx";
import PlayerContext from "../../../player/PlayerContext.jsx";
import "./EventCard.css";

export default class EventCard extends Component {
  static contextType = PlayerContext;

  constructor(props) {
    super(props);

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

    this.setState({ purchasedQuantity: newQuantity }, () => {
      const purchases = JSON.parse(localStorage.getItem("eventPurchases")) || {};
      purchases[event.id] = newQuantity;
      localStorage.setItem("eventPurchases", JSON.stringify(purchases));
      alert(`You purchased ${quantity} item(s) for ${event.title}`);
      this.toggleModal();
    });
  };

  handlePreview = () => {
    const { setQueue, setCurrentSong, setIsPlaying } = this.context;
    const { preview } = this.props.event;

    if (!preview) return; // skip if no preview available

    const previewSong = {
      id: `preview-${this.props.event.id}`,
      title: this.props.event.title + " (Preview)",
      artist: this.props.event.artist,
      image: this.props.event.media || "/images/default_event.png",
      url: preview,
    };

    setQueue([previewSong]);
    setCurrentSong(previewSong);
    setIsPlaying(true);
  };

  render() {
    const { event, carousel } = this.props;
    const { showModal, purchasedQuantity } = this.state;

    return (
      <div
        className={`eventcard-container ${carousel ? "eventcard-carousel" : ""}`}
        onMouseEnter={this.handlePreview} // hover preview
      >
        <div className="flex justify-between items-start">
          <div>
            <h2 className="eventcard-title">{event.title}</h2>
            <p className="eventcard-artist">{event.artist}</p>
            {event.venue && <p className="eventcard-venue">{event.venue}</p>}
            {event.date && <p className="eventcard-date">{event.date}</p>}
          </div>

          {event.type === "live" && (
            <span className="eventcard-livebadge">LIVE NOW</span>
          )}
        </div>

        {/* Media */}
        {event.media && event.mediaType === "image" && (
          <img src={event.media} className="eventcard-media" alt={event.title} />
        )}
        {event.media && event.mediaType === "video" && (
          <video src={event.media} controls className="eventcard-media" />
        )}

        {/* Action */}
        <button onClick={this.toggleModal} className="eventcard-button">
          {event.type === "merch" ? "Buy Now" : "Get Ticket"}
        </button>

        {purchasedQuantity > 0 && (
          <p className="eventcard-purchased">
            Purchased: {purchasedQuantity}{" "}
            {event.type === "merch" ? "item(s)" : "ticket(s)"}
          </p>
        )}

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

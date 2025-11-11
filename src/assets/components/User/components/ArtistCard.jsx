import React, { Component } from 'react'
import "./ArtistCard.css";

class ArtistCard extends Component {
    handleFollow = () => {
        const { artist, onFollow } = this.props;
        if (onFollow) onFollow(artist);
    };

    render() {
        const { artist } = this.props;

        return (
            <div>
                <div className="artist-card">
                    <img src={artist.avatar} alt={artist.name} className="artist-avatar" />
                    <div className="artist-info">
                        <h3 className="artist-name">{artist.name}</h3>
                        {artist.followers !== undefined && (
                            <p className="artist-followers">{artist.followers} followers</p>
                        )}
                    </div>
                    <button className="follow-btn" onClick={this.handleFollow}>
                        Follow
                    </button>
                </div>
            </div>
        )
    }
}

export default ArtistCard;
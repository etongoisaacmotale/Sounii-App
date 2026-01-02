import React, { Component } from "react";
import PlayerContext from "../../player/PlayerContext.jsx";
import "./NowPlayingScreen.css";

export default class NowPlayingScreen extends Component {
    static contextType = PlayerContext;

    state = {
        showLyrics: false,
        showOptions: false,
        touchStartY: 0,
        touchEndY: 0,
    };

    menuRef = React.createRef();

    // Lifecycle
    componentDidMount() {
        document.addEventListener("click", this.handleOutsideClick);
    }

    componentWillUnmount() {
        document.removeEventListener("click", this.handleOutsideClick);
    }

    // Menu control
    toggleOptions = (e) => {
        e.stopPropagation();
        this.setState((prev) => ({ showOptions: !prev.showOptions }));
    };

    handleOutsideClick = (e) => {
        if (
            this.state.showOptions &&
            this.menuRef.current &&
            !this.menuRef.current.contains(e.target)
        ) {
            this.setState({ showOptions: false });
        }
    };

    // Player controls
    closeFullPlayer = () => this.context.setIsFullPlayerOpen(false);
    toggleLyrics = () => this.setState((prev) => ({ showLyrics: !prev.showLyrics }));

    handleSeek = (e) => {
        e.stopPropagation();
        const { seek } = this.context;
        const rect = e.currentTarget.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        seek((clickX / rect.width) * 100);
    };

    handleTouchStart = (e) => this.setState({ touchStartY: e.touches[0].clientY });
    handleTouchMove = (e) => this.setState({ touchEndY: e.touches[0].clientY });
    handleTouchEnd = () => {
        const { touchStartY, touchEndY } = this.state;
        if (touchEndY - touchStartY > 120) this.closeFullPlayer();
    };

    formatTime = (seconds = 0) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
    };

    render() {
        const {
            currentSong,
            isFullPlayerOpen,
            isPlaying,
            toggleShuffle,
            shuffle,
            repeat,
            toggleRepeat,
            nextSong,
            previousSong,
            progress,
            likedSongs,
            toggleLike,
            volume = 1,
            currentTime,
            duration,
        } = this.context;

        const { showLyrics, showOptions } = this.state;
        if (!currentSong || !isFullPlayerOpen) return null;

        const isLiked = likedSongs.some((s) => s.id === currentSong.id);

        return (
            <div
                className="now-playing-screen-overlay"
                onTouchStart={this.handleTouchStart}
                onTouchMove={this.handleTouchMove}
                onTouchEnd={this.handleTouchEnd}
            >
                {/* Top Bar */}
                <div className="top-bar">
                    <button onClick={this.closeFullPlayer}>⌄</button>
                    <span>Now Playing</span>
                    <button onClick={this.toggleOptions}>⋮</button>

                    {showOptions && (
                        <div className="options-menu" ref={this.menuRef} onClick={(e) => e.stopPropagation()}>
                            <button onClick={() => alert("Added to playlist")}>➕ Add to Playlist</button>
                            <button onClick={() => alert("Added to queue")}>🎶 Add to Queue</button>
                            <hr />
                            <button onClick={() => alert("Go to artist")}>👤 Go to Artist</button>
                            <button onClick={() => alert("Go to album")}>💿 Go to Album</button>
                            <hr />
                            <button onClick={() => alert("Share link copied")}>📤 Share</button>
                            <button onClick={() => navigator.clipboard.writeText(currentSong?.url || "")}>🔗 Copy Link</button>
                            <hr />
                            <button className="danger" onClick={() => alert("Song reported")}>🚩 Report</button>
                            <button onClick={() => alert("Song removed from library")}>🗑️ Remove from Library</button>
                        </div>
                    )}
                </div>

                {/* Artwork */}
                <div className="artwork-section">
                    <img src={currentSong.image} alt={currentSong.title} />
                </div>

                {/* Song Info */}
                <div className="song-info">
                    <div>
                        <h2>{currentSong.title}</h2>
                        <h4>{currentSong.artist}</h4>
                    </div>

                    <div className="song-actions">
                        {/* Like Button */}
                        <button
                            className={`like-button ${isLiked ? "liked" : ""}`}
                            onClick={() => toggleLike(currentSong)}
                            title="Like"
                        >
                            ❤️
                        </button>

                        {/* Queue Button */}
                        <button
                            className="queue-button"
                            onClick={() => alert("Open Queue")}
                            title="Queue"
                        >
                            <svg viewBox="0 0 24 24">
                                <path d="M3 13h14v-2H3v2zm0 4h14v-2H3v2zm0-8h10V7H3v2zm16-1l4 3-4 3V8z" />
                            </svg>
                        </button>
                    </div>
                </div>


                {/* Progress */}
                <div className="time-row">
                    <span>{this.formatTime(currentTime)}</span>
                    <div className="progress-container" onClick={this.handleSeek}>
                        <div className="progress" style={{ width: `${progress}%` }} />
                    </div>
                    <span>{this.formatTime(duration)}</span>
                </div>

                {/* Advanced Controls */}
                <div className="controls-wrapper">
                    <div className="side-controls">
                        <button className={`control-btn ${shuffle ? "active" : ""}`} title="Shuffle" onClick={toggleShuffle}>
                            <svg viewBox="0 0 24 24"><path d="M16 3h5v5h-2V6h-3V3zm-9.83 2.17l1.42 1.42A7.944 7.944 0 0 0 5 11h2c0-1.2.47-2.3 1.24-3.12l-1.07-1.07zm14.66 0l-1.41 1.41 1.07 1.07A7.944 7.944 0 0 1 19 11h2a7.944 7.944 0 0 0-1.24-3.12zM4 13h2c0 1.2.47 2.3 1.24 3.12l-1.42 1.42L5 17.17C4.42 16.59 4 15.82 4 15V13zm14.66 0l-1.41 1.41 1.07 1.07c.77-.82 1.24-1.92 1.24-3.12h-2zm-6.66 0l-1.42 1.42C10.47 15.3 10 14.2 10 13h2c0 1.2.47 2.3 1.24 3.12l-1.42-1.42z" /></svg>
                        </button>

                        <button className="control-btn" title="Previous" onClick={previousSong}>
                            <svg viewBox="0 0 24 24"><path d="M6 6v12l8.5-6z" /></svg>
                        </button>
                    </div>

                    <button className="play-btn" onClick={() => this.context.setIsPlaying(!isPlaying)}>
                        {isPlaying ? (
                            <svg viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
                        ) : (
                            <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                        )}
                    </button>

                    <div className="side-controls">
                        <button className="control-btn" title="Next" onClick={nextSong}>
                            <svg viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12z" /></svg>
                        </button>

                        <button className={`control-btn ${repeat ? "active" : ""}`} title="Repeat" onClick={toggleRepeat}>
                            <svg viewBox="0 0 24 24"><path d="M7 7h10v2h-8.59l2.3 2.3-1.42 1.42-4-4L10 7H7zm10 10H7v-2h8.59l-2.3-2.3 1.42-1.42 4 4L14 17h3v2z" /></svg>
                        </button>
                    </div>
                </div>

                {/* Extended Info Section */}
                <div className="extended-info">

                    {/* Lyrics */}
                    <div className="lyrics-section">
                        <h3>Lyrics</h3>
                        <p>{currentSong.lyrics || "Lyrics not available."}</p>
                    </div>

                    {/* Artist Info Card */}
                    <div className="artist-card">
                        <img src={currentSong.artistImage} alt={currentSong.artist} />
                        <div className="artist-info">
                            <h4>{currentSong.artist}</h4>
                            <p>{currentSong.artistBio || "No biography available."}</p>
                        </div>
                    </div>

                    {/* Explore Artist Button */}
                    <div className="explore-artist">
                        <button onClick={() => alert(`Exploring ${currentSong.artist}`)}>
                            Explore Artist
                        </button>
                    </div>
                </div>


            </div>
        );
    }
}

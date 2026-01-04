import React, { Component } from "react";
import PlayerContext from "./PlayerContext.jsx";

export default class PlayerProvider extends Component {
  state = {
    currentSong: null,
    queue: [],
    isPlaying: false,
    progress: 0,
    currentTime: 0, // Add currentTime to context
    duration: 0,    // Add duration to context
    shuffle: false,
    repeat: false,
    likedSongs: [],
    user: { isSubscribed: false },
    isFullPlayerOpen: false,
  };

  audio = new Audio();

  componentDidMount() {
    this.audio.addEventListener("timeupdate", this.updateProgress);
    this.audio.addEventListener("ended", this.handleEnded);
    this.audio.addEventListener("loadedmetadata", this.updateDuration);
  }

  componentWillUnmount() {
    this.audio.removeEventListener("timeupdate", this.updateProgress);
    this.audio.removeEventListener("ended", this.handleEnded);
    this.audio.removeEventListener("loadedmetadata", this.updateDuration);
  }

  updateProgress = () => {
    const { currentTime, duration } = this.audio;
    const progress = duration ? (currentTime / duration) * 100 : 0;
    this.setState({ currentTime, progress });
  };

  updateDuration = () => {
    this.setState({ duration: this.audio.duration });
  };

  handleEnded = () => {
    if (this.state.repeat) {
      this.audio.currentTime = 0;
      this.audio.play();
    } else {
      this.nextSong();
    }
  };

  setCurrentSong = (song) => {
    if (!song) return;
    this.setState(
      { currentSong: song, isPlaying: true, currentTime: 0, progress: 0 },
      () => {
        this.audio.src = song.url;
        this.audio.play().catch((err) => console.error("Audio play error:", err));
      }
    );
  };

  setQueue = (queue) => this.setState({ queue });

  setIsPlaying = (val) => {
    this.setState({ isPlaying: val }, () => {
      if (val) this.audio.play().catch((err) => console.error(err));
      else this.audio.pause();
    });
  };

  setIsFullPlayerOpen = (val) => this.setState({ isFullPlayerOpen: val });

  seek = (percent) => {
    if (!this.audio.duration) return;
    this.audio.currentTime = (percent / 100) * this.audio.duration;
    this.setState({ progress: percent, currentTime: this.audio.currentTime });
  };

  nextSong = () => {
    const { queue, currentSong, shuffle } = this.state;
    if (!queue.length) return;

    let index = queue.findIndex((s) => s.id === currentSong.id);
    if (shuffle) index = Math.floor(Math.random() * queue.length);
    else index = (index + 1) % queue.length;

    this.setCurrentSong(queue[index]);
  };

  previousSong = () => {
    const { queue, currentSong } = this.state;
    if (!queue.length) return;

    let index = queue.findIndex((s) => s.id === currentSong.id);
    index = (index - 1 + queue.length) % queue.length;

    this.setCurrentSong(queue[index]);
  };

  toggleLike = (song) => {
    const liked = this.state.likedSongs.some((s) => s.id === song.id);
    this.setState({
      likedSongs: liked
        ? this.state.likedSongs.filter((s) => s.id !== song.id)
        : [...this.state.likedSongs, song],
    });
  };

  toggleShuffle = () => this.setState({ shuffle: !this.state.shuffle });
  toggleRepeat = () => this.setState({ repeat: !this.state.repeat });

  render() {
    return (
      <PlayerContext.Provider
        value={{
          ...this.state,
          setCurrentSong: this.setCurrentSong,
          setQueue: this.setQueue,
          setIsPlaying: this.setIsPlaying,
          setIsFullPlayerOpen: this.setIsFullPlayerOpen,
          toggleLike: this.toggleLike,
          toggleShuffle: this.toggleShuffle,
          toggleRepeat: this.toggleRepeat,
          seek: this.seek,
          nextSong: this.nextSong,
          previousSong: this.previousSong,
        }}
      >
        {this.props.children}
      </PlayerContext.Provider>
    );
  }
}

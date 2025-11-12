import React, { Component } from 'react';
import { MusicContext } from '../../../context/MusicContext';

export default class MiniPlayer extends Component {
  static contextType = MusicContext;

  render() {
    const {
      currentTrack,
      isPlaying,
      togglePlayPause,
      nextTrack,
      previousTrack,
    } = this.context;

    if (!currentTrack) return null; // Hide player if no track

    return (
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-black via-white to-orange-500 shadow-lg flex items-center p-2 md:p-4">
        <img
          src={currentTrack.image}
          alt={currentTrack.title}
          className="w-16 h-16 md:w-20 md:h-20 rounded-lg object-cover border-2 border-orange-500"
        />

        <div className="ml-4 flex-1 text-white">
          <h3 className="font-semibold text-lg md:text-xl">{currentTrack.title}</h3>
          <p className="text-gray-200 text-sm md:text-base">{currentTrack.artist}</p>
        </div>

        <div className="flex items-center space-x-4">
          <button onClick={previousTrack} className="text-white hover:text-orange-500">
            ⏮
          </button>
          <button onClick={togglePlayPause} className="text-white hover:text-orange-500">
            {isPlaying ? '⏸' : '▶️'}
          </button>
          <button onClick={nextTrack} className="text-white hover:text-orange-500">
            ⏭
          </button>
        </div>
      </div>
    );
  }
}

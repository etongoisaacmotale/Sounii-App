// musicService.js
// Class-based mock music service

class MusicService {
  simulateDelay(ms = 800) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  constructor() {
    this.tracks = [
      { id: 1, title: "Track 1", artist: "Artist A" },
      { id: 2, title: "Track 2", artist: "Artist B" },
    ];
  }

  async getTracks() {
    await this.simulateDelay();
    return this.tracks;
  }

  async getTrackById(trackId) {
    await this.simulateDelay();
    return this.tracks.find((t) => t.id === trackId) || null;
  }

  async uploadTrack({ title, artist }) {
    await this.simulateDelay();
    const newTrack = { id: Date.now(), title, artist };
    this.tracks.push(newTrack);
    return newTrack;
  }

  async likeTrack(trackId) {
    await this.simulateDelay();
    return { trackId, liked: true };
  }
}

// Export an instance
export const musicService = new MusicService();

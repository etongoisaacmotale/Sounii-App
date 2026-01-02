import React, { Component } from "react";
import AppNavigator from "./assets/components/User/navigation/AppNavigator.jsx";
import { MusicProvider } from "./assets/components/User/context/MusicContext.jsx";
import PlayerProvider from "./assets/components/User/player/PlayerProvider.jsx";
import MiniPlayer from "./assets/components/User/components/player/MiniPlayer.jsx";
import NowPlayingScreen from "./assets/components/User/screens/Player/NowPlayingScreen.jsx";
import "./App.css";

class App extends Component {
  render() {
    return (
      <MusicProvider>
        <PlayerProvider>
          <AppNavigator />      {/* your main screens */}
          <NowPlayingScreen />  {/* mounted globally, overlays everything */}
          <MiniPlayer />        {/* shows when full player is closed */}
        </PlayerProvider>
      </MusicProvider>
    );
  }
}

export default App;

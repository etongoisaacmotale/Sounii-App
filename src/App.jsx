import React, { Component } from "react";
import AppNavigator from "./assets/components/User/navigation/AppNavigator.jsx";
import { MusicProvider } from "./assets/components/User/context/MusicContext.jsx";

class App extends Component {
  render() {
    return (
      <MusicProvider>
        <AppNavigator />
      </MusicProvider>
    );
  }
}

export default App;

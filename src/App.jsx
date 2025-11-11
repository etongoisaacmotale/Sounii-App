// App.jsx
import React, { Component } from "react";
import AppNavigator from "./assets/components/User/navigation/AppNavigator.jsx"; // use navigator
import { AuthProvider } from "./assets/components/User/context/AuthContext.jsx";
import { MusicProvider } from "./assets/components/User/context/MusicContext.jsx";

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <MusicProvider>
          <AppNavigator />
        </MusicProvider>
      </AuthProvider>
    );
  }
}

export default App;

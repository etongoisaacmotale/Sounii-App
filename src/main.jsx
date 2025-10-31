import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SplashScreen from './assets/components/user/screens/Splash/SplashScreen.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SplashScreen></SplashScreen>
  </StrictMode>,
)

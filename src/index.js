import React from 'react'
import ReactDOM from 'react-dom/client'
import 'react-alice-carousel/lib/alice-carousel.css'


import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'
import './index.css'
import { CryptoTrackerProvider } from './context/CryptoContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <CryptoTrackerProvider>
        <App />
      </CryptoTrackerProvider>
    </Router>
  </React.StrictMode>
)

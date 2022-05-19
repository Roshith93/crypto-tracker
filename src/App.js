import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline';

import { useContext } from 'react'
import { CryptoTrackerContext } from './context/CryptoContext'

import { CoinDetails, Dashboard } from './Pages'
import { NavBar } from './components'

function App() {
  const { theme } = useContext(CryptoTrackerContext)
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={'root'}>
        <NavBar />
        <Routes>
          <Route path='/' element={<Dashboard />} exact />
          <Route path='/coin/:id' element={<CoinDetails />} exact />
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App

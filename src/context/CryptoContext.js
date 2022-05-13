import { useState, useMemo, useEffect, createContext } from 'react'
import { createTheme } from '@mui/material/styles'

export const CryptoTrackerContext = createContext()

export const CryptoTrackerProvider = ({ children }) => {
  const [currency, setCurrency] = useState('INR')
  const [symbol, setSymbol] = useState('₹')
  const [mode, setMode] = useState('light')

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value)
  }

  useEffect(() => {
    if (currency === 'INR') setSymbol('₹')
    if (currency === 'USD') setSymbol('$')
  }, [currency])

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    []
  )
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  )
  return (
    <CryptoTrackerContext.Provider
      value={{ colorMode, theme, currency, symbol, handleCurrencyChange }}
    >
      {children}
    </CryptoTrackerContext.Provider>
  )
}

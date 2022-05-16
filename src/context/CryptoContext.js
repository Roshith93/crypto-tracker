import { useState, useMemo, useEffect, createContext } from 'react'
import { createTheme } from '@mui/material/styles'
import axios from 'axios'

import { getTrendingCoins } from '../constant/configuration'

export const CryptoTrackerContext = createContext()

export const CryptoTrackerProvider = ({ children }) => {
  const [currency, setCurrency] = useState('INR')
  const [symbol, setSymbol] = useState('₹')
  const [mode, setMode] = useState('light')
  const [trendingCoins, setTrendingCoins] = useState([])

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value)
  }

  useEffect(() => {
    if (currency === 'INR') setSymbol('₹')
    if (currency === 'USD') setSymbol('$')
  }, [currency])

  // == Trending Coins
  const fetchTrendingCoins = async () => {
    const { data, status } = await axios.get(getTrendingCoins(currency))
    try {
      if (status === 200) {
        setTrendingCoins(data)
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchTrendingCoins()
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

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  return (
    <CryptoTrackerContext.Provider
      value={{
        colorMode,
        theme,
        currency,
        symbol,
        handleCurrencyChange,
        trendingCoins,
        numberWithCommas
      }}
    >
      {children}
    </CryptoTrackerContext.Provider>
  )
}

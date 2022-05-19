import { useState, useMemo, useEffect, createContext } from 'react'
import { createTheme } from '@mui/material/styles'
import axios from 'axios'

import { getTrendingCoins, getCoinList } from '../constant/configuration'

export const CryptoTrackerContext = createContext()

export const CryptoTrackerProvider = ({ children }) => {
  const [currency, setCurrency] = useState('INR')
  const [symbol, setSymbol] = useState('₹')
  const [mode, setMode] = useState('light')
  const [trendingCoins, setTrendingCoins] = useState([])
  const [coinLists, setCoinLists] = useState([])
  const [searchValue, setSearchValue] = useState('')

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

  //  == Fetch coinsTable

  const fetchCoinLists = async () => {
    const { data, status } = await axios.get(getCoinList(currency))
    try {
      if (status === 200) {
        setCoinLists(data)
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchCoinLists()
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

  const getCoinSearchValue = (event) => {
    setSearchValue(event.target.value)
  }

  const handleSearchCoins = () => {
    let lists = []
    // setTimeout(() => {
      lists=   coinLists.filter(
        (coin) =>
          coin.symbol.includes(searchValue) ||
          coin.name.toLowerCase().includes(searchValue)
      )
    // }, 500)
    return lists
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
        coinLists,
        getCoinSearchValue,
        handleSearchCoins,
      }}
    >
      {children}
    </CryptoTrackerContext.Provider>
  )
}

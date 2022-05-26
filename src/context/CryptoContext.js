import { useState, useMemo, useEffect, createContext } from 'react'
import { createTheme } from '@mui/material/styles'
import axios from 'axios'

import {
  getTrendingCoins,
  getCoinList,
  getSingleCoin,
  getHistoricalChart,
} from '../constant/configuration'

export const CryptoTrackerContext = createContext()

export const CryptoTrackerProvider = ({ children }) => {
  const [currency, setCurrency] = useState('INR')
  const [symbol, setSymbol] = useState('₹')
  const [mode, setMode] = useState('light')
  const [trendingCoins, setTrendingCoins] = useState([])
  const [coinLists, setCoinLists] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [coinDetail, setCoinDetail] = useState([])
  const [coinFromParams, setCoinFromParams] = useState('bitcoin')
  const [days, setDays] = useState('365')
  const [coinChart, setCoinChart] = useState([])
  const [coinId, setCoinId] = useState('')

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
    setIsLoading(true)
    const { data, status } = await axios.get(getCoinList(currency))
    try {
      if (status === 200) {
        setCoinLists(data)
        setIsLoading(false)
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
    lists = coinLists.filter(
      (coin) =>
        coin.symbol.includes(searchValue) ||
        coin.name.toLowerCase().includes(searchValue)
    )
    // }, 500)
    return lists
  }

  const getSingleCoinDetails = async () => {
    const { status, data } = await axios.get(getSingleCoin(coinFromParams))
    try {
      if (status === 200) {
        setCoinDetail(data)
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getSingleCoinDetails()
  }, [coinFromParams])

  const getHistoricalData = async () => {
    const {
      status,
      data: { prices },
    } = await axios.get(getHistoricalChart(coinFromParams, days, currency))
    try {
      if (status === 200) {
        setCoinChart(prices)
      }
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getHistoricalData()
  }, [currency, days])

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
        isLoading,
        coinDetail,
        setCoinFromParams,
        coinFromParams,
        setDays,
        days,
        coinChart,
        coinId,
        setCoinId,
      }}
    >
      {children}
    </CryptoTrackerContext.Provider>
  )
}

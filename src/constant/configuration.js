export const BASE_URL = 'https://api.coingecko.com/api/v3'

export const singleCoin = (id) => `${BASE_URL}/coins/${id}`

export const priceInCurrency = (coinName, currency) =>
  `${BASE_URL}/simple/price?ids=${coinName}&vs_currencies=${currency}`

export const trendingCoins = (currency) =>
  `${BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`

export const coinList = (currency) =>
  `${BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`

export const historicalChart = (id, days = 365, currency) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`

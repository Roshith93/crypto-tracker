export const BASE_URL = 'https://api.coingecko.com/api/v3'

export const getSingleCoin = (id) => `${BASE_URL}/coins/${id}`

export const getPriceInCurrency = (coinName, currency) =>
  `${BASE_URL}/simple/price?ids=${coinName}&vs_currencies=${currency}`

export const getTrendingCoins = (currency) =>
  `${BASE_URL}/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h`

export const getCoinList = (currency) =>
  `${BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`

export const getHistoricalChart = (id, days = 365, currency) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`

const carouselResponsive = {
  0: {
    items: 2,
  },
  512: {
    items: 4,
  },
}

export const carouselProps = {
  mouseTracking: true,
  infinite: true,
  autoPlay: true,
  disableDotsControls: true,
  disableButtonsControls: true,
  autoPlayInterval: 1500,
  animationDuration: 1500,
  responsive: carouselResponsive,
}

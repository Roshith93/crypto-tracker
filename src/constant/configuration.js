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

export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const colorArray = [
  '#FF6633',
  '#FFB399',
  '#FF33FF',
  '#FFFF99',
  '#00B3E6',
  '#E6B333',
  '#3366E6',
  '#999966',
  '#99FF99',
  '#B34D4D',
  '#80B300',
  '#809900',
  '#E6B3B3',
  '#6680B3',
  '#66991A',
  '#FF99E6',
  '#CCFF1A',
  '#FF1A66',
  '#E6331A',
  '#33FFCC',
  '#66994D',
  '#B366CC',
  '#4D8000',
  '#B33300',
  '#CC80CC',
  '#66664D',
  '#991AFF',
  '#E666FF',
  '#4DB3FF',
  '#1AB399',
  '#E666B3',
  '#33991A',
  '#CC9999',
  '#B3B31A',
  '#00E680',
  '#4D8066',
  '#809980',
  '#E6FF80',
  '#1AFF33',
  '#999933',
  '#FF3380',
  '#CCCC00',
  '#66E64D',
  '#4D80CC',
  '#9900B3',
  '#E64D66',
  '#4DB380',
  '#FF4D4D',
  '#99E6E6',
  '#6666FF',
]

export const chartDays = [
  {
    label: '24 Hours',
    value: 1,
  },
  {
    label: '30 Days',
    value: 30,
  },
  {
    label: '3 Months',
    value: 90,
  },
  {
    label: '1 Year',
    value: 365,
  },
]

export const chartOptions = (coinName, currency) => {
 return {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: `${coinName.toUpperCase()} to ${currency} Chart`,
    },
    elements: {
      point: {
        radius: 1,
      },
    },
  },
}
}
import { React, useContext } from 'react'
import AliceCarousel from 'react-alice-carousel'
import { Link } from 'react-router-dom'

import { useStyles } from '../constant/ComponentStyles'
import { CryptoTrackerContext } from '../context/CryptoContext'
import { carouselProps , numberWithCommas} from '../constant/configuration'

const Carousel = () => {
  const { carouselBody, carouselItem } = useStyles()
  const { trendingCoins, symbol } =
    useContext(CryptoTrackerContext)

  const items =
    trendingCoins &&
    trendingCoins.map((coin) => {
      let profit = coin.price_change_percentage_24h >= 0
      return (
        <Link to={`/coin/${coin?.id}`} className={carouselItem}>
          <img
            src={coin?.image}
            alt={coin?.name}
            key={coin?.id}
            height='80'
            role='presentation'
            style={{ marginBottom: '15' }}
          />
          <span>{coin?.symbol} &nbsp;
          <span
            style={{ color: `${profit ? 'green' : 'red'}`, fontWeight: '500' }}
          >
            {profit && '+'} {coin.price_change_percentage_24h}
          </span></span>
          <span style={{ fontSize: 22, fontWeight: 500 }}>
            {symbol}
            {numberWithCommas(coin.current_price.toFixed(2))}
          </span>
        </Link>
      )
    })
  return (
    <div className={carouselBody}>
      {' '}
      <AliceCarousel items={items} {...carouselProps} />
    </div>
  )
}

export default Carousel

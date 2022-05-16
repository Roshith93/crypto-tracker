import { React, useContext } from 'react'
import AliceCarousel from 'react-alice-carousel'
import { Link } from 'react-router-dom'

import { useStyles } from '../constant/ComponentStyles'
import { CryptoTrackerContext } from '../context/CryptoContext'
import { carouselProps } from '../constant/configuration'

const handleDragStart = (e) => e.preventDefault()

const Carousel = () => {
  const { carouselBody } = useStyles()
  const { trendingCoins } = useContext(CryptoTrackerContext)

  const items =
    trendingCoins &&
    trendingCoins.map((coin) => {
      return (
        <Link to={`/coin/${coin?.id}`} className='carouselItem'>
          <img
            src={coin?.image}
            alt={coin?.name}
            key={coin?.id}
            onDragStart={handleDragStart}
            role='presentation'
          />
        </Link>
      )
    })
  console.log(items)
  return (
    <div className={carouselBody}>
      {' '}
      <AliceCarousel items={items} {...carouselProps} />
    </div>
  )
}

export default Carousel

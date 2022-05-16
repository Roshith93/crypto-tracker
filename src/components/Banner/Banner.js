import { Container, Typography } from '@mui/material'
import React from 'react'

import { useStyles } from '../../constant/ComponentStyles'
import Carousel  from '../Carousel'

const Banner = () => {
  const { bannerImg, bannerContent, bannerTitle, bannerSubTitle, tagLine } =
    useStyles()
  return (
    <div className={bannerImg}>
      <Container className={bannerContent}>
        <div className={tagLine}>
          <Typography variant='h2' className={bannerTitle}>
            Cryptocurrencies Tracker
          </Typography>
          <Typography variant='subtitle2' className={bannerSubTitle}>
            Information about crypto
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  )
}

export default Banner

import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import parse from 'html-react-parser'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'

import { CryptoTrackerContext } from '../context/CryptoContext'
import { useStyles } from '../constant/ComponentStyles'
import CoinInfo from '../components/CoinInfo'
import { Typography } from '@mui/material'
import { colorArray } from '../constant/configuration'

const CoinDetails = () => {
  let params = useParams()
  let { setCoinFromParams, coinDetail } = useContext(CryptoTrackerContext)
  let { cpContainer, cpSidebar, cpHeading, cpDescription, cpMarketData } =
    useStyles()

  useEffect(() => {
    setCoinFromParams(params.id)
  }, [params.id])

  if (Object.values(coinDetail).length === 0) return <h3>Loading...</h3>
  let {
    image: { large },
    id,
    name,
    description: { en },
    market_cap_rank,
    categories,
  } = coinDetail
  // console.log(colorArray[Math.floor(Math.random() * 5 + 1)])
  return (
    <div className={cpContainer}>
      <div className={cpSidebar}>
        <img src={large} alt={id} height='200' style={{ marginBottom: 20 }} />
        <Typography variant='h3' className={cpHeading}>
          {name}
        </Typography>
        <div className={cpMarketData}>
          <span style={{ display: 'flex' }}>
            <Typography variant='h5' className={cpHeading}>
              Rank: {market_cap_rank}
            </Typography>
          </span>
        </div>
        <Stack direction='column' spacing={1}>
          {categories.map((el, idx) => {
            return (
              el && (
                <Chip
                  key={idx}
                  label={el}
                  style={{
                    backgroundColor:
                      colorArray[Math.floor(Math.random() * 50 + 1)],
                  }}
                />
              )
            )
          })}
        </Stack>
        
        <Typography variant='subtitle1' className={cpDescription}>
          {parse(en)}
        </Typography>{' '}
        &nbsp;
        
      </div>
      <CoinInfo />
      {`CoinPage ${params.id}`}
    </div>
  )
}

export default CoinDetails

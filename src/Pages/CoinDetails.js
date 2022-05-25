import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import parse from 'html-react-parser'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'

import { CryptoTrackerContext } from '../context/CryptoContext'
import { useStyles } from '../constant/ComponentStyles'
import CoinInfo from '../components/CoinInfo'
import { Typography } from '@mui/material'
import { colorArray, numberWithCommas } from '../constant/configuration'
import LinearIndeterminate from '../components/ProgressBar'

const CoinDetails = () => {
  let params = useParams()
  let { setCoinFromParams, coinDetail, symbol, currency } = useContext(CryptoTrackerContext)
  let { cpContainer, cpSidebar, cpHeading, cpDescription, cpMarketData, cpSpanTitle } =
    useStyles()

  useEffect(() => {
    setCoinFromParams(params.id)
  }, [params.id])

  if (Object.values(coinDetail).length === 0) return <LinearIndeterminate/>
  let {
    image: { large },
    id,
    name,
    description: { en },
    market_cap_rank,
    categories,
    market_data: {current_price : {inr, usd}, market_cap:{inr:mINR, usd:mUSD}}
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
             <span className={cpSpanTitle}>Rank : </span> {market_cap_rank}
            </Typography>
          </span>
          <span style={{ display: 'flex' }}>
            <Typography variant='h5' className={cpHeading}>
             <span className={cpSpanTitle}>Current Prize : </span> {currency === 'INR' ? `${symbol} ${numberWithCommas(inr)}` :  `${symbol} ${numberWithCommas(usd)}`}
            </Typography>
          </span>
          <span style={{ display: 'flex' }}>
            <Typography variant='h5' className={cpHeading}>
             <span className={cpSpanTitle}>Market Cap : </span> {currency === 'INR' ? `${symbol} ${numberWithCommas(mINR)}` :  `${symbol} ${numberWithCommas(mUSD)}`}
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

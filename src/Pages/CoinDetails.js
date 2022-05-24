import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import parse from 'html-react-parser'

import { CryptoTrackerContext } from '../context/CryptoContext'
import { useStyles } from '../constant/ComponentStyles'
import CoinInfo from '../components/CoinInfo'
import { Typography } from '@mui/material'

const CoinDetails = () => {
  let params = useParams()
  let { setCoinFromParams, coinDetail } = useContext(CryptoTrackerContext)
  let { cpContainer, cpSidebar, cpHeading, cpDescription } = useStyles()

  useEffect(() => {
    setCoinFromParams(params.id)
  }, [params.id])

  if (Object.values(coinDetail).length === 0) return <h3>Loading...</h3>
  let { large, id, name, description:{en} } = coinDetail
  return (
    <div className={cpContainer}>
      <div className={cpSidebar}>
        <img
          src={large}
          alt={id}
          height='200'
          style={{ marginBottom: 20 }}
        />
        <Typography variant='h3' className={cpHeading}>
          {name}
        </Typography>
        <Typography variant='subtitle1' className={cpDescription}>
          {parse(en)}
        </Typography>
      </div>
      <CoinInfo />
      {`CoinPage ${params.id}`}
    </div>
  )
}

export default CoinDetails

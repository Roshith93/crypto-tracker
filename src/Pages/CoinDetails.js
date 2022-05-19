import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { CryptoTrackerContext } from '../context/CryptoContext'

const CoinDetails = () => {
  let params = useParams()
  let { setCoinDetail } = useContext(CryptoTrackerContext)
  useEffect(() => {
    setCoinDetail(params.id)
  }, [params.id])

  return <div>{`CoinPage ${params.id}`}</div>
}

export default CoinDetails

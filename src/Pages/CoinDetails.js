import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { CryptoTrackerContext } from '../context/CryptoContext'

const CoinDetails = () => {
  let params = useParams()
  let { setCoinFromParams } = useContext(CryptoTrackerContext)
  
  useEffect(() => {
    setCoinFromParams(params.id)
  }, [params.id])

  return <div>{`CoinPage ${params.id}`}</div>
}

export default CoinDetails

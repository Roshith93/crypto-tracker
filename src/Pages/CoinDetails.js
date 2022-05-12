import React from 'react'
import {  useParams } from "react-router-dom";

const CoinDetails = () => {
  let params = useParams()
  return <div>{`CoinPage ${params.id}`}</div>
}

export default CoinDetails

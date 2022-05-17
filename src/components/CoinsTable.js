import { Container, Typography, TextField } from '@mui/material'
import React, { useContext } from 'react'

import { CryptoTrackerContext } from '../context/CryptoContext'
import CustomPaginationActionsTable from './Table'

const CoinsTable = () => {
  const { getCoinSearchValue } = useContext(CryptoTrackerContext)
  return (
    <Container style={{ textAlign: 'center' }}>
      <Typography variant='h4' component='h2' style={{ margin: 10 }}>
        Crypto Prices by market cap
      </Typography>
      <TextField
        label='search crypto currencies.'
        variant='outlined'
        style={{ margin: 10, width: '100%' }}
        onChange={getCoinSearchValue}
      />
      <CustomPaginationActionsTable/>
    </Container>
  )
}

export default CoinsTable

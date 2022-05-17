import React, { useState, useContext } from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'

import { CryptoTrackerContext } from '../context/CryptoContext'

export default function StickyHeadTable() {
  const { coinLists } = useContext(CryptoTrackerContext)
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              {['Coin', 'Price', '24h Change', 'Market Cap'].map((column) => {
                // const value = row[column.id]
                return <TableCell key={column}>{column}</TableCell>
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {coinLists
              // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((coin) => {
                return (
                  <TableRow hover role='checkbox' tabIndex={-1} key={coin.id}>
                    <TableCell>
                      <img src={coin?.image} alt={coin.id} height='20' />
                      <span>{coin?.id}</span>
                      <span>{coin?.name}</span>
                    </TableCell>
                    <TableCell>
                      {coin?.current_price}
                    </TableCell>
                    <TableCell>
                      {coin.price_change_24h}
                    </TableCell>
                    <TableCell>
                      {coin.market_cap}
                    </TableCell>
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
    </Paper>
  )
}

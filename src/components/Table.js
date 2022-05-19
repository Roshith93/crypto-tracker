import React, { useState, useContext } from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import { useNavigate } from 'react-router-dom'

import { CryptoTrackerContext } from '../context/CryptoContext'
import LinearIndeterminate from './ProgressBar'
import { useStyles } from '../constant/ComponentStyles'
import { numberWithCommas } from '../constant/configuration'

export default function StickyHeadTable() {
  const { handleSearchCoins, symbol, isLoading } =
    useContext(CryptoTrackerContext)
  const { tableRow } = useStyles()
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  let navigate = useNavigate()
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              {['Coin', 'Price', '24h Change', 'Market Cap'].map((column) => {
                return (
                  <TableCell
                    key={column}
                    style={{ fontWeight: 700 }}
                    // align={column === 'Coin' ? '' : 'right'}
                  >
                    {column}
                  </TableCell>
                )
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell rowSpan={10} />
                <TableCell colSpan={4}>
                  <LinearIndeterminate />
                </TableCell>
              </TableRow>
            ) : handleSearchCoins().length > 0 ? (
              handleSearchCoins()
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((coin) => {
                  const profit = coin.price_change_percentage_24h > 0
                  return (
                    <>
                      <TableRow
                        hover
                        role='checkbox'
                        tabIndex={-1}
                        key={coin.id}
                        onClick={() => navigate(`/coins/${coin.id}`)}
                        className={tableRow}
                      >
                        <TableCell
                          style={{ display: 'flex', gap: 15 }}
                          component='th'
                          scope='row'
                        >
                          <img
                            src={coin?.image}
                            alt={coin.id}
                            height='40'
                            style={{ marginBottom: 10 }}
                          />
                          <div
                            style={{ display: 'flex', flexDirection: 'column' }}
                          >
                            <span
                              style={{
                                textTransform: 'uppercase',
                                fontSize: 22,
                              }}
                            >
                              {coin?.symbol}
                            </span>
                            <span style={{ color: 'darkgrey' }}>
                              {coin?.name}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          {symbol} {numberWithCommas(coin?.current_price)}
                        </TableCell>
                        <TableCell
                          style={{ color: `${profit ? 'green' : 'red'} ` }}
                        >
                          {profit && '+'}
                          {coin.price_change_percentage_24h.toFixed(2)}%
                        </TableCell>
                        <TableCell>
                          {numberWithCommas(coin?.market_cap)}
                        </TableCell>
                      </TableRow>
                    </>
                  )
                })
            ) : (
              <TableRow>
                {' '}
                <TableCell colSpan={4} style={{textAlign:'center'}}>No data found</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={handleSearchCoins() && handleSearchCoins().length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

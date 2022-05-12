import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import { useNavigate } from 'react-router-dom'

import { useStyles } from '../assets/componentStyles'

const NavBar = () => {
  let navigate = useNavigate()
  function handleClick() {
    navigate('/')
  }
  const { navBarTitle } = useStyles()
  const [currency, setAge] = React.useState('')

  const handleChange = (event) => {
    setAge(event.target.value)
  }
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography
          variant='h6'
          color='inherit'
          component='div'
          className={navBarTitle}
          onClick={handleClick}
        >
          Crypto Tracker
        </Typography>
        <FormControl style={{ width: '30%', height: '40', marginLeft: '10px' }}>
          <InputLabel id='demo-simple-select-label'>Currency</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={currency}
            label='currency'
            onChange={handleChange}
          >
            <MenuItem value={'USD'}>USD</MenuItem>
            <MenuItem value={'INR'}>INR</MenuItem>
          </Select>
        </FormControl>
      </Toolbar>
    </AppBar>
  )
}
export default NavBar

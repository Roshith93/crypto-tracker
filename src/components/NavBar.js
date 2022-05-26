import { useContext } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import { useNavigate } from 'react-router-dom'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded'

import IconButton from '@mui/material/IconButton'
import { useTheme } from '@mui/material/styles'

import { useStyles } from '../constant/ComponentStyles'
import { CryptoTrackerContext } from '../context/CryptoContext'

const NavBar = () => {
  let navigate = useNavigate()
  function handleClick() {
    navigate(-1)
  }

  const { colorMode, currency, handleCurrencyChange } =
    useContext(CryptoTrackerContext)

  const { navBarTitle } = useStyles()
  const theme = useTheme()

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
        <FormControl>
          <InputLabel id='demo-simple-select-label'>Currency</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={currency}
            label='currency'
            onChange={handleCurrencyChange}
            style={{ width: 100, height: 40, marginRight: '10px' }}
          >
            <MenuItem value={'USD'}>USD</MenuItem>
            <MenuItem value={'INR'}>INR</MenuItem>
          </Select>
        </FormControl>
        <div>
          <IconButton
            size='large'
            aria-label='account of current user'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            onClick={colorMode.toggleColorMode}
            color='inherit'
          >
            {theme.palette.mode === 'dark' ? (
              <DarkModeIcon />
            ) : (
              <LightModeRoundedIcon />
            )}
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  )
}
export default NavBar

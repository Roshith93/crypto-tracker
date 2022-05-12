import { Routes, Route } from 'react-router-dom'

import { CoinDetails, Dashboard } from './Pages'
import { NavBar } from './components'
// import { useStyles } from '../src/assets/componentStyles'

function App() {
  // const { root } = useStyles()
  // console.log(root)
  return (
    <div className={'root'}>
      <NavBar />
      <h2> Crypto Tracker</h2>
      <Routes>
        <Route path='/' element={<Dashboard />} exact />
        <Route path='/currency-details/:id' element={<CoinDetails />} exact />
      </Routes>
    </div>
  )
}

export default App

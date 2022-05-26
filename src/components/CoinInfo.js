import React, { useContext } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

import { CryptoTrackerContext } from '../context/CryptoContext'
import { useStyles } from '../constant/ComponentStyles'
import { chartDays, chartOptions } from '../constant/configuration'
import { BasicButtons } from '../components/Buttons'
import CircularIndeterminate from './ProgressBar'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)



const CoinInfo = ({ coinId }) => {
  const { coinChart, days, currency, setDays , coinFromParams} =
    useContext(CryptoTrackerContext)
  const { chartContainer, chartButtons } = useStyles()

  // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']
  const data = {
    labels: coinChart?.map((el) => {
      let date = new Date(el[0])
      let time =
        date.getHours() > 12
          ? `${date.getHours() - 12}:${date.getMinutes()} PM`
          : `${date.getHours()}:${date.getMinutes()} AM`
      return days === 1 ? time : date.toLocaleDateString()
    }),
    datasets: [
      {
        label: `Price (past ${days} Days) in ${currency}`,
        data: coinChart.map((el) => el[1]),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  }

  return (
    <div className={chartContainer}>
      {!coinChart ? (
        <CircularIndeterminate />
      ) : (
        <>
          <Line options={chartOptions(coinFromParams, currency)} data={data} />
          <div className={chartButtons}>
            {chartDays.map((el) => {
              return (
                <BasicButtons
                  keys={el.value}
                  val={el.label}
                  onClick={() => setDays(el.value)}
                  isSelected={days === el.value}
                />
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}

export default CoinInfo

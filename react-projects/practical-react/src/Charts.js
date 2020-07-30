import React from 'react'
import LineChart from './components/LineChart'
import './Charts.css'
import BarChart from './components/BarChart'
import DoughnutChart from './components/DoughnutChart'

function Charts() {
  return (
    <div className="chartWrapper">
      <div className='chart'>
        <LineChart />
      </div>
      <div className='chart'>
        <BarChart />
      </div>
      <div className='chart'>
        <DoughnutChart />
      </div>
    </div>
  )
}

export default Charts

import React from 'react'
import WeatherRow from './weatherRow'

function WeatherDays() {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg border my-4 w-[90%]"> 
      <table className="w-full text-sm text-left rtl:text-right">
        <thead className="text-xm uppercase">
          <tr>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Temprature
            </th>
            <th scope="col" className="px-6 py-3">
              Type
            </th>
          </tr>
        </thead>
        <tbody>
          <WeatherRow />
          <WeatherRow />
          <WeatherRow />
          <WeatherRow />
          <WeatherRow />
          <WeatherRow />
          <WeatherRow />
        </tbody>
      </table>
    </div>
  )
}

export default WeatherDays
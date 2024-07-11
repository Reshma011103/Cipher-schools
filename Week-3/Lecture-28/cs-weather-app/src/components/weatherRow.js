import React from 'react'

function WeatherRow() {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700  ">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        Apple MacBook Pro 17"
      </th>
      <td className="px-6 py-4">
        Silver
      </td>
      <td className="px-6 py-4">
        Laptop
      </td>
    </tr>

  )
}

export default WeatherRow
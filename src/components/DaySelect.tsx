'use client'

import { useState } from 'react'

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const DaySelect = ({ day, onChange }) => {
  return (
    <div className="relative inline-flex px-2 hover:border-gray-400 bg-white border border-gray-300 rounded-full">
      <select
        value={day}
        onChange={onChange}
        className=" text-gray-600 h-10 px-1 bg-transparent focus:outline-none"
      >
        {days.map((day, idx) => {
          return (
            <option key={day} value={day}>
              {day}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default DaySelect

'use client'

const hours = Array.from({ length: 12 }, (_, i) => (i + 1).toString())
const mins = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'))
const positions = ['AM', 'PM']
const selectClasses = ' text-gray-600 h-10 bg-white focus:outline-none '

const TimeSelect = ({
  hour,
  minute,
  pos,
  hourOnChange,
  minOnChange,
  positionOnChange,
}) => {
  return (
    <div className="relative inline-flex rounded-md bg-white">
      <div className="rounded-l-md px-1 border border-gray-300 hover:border-gray-400">
        <select
          value={hour}
          onChange={hourOnChange}
          className={`${selectClasses}`}
        >
          {hours.map((hour, idx) => {
            return (
              <option key={hour} value={hour}>
                {hour}
              </option>
            )
          })}
        </select>
      </div>
      <div className="px-1 border border-gray-300 hover:border-gray-400">
        <select value={minute} onChange={minOnChange} className={selectClasses}>
          {mins.map((min, idx) => {
            return (
              <option key={min} value={min}>
                {min}
              </option>
            )
          })}
        </select>
      </div>
      <div className="rounded-r-md px-1 border border-gray-300 hover:border-gray-400">
        <select
          value={pos}
          onChange={positionOnChange}
          className={selectClasses}
        >
          {positions.map((position, idx) => {
            return (
              <option key={position} value={position}>
                {position}
              </option>
            )
          })}
        </select>
      </div>
    </div>
  )
}

export default TimeSelect

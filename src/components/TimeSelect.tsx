'use client'

const hours = Array.from({ length: 12 }, (_, i) => (i + 1).toString())
const mins = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'))
const positions = ['AM', 'PM']

const TimeSelect = ({
  hour,
  minute,
  hourOnChange,
  minOnChange,
  positionOnChange,
}) => {
  return (
    <div className="relative inline-flex">
      <svg
        className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 412 232"
      >
        <path
          d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
          fill="#648299"
          fillRule="nonzero"
        />
      </svg>
      <select className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
        {hours.map((hour, idx) => {
          return (
            <option key={hour} onClick={hourOnChange} value={hour}>
              {hour}
            </option>
          )
        })}
      </select>
      <select className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
        {mins.map((min, idx) => {
          return (
            <option key={min} onClick={minOnChange} value={min}>
              {min}
            </option>
          )
        })}
      </select>
      <select className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
        {positions.map((position, idx) => {
          return (
            <option key={position} onClick={positionOnChange} value={position}>
              {position}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default TimeSelect

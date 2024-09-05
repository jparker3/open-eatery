import { parse, setHours, setMinutes, interval } from 'date-fns'
/**
 * To check if a chosen day and time match the date range in the string “Fri-Sat 11:30 am - 10 pm” using JavaScript, you can follow these steps:

Parse the input string to extract the days and times.
Convert the chosen day and time into a comparable format.
Compare the chosen day and time with the parsed range.
 */
const fixTimeString = (time: string): string => {
  const fixedTime = time.replace(
    /(\d{1,2})(:\d{2})?\s*(am|pm)/g,
    (match, p1, p2, p3) => {
      return p2 ? match : `${p1}:00 ${p3}`
    }
  )

  return fixedTime
}

const dayMap = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

const convertTo24HourFormat = (timeString) => {
  const [time, pos] = timeString.split(' ')
  let [hours, minutes] = time.split(':')
  hours = parseInt(hours)

  if (pos.toLowerCase() === 'pm' && hours !== 12) {
    hours += 12
  } else if (pos.toLowerCase() === 'am' && hours === 12) {
    hours = 0
  }

  return `${hours.toString().padStart(2, '0')}:${minutes}:00`
}

export const isWithinRange = (name, selectedDay, selectedTime, rangeObj) => {
  const chosenDayIndex = dayMap.indexOf(selectedDay.toLowerCase().slice(0, 3))

  if (!(dayMap[chosenDayIndex] in rangeObj)) {
    return false
  }

  const { start, end } = rangeObj[dayMap[chosenDayIndex]]
  const genericDate = '1970-01-01T'
  const chosenDate = new Date(
    `${genericDate}${convertTo24HourFormat(selectedTime)}`
  )
  const rangeArray = rangeObj[dayMap[chosenDayIndex]].filter((time) => {
    const { start, end } = time
    const startDate = new Date(`${genericDate}${convertTo24HourFormat(start)}`)
    let endDate = new Date(`${genericDate}${convertTo24HourFormat(end)}`)

    // If end time is earlier than start time, it means the range spans across midnight
    if (endDate < startDate) {
      endDate.setDate(endDate.getDate() + 1)
    }
    console.log('Chosen Date', chosenDate)
    console.log('start Date', startDate)
    console.log('End Date', endDate)
    console.log('In Range', startDate <= chosenDate && chosenDate <= endDate)

    return startDate <= chosenDate && chosenDate <= endDate
  })
  console.log('Range Array', rangeArray)
  return rangeArray.length > 0
}

/**['Mon-Thu, Sun 11:30 am - 9 pm', 'Fri-Sat 11:30 am - 9:30 pm'] */
const parseDateString = (scheduleArr) => {
  const scheduleObj = {}
  scheduleArr.map((schedule) => {
    // positive lookbehind to capture Mon-Thur, Sun or Mon, Wed-Sun
    const regex = /(?<=,\s(?:\w{3}(?:-\w{3})?))\s+/
    const [daysPart, timePart] = schedule.includes(',')
      ? schedule.split(regex)
      : schedule.split(/ (.+)/) // else just split after the first space
    const [startTime, endTime] = timePart.split(' - ')
    const days = daysPart.split(',').map((dayRange) => dayRange.trim())

    days.map((dayRange) => {
      if (dayRange.includes('-')) {
        const [startDay, endDay] = dayRange.split('-')
        const startIndex = dayMap.indexOf(startDay.toLowerCase())
        const endIndex = dayMap.indexOf(endDay.toLowerCase())

        for (let i = startIndex; i <= endIndex; i++) {
          const day = dayMap[i].toLowerCase()
          const nextDay = i !== endIndex ? dayMap[i + 1] : dayMap[0]
          if (!scheduleObj[day]) {
            scheduleObj[day] = []
          }
          if (endTime.includes('am')) {
            scheduleObj[day].push({
              start: fixTimeString(startTime),
              end: '11:59 pm',
            })
            if (!scheduleObj[nextDay]) {
              scheduleObj[nextDay] = []
            }
            scheduleObj[nextDay].push({
              start: '12:00 am',
              end: fixTimeString(endTime),
            })
          } else {
            scheduleObj[day].push({
              start: fixTimeString(startTime),
              end: fixTimeString(endTime),
            })
          }
        }
      } else {
        const dayRangeLower = dayRange.toLowerCase()
        const lastDayRange = days[days.length - 1]
        const lastDay = lastDayRange.toLowerCase()
        const nextDay = dayMap[(dayMap.indexOf(lastDay) + 1) % 7]
        if (endTime.includes('am')) {
          if (!scheduleObj[dayRangeLower]) {
            scheduleObj[dayRangeLower] = []
          }
          scheduleObj[dayRangeLower].push({
            start: fixTimeString(startTime),
            end: '11:59 pm',
          })
          if (!scheduleObj[nextDay]) {
            scheduleObj[nextDay] = []
          }
          scheduleObj[nextDay].push({
            start: '12:00 am',
            end: fixTimeString(endTime),
          })
        }
        if (!scheduleObj[dayRangeLower]) {
          scheduleObj[dayRangeLower] = []
        }
        scheduleObj[dayRangeLower].push({
          start: fixTimeString(startTime),
          end: fixTimeString(endTime),
        })
      }
    })
  })
  return scheduleObj
}

export default parseDateString

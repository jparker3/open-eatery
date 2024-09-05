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

const createDateInterval = (schedule) => {
  const dayMap = {
    Mon: 'Monday',
    Tue: 'Tuesday',
    Wed: 'Wednesday',
    Thu: 'Thursday',
    Fri: 'Friday',
    Sat: 'Saturday',
    Sun: 'Sunday',
  }

  // remove date-fns?? rebuild object to have the startDayTime with the day ofthe week and 24 hour clock??
  const dateObjects = Object.entries(schedule).map(([day, timeRange]) => {
    const dayDate = parse(dayMap[day], 'EEEE', new Date())
    const parsedTimeStart = fixTimeString(timeRange?.start)
    const parsedTimeEnd = fixTimeString(timeRange?.end)
    const startTime = parse(parsedTimeStart, 'hh:mm a', dayDate)
    const endTime =
      timeRange?.end !== 'undefined'
        ? parse(parsedTimeEnd, 'hh:mm a', dayDate)
        : startTime
    const startDateTime = setMinutes(
      setHours(dayDate, startTime.getHours()),
      startTime.getMinutes()
    )
    const endDateTime = setMinutes(
      setHours(dayDate, endTime.getHours()),
      endTime.getMinutes()
    )
    console.log('start', dayDate)

    return {
      day: dayMap[day],
      startDateTime,
      endDateTime,
    }
  })

  return dateObjects.map(({ day, startDateTime, endDateTime }) => {
    console.log('Interval', endDateTime)
    const timeInterval = interval(startDateTime, endDateTime)
    return {
      day,
      timeInterval,
    }
  })
}
/**['Mon-Thu, Sun 11:30 am - 9 pm', 'Fri-Sat 11:30 am - 9:30 pm'] */
const parseDateString = (scheduleArr) => {
  const dayMap = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
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
        const startIndex = dayMap.indexOf(startDay)
        const endIndex = dayMap.indexOf(endDay)

        for (let i = startIndex; i < endIndex; i++) {
          scheduleObj[dayMap[i]] = { start: startTime, end: endTime }
        }
      } else {
        scheduleObj[dayRange] = { start: startTime, end: endTime }
      }
    })
  })
  return createDateInterval(scheduleObj)
}

export default parseDateString

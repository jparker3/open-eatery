'use client'
import { useState, useEffect, ChangeEvent, SetStateAction } from 'react'
import 'react-datetime-picker/dist/DateTimePicker.css'
import 'react-calendar/dist/Calendar.css'
import 'react-clock/dist/Clock.css'
import restHours from 'utils/rest_hours'
import parseDateString, { isWithinRange } from 'utils/parseDateString'
import DaySelect from '@/components/DaySelect'
import TimeSelect from '@/components/TimeSelect'

export default function Home() {
  const [openEateries, setOpenEeateries] = useState(
    restHours.map((rest) => rest.name).sort()
  )
  const [day, setDay] = useState<string>('Sunday')
  const [hour, setHour] = useState<string>('1')
  const [minute, setMinute] = useState<string>('00')
  const [position, setPosition] = useState<string>('PM')

  const parsedData = restHours.map((eatery) => {
    const { name, times } = eatery
    return {
      name: name,
      times: parseDateString(times),
    }
  })
  // Leaving this log here so you can see the data structure I used
  console.log('Parsed Data', parsedData)

  useEffect(() => {
    const chosenTime = `${hour}:${minute} ${position.toLowerCase()}`
    const adjustedEateries = parsedData
      .map((datum) => {
        const { name, times } = datum
        if (isWithinRange(name, day, chosenTime, times)) {
          return name
        }
        return ''
      })
      .filter((value) => value !== '')
      .sort()
    setOpenEeateries(adjustedEateries)
  }, [day, hour, minute, position])

  const handleState =
    (setState: {
      (value: SetStateAction<string>): void
      (arg0: string): any
    }) =>
    (e: ChangeEvent<HTMLInputElement>) =>
      setState(e.target.value)

  // ~~Create day picker dropdown~~ ....
  // ✔️Create or use time picker library
  // ✔️Create Date object Based on chosen day and time? And store in state and update onchange✔️
  // ✔️Convert array of strings to an array of date objects that will work with **date-fns did not work**
  // ✔️use date-fns interval({start: DATE, end: DATE}) to create the interval/range object **did not work**
  // ✔️check picked day and time against the Interval object, using isWithinInterval() **did not work
  // ✔️Create isWithinRange function
  // ✔️Create a day map {"Sun": 0, "Mon": 1, ...}?
  // ✔️Clean up code
  return (
    <main className="absolute z-[-1] flex min-h-screen flex-col items-center justify-center p-24 w-full">
      <h1 className="p-6 text-4xl">Welcome to Open Eatery!</h1>
      <h2 className="p-2">
        Choose when you plan on eating out and we will show you what is open.
      </h2>
      <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex">
        <div className="flex justify-center gap-4">
          <DaySelect day={day} onChange={handleState(setDay)} />
          <TimeSelect
            hour={hour}
            minute={minute}
            pos={position}
            hourOnChange={handleState(setHour)}
            minOnChange={handleState(setMinute)}
            positionOnChange={handleState(setPosition)}
          />
        </div>
      </div>

      <div className="relative py-12 z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-4xl before:content-[''] after:absolute after:-z-20 after:h-[480px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] md:before:w-[500px] md:after:w-[300px] before:lg:h-[460px]">
        <div className="relative z-50 dark:drop-shadow-[0_0_0.3rem_#ffffff70] w-full md:min-w-[400px] p-6 opacity-85 rounded-md bg-white text-black h-80 max-h-screen overflow-y-auto">
          {openEateries.length > 0 ? (
            openEateries.map((rest, idx) => (
              <div key={rest} className="hover:bg-blue-800 hover:text-white">
                <p className="py-2 px-4 ">{rest}</p>
              </div>
            ))
          ) : (
            <p>Looks like nothing is open at that time</p>
          )}
        </div>
      </div>
    </main>
  )
}

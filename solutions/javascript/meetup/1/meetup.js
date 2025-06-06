//
// This is only a SKELETON file for the 'Meetup' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const meetup = (year, month, descriptor, day) => {
  let dayFirst = new Date(year, month - 1, 1)
  let dayLast = new Date(year, month, 0)
  let weekLast = dayLast.getDate() - 7 + 1
  let dayOfWeekLast = new Date(year, month - 1, weekLast).getDay()
  let thirteenth = new Date(year, month - 1, 13)
  let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  let desc = {
    first: {start: 1, dayIndex: dayFirst.getDay()},
    second: {start: 8, dayIndex: dayFirst.getDay()},
    third: {start: 15, dayIndex: dayFirst.getDay()},
    fourth: {start: 22, dayIndex: dayFirst.getDay()},
    teenth: {start: 13, dayIndex: thirteenth.getDay()},
    last: {start: weekLast, dayIndex: dayOfWeekLast},
  }
  let dayIndex = weekdays.indexOf(day)
  let meetupDay = desc[descriptor].start + ((7 - desc[descriptor].dayIndex) + dayIndex) % 7

  return new Date(year, month-1, meetupDay)
};


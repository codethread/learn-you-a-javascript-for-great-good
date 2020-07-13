const daysInWorkWeek = 5;
const daysInWeekend = 2;
const monthsInYear = 12;
const daysInYear = 365;

const daysInWeek = daysInWorkWeek + daysInWeekend;

const daysInMonth = daysInYear / monthsInYear;

const weekendDaysInYear = daysInYear * (daysInWeekend / daysInWeek);

export {
  daysInWeek,
  daysInMonth,
  weekendDaysInYear,
};

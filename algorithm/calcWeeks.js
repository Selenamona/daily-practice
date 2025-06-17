const calcWeeks = (startTime, endTime) => {
  const result = [];
  const start = new Date(startTime);
  start.setHours(0, 0, 0, 0);
  const end = new Date(endTime);
  const currentDay = end.getDay();
  let daysToLastSunday = currentDay;
  // let daysToLastSunday = currentDay === 0 ? 7 : currentDay;
  let lastSunday = new Date(end);
  lastSunday.setDate(end.getDate() - daysToLastSunday);
  lastSunday.setHours(0, 0, 0, 0);

  // const start = new Date(startTime);
  // const firstDay = start.getDay();
  // const dayToFirstMonday = firstDay === 0 ? 1 : firstDay === 1 ? 0 : 8 - firstDay;
  // let firstMonday = new Date(start);
  // firstMonday.setDate(start.getDate() + dayToFirstMonday);
  // firstMonday.setHours(0, 0, 0, 0);

  const oneDay = 1000 * 60 * 60 * 24;
  const diffDays = (lastSunday - start + oneDay) / oneDay;
  const weeks = Math.floor(diffDays / 7);
  console.log("diffDays:", diffDays);
  console.log("weeks:", weeks);

  for (let i = 0; i < weeks; i++) {
    const weekEnd = new Date(lastSunday);
    weekEnd.setDate(lastSunday.getDate() - i * 7);
    const weekStart = new Date(weekEnd);
    weekStart.setDate(weekEnd.getDate() - 6);
    console.log(weekStart.toLocaleDateString(), weekEnd.toLocaleDateString());
    result.push({
      startTime: weekStart.toLocaleDateString(),
      endTime: weekEnd.toLocaleDateString()
    });
  }
  return result.reverse();
};
calcWeeks("2025-5-4", "2025-5-17");

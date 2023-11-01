import { Dayjs } from "dayjs";

function auxGenerateValidDatesForRange(startDate: Dayjs, endDate: Dayjs, step = 15, acc: Dayjs[]): Dayjs[] {
  if (startDate.isAfter(endDate)) {
    return acc;
  } else {
    return auxGenerateValidDatesForRange(startDate.add(step, 'minute'), endDate, step, [...acc, startDate]);
  }
}

export function generateValidDatesForRangeRecursively(startDate: Dayjs, endDate: Dayjs, step = 15): Dayjs[] {
  return auxGenerateValidDatesForRange(startDate, endDate, step, []);
}

export function generateValidDatesForRangeProcedurally(startDate: Dayjs, endDate: Dayjs, step = 15): Dayjs[] {
  const dateList = [];
  let currentDate = startDate;

  while (currentDate <= endDate) {
    dateList.push(currentDate);
    currentDate = currentDate.add(step, 'minute');
  }

  return dateList;
}
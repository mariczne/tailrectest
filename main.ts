import { Dayjs } from "dayjs";
import {
  SinglyLinkedList as LinkedList,
} from "linked-list-typed";

function auxGenerateValidDatesForRange(
  nextDate: Dayjs,
  endDate: Dayjs,
  step = 15,
  acc: LinkedList<Dayjs>
): Dayjs[] {
  if (nextDate.isAfter(endDate)) {
    return acc.toArray();
  } else {
    acc.push(nextDate);
    return auxGenerateValidDatesForRange(
      nextDate.add(step, "minute"),
      endDate,
      step,
      acc
    );
  }
}

export function generateValidDatesForRangeRecursively(
  startDate: Dayjs,
  endDate: Dayjs,
  step = 15
): Dayjs[] {
  return auxGenerateValidDatesForRange(
    startDate,
    endDate,
    step,
    new LinkedList()
  );
}

export function generateValidDatesForRangeProcedurally(
  startDate: Dayjs,
  endDate: Dayjs,
  step = 15
): Dayjs[] {
  const dateList = [];
  let currentDate = startDate;

  while (currentDate <= endDate) {
    dateList.push(currentDate);
    currentDate = currentDate.add(step, "minute");
  }

  return dateList;
}

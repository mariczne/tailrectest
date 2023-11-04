import { Dayjs } from "dayjs";
import {
  SinglyLinkedList as LinkedList,
} from "linked-list-typed";

export function generateValidDatesForRangeRecursively(
  startDate: Dayjs,
  endDate: Dayjs,
  step = 15,
  acc: LinkedList<Dayjs> = new LinkedList<Dayjs>()
  ): Dayjs[] {
  if (startDate.isAfter(endDate)) {
    return acc.toArray();
  } else {
    acc.push(startDate);
    return generateValidDatesForRangeRecursively(
      startDate.add(step, "minute"),
      endDate,
      step,
      acc
    );
  }
}

export function generateValidDatesForRangeProcedurally(
  startDate: Dayjs,
  endDate: Dayjs,
  step = 15
): Dayjs[] {
  const dateList = new LinkedList<Dayjs>();
  let currentDate = startDate;

  while (currentDate <= endDate) {
    dateList.push(currentDate);
    currentDate = currentDate.add(step, "minute");
  }

  return dateList.toArray();
}

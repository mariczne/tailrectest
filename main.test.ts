import { it, expect } from "bun:test";
import dayjs from "dayjs";
import { generateValidDatesForRangeRecursively, generateValidDatesForRangeProcedurally } from "./main";

it("should work for large data ranges and relatively small steps (recursive)", () => {
  const startDate = dayjs("2020-11-01T12:00:00.000Z");
  const endDate = startDate.add(9000, "days");
  const stepInMinutes = 60;

  expect(
    generateValidDatesForRangeRecursively(startDate, endDate, stepInMinutes).length
  ).toEqual(216001);
});

it("should work for large data ranges and relatively small steps (procedural)", () => {
  const startDate = dayjs("2020-11-01T12:00:00.000Z");
  const endDate = startDate.add(9000, "days");
  const stepInMinutes = 60;

  expect(
    generateValidDatesForRangeProcedurally(startDate, endDate, stepInMinutes).length
  ).toEqual(216001);
});

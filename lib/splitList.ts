import { isEven } from "./isEven";

const log = console.log;

const split = <T>(numsFirst: number, list: T[]): T[][] => {
  const a = list.slice(0, numsFirst);
  const b = list.slice(numsFirst, list.length);
  return [a, b];
};

export function splitList(values: number[]): number[][] {
  const len = values.length;
  const b = isEven(len) ? len / 2 : Math.floor(len / 2) + 1;
  return split(b, values);
}

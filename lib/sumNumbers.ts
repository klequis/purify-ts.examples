import { isNumber } from "./isNumber";
import { isSpace } from "./isSpace";
const log = console.log;

const isSpaceOrNumber = (val: string | number): boolean => {
  if (isNumber(val)) {
    return true;
  }
  if (isSpace(val)) {
    return true;
  }
  return false;
};

export const getNumbersFromString = (test: string): string => {
  const a = test.split("");
  const b = a.reduce((prev, cur, idx, arr) => {
    const nextChar = arr[idx + 1];
    const isNum = isNumber(cur);
    const isLast = idx === arr.length - 1;
    const nextCharIsSpace = isSpace(nextChar);
    if (isNum && (isSpaceOrNumber(nextChar) || isLast)) {
      // if (isNum && (nextCharIsSpace || isLast)) {
      return prev.concat(String(cur));
    } else if (prev.slice(-1) !== "|") {
      return prev.concat("|");
    }
    return prev;
  }, "|");
  return b;
};

export const sumNumbers = (test: string): number => {
  const a = getNumbersFromString(test);
  const b = a.split("|");
  const c: number = b.reduce((prev: string | number, cur: string): number => {
    if (isNumber(cur)) {
      return Number(prev) + Number(cur);
    } else {
      return Number(prev);
    }
  }, 0);
  log("typeof c", typeof c);
  return c;
};

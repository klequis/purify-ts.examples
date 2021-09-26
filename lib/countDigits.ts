import { isNumber } from "./isNumber";
export const countDigits = (text: string): number => {
  const a = text.split("");
  const b = a.filter((c) => isNumber(c));
  return b.length;
};

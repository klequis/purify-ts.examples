import { isNumber } from "./isNumber";
import { last } from "./last";
import { init } from "./init";
const log = console.log;

const isWord = (val: string): boolean => !isNumber(val);

export const threeWords = (text: string): boolean => {
  const words = text.split(" ");
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    const a = words[i];
    const word = last(a) === "," ? init(a) : a;
    if (isWord(word)) {
      count++;
    } else {
      count = 0;
    }
    if (count === 3) break;
  }
  return count >= 3;
};

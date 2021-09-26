const log = console.log;
import { isLetter } from "./isLetter";
import { isSpace } from "./isSpace";

const getWord = (arr: string[]) => {
  const a = arr.reduce((p, c, idx, arr) => {
    if (isLetter(c)) {
      if (isSpace(arr[idx - 1])) {
        return p.concat(`|${c}`);
      }
      return p.concat(c);
    }
    if (isSpace(c)) {
      if (isLetter(arr[idx - 1])) {
        return p.concat("|_");
      } else {
        return p.concat("_");
      }
    }
    return "";
  }, "");
  return a;
};

export function backwardStringByWord(text: string): string {
  const a = text.split("");
  const b = getWord(a);
  const c = b.split("|");
  const d = c.map((x) => {
    const l = x.split("");
    const m = l.reverse();
    return m.join("");
  });
  const e = d.map((x) => {
    return x[0] === "_" ? x.replaceAll("_", " ") : x;
  });
  return e.join("");
}

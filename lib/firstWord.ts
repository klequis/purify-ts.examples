import { last } from "./last";
import { init } from "./init";

const log = console.log;

const isException = (char: string): boolean => {
  const ex = ["'", " "];
  return ex.includes(char);
};

function isLetter(char: string): boolean {
  return char.toLowerCase() != char.toUpperCase();
}

export const firstWord = (text: string): string => {
  const a = text.trim().split("");
  const b = a.map((l, idx, arr) => {
    if (isLetter(l) || isException(l)) {
      return l;
    } else {
      if (idx !== 0 && idx !== arr.length - 1) {
        return isLetter(arr[idx - 1]) && isLetter(arr[idx + 1]) ? " " : "";
      }
      return "";
    }
  });
  const d = b.join("").trim();
  return d.split(" ")[0];
};

// const valsToClean = [" ", ",", "...", "", "."];
// const removePunctuation = (words: string[], replace: ""): string[] => {
//   return words.map((w) => {
//     const l = last(w) as string;
//     if (valsToClean.includes(l)) {
//       return init(w);
//     } else {
//       return w;
//     }
//   });
// };

// const removePunctuationBtweenWords = (words: string[]): string[] => {
//   const a = words.map((w) => {
//     log("w: ", w);
//     const b = w.split("");
//     log("b: ", b);
//     return w;
//   });
//   return words;
// };

// const removeWords = (words: string[]): string[] => {
//   return words.filter((w) => {
//     return !valsToClean.includes(w);
//   });
// };

// export const firstWord = (text: string): string => {
//   const a = text.split(" ");
//   const b = removeWords(a);
//   const c = removePunctuation(b);
//   removePunctuationBtweenWords(c);
//   return c[0];
// };

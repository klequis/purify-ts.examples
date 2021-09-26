import { last } from "lib/last";
// import { greenf } from 'logger'
import { init } from "lib/init";

export const splitPairs = (text: string): string[] => {
  if (text === "") return [];
  const arr = text.split("");

  const result1 = arr.reduce(
    (prev: string[], cur: string, idx: number, arr: string[]) => {
      let r1;
      const initEls = init(prev);
      const lastEl = last(prev);
      if (lastEl === undefined) {
        r1 = [cur];
      } else if (lastEl.length === 1) {
        r1 = [...initEls, `${lastEl}${cur}`];
      } else if (lastEl.length === 2) {
        r1 = [...prev, cur];
      } else {
        throw new Error("no case");
      }
      return r1;
    },
    []
  );
  return last(result1).length === 1
    ? [...init(result1), `${last(result1)}_`]
    : result1;
};

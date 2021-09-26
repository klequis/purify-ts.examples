import { last } from "./last";
const log = console.log;

const unique = (list: any[]): any[] => {
  return list.reduce((p, c) => {
    return p.includes(c) ? p : [...p, c];
  }, []);
};

type TupleType = [string | number, number];
type StrOrNum = string | number;

const getCountCompare = (val1: StrOrNum, val2: StrOrNum): boolean =>
  val1 === val2;

const getCount = (val: StrOrNum, list: StrOrNum[]): TupleType => {
  const count = list.filter((x) => getCountCompare(x, val)).length;
  return [val, count];
};
/*
- This expression is not callable.
- Each member of the union type
  - '{ <S extends string>(predicate: (value: string, index: number, array: string[]) => value is S, thisArg?: any): S[]; (predicate: (value: string, index: number, array: string[]) => unknown, thisArg?: any): string[]; } | { ...; }' 
     has signatures, but none of those signatures are compatible with each other.ts(2349)
*/
const compare = (a: TupleType, b: TupleType): number => b[1] - a[1];

const sort = (tupleList: TupleType[]): TupleType[] => {
  return tupleList.sort(compare);
};

export function frequencySort(items: StrOrNum[]): StrOrNum[] {
  const uniqueItems = unique(items); // number[] | string[]
  const uniqueTuples = uniqueItems.map((x) => getCount(x, items));
  const sortedTuples = sort(uniqueTuples);

  const whichIsFirst = (p: number, c: number): number => {
    const idxP = uniqueItems.indexOf(p);
    const idxC = uniqueItems.indexOf(c);
    return idxP > idxC ? p : c;
  };

  const repeatNums = (list: TupleType[]): StrOrNum[] => {
    const a: string[][] | number[][] = list.map((t) => Array(t[1]).fill(t[0]));
    return a.flatMap((x: any) => x);
  };

  const resort = sortedTuples.reduce((p: any[], c: any[]): any[] => {
    if (p.length === 0) {
      return [c];
    }
    const pLast = last(p);
    const pLastFrequency: number = last(p)[1];
    const cFrequency: number = c[1];

    if (pLastFrequency === cFrequency) {
      const first = whichIsFirst(pLastFrequency, cFrequency);
      if (first === p[0]) {
        return [c, ...p];
      } else {
        return [...p, c];
      }
    }
    return [...p, c];
  }, []);

  return repeatNums(resort);
}

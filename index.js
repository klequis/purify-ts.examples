const log = console.log;

function isEven(num) {
  if (num === 0) return true;
  return num % 2 === 0 ? true : false;
}

const oddList = [1, 2, 3, 4, 5, 6, 7];
const evenList = [1, 2, 3, 4, 5, 6];

// log(Number.parseInt(String(123.5), 10));
// log(Math.floor(123.9));

// EVEN

// const splitEven = (numsFirst, list) => {
//   const a = list.slice(0, numsFirst);
//   const b = list.slice(numsFirst, list.length);
//   return [a, b];
// };
// const len = a.length;
// log("len: ", len);
// const numItemsIfEven = len / 2;
// log("even", splitEven(numItemsIfEven, a));

const split = (numsFirst, list) => {
  log("numsFirst", numsFirst);
  log("list: ", list);
  const a = list.slice(0, numsFirst);
  const b = list.slice(numsFirst, list.length);
  return [a, b];
};

// const numItemsIfOdd = Math.floor(len / 2) + 1;
// log("numItemsIfOdd: ", numItemsIfOdd);
// log("even", split(numItemsIfOdd, a));

const callIt = (list) => {
  const len = list.length;
  const b = isEven(len) ? len / 2 : Math.floor(len / 2) + 1;
  return split(b, list);
};

// const e = callIt(evenList);
// log("e: ", e);
const o = callIt(oddList);
log("o: ", o);

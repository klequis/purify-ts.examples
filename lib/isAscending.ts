const log = console.log;
export function isAscending(values: number[]): boolean {
  // your code here
  let i = 0;
  while (i < values.length - 1) {
    // values[i] < values[i+1] &&
    const a = values[i];
    const b = values[i + 1];
    if (a >= b) {
      return false;
    }
    i++;
  }
  return true;
}

// export function isAscending(values: number[]): boolean {
//   // your code here
//   const a = values.reduce((p: number, c: number, idx: number) => {
//     log("----------------------");
//     log("p: ", p);
//     log("c: ", c);
//     if (idx === 0) return c;
//     return p < c ? [...p, true] : [...p, false];
//   }, Number.MIN_VALUE);
//   return false;
// }

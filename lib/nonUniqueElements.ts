const log = console.log;
const isUnique = (val: number, arr: number[]): boolean => {
  return arr.filter((x) => x === val).length === 1;
};

export const nonUniqueElements = (data: number[]): number[] => {
  return data.filter((x, idx, arr) => !isUnique(x, arr));
};

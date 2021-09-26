/**
 *
 * @param { val } any
 * @returns boolean
 * @description Returns true for numbers & strings that are numbers. Returns false for all other values.
 */
export const isNumber = (val: any): boolean => {
  if (val === undefined) return false;
  if (val === null) return false;
  if (typeof val === "string") {
    if (val.trim() === "") return false;
  }
  const a = Number(val);
  if (isNaN(a)) return false;
  return typeof a === "number";
};

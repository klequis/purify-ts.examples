export const beginningZeros = (text: string): number => {
  const a = text.split("");
  let i = 0;
  while (a[i] === "0") {
    i++;
  }

  return i;
};

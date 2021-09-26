const log = console.log;
export function secondIndex(text: string, symbol: string): number | undefined {
  // your code here
  const a = text.indexOf(symbol);
  const b = text.indexOf(symbol, a + 1);
  return b === -1 ? undefined : b;
}

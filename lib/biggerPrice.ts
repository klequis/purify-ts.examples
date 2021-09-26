const log = console.log;

interface Stock {
  name: string;
  price: number;
}

export function biggerPrice(limit: number, data: Stock[]): Stock[] {
  // your code here
  const sortFn = (a: Stock, b: Stock) => (a.price > b.price ? -1 : 1);
  const a = data.sort(sortFn);
  return a.slice(0, limit);
}

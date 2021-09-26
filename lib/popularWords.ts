const log = console.log;

const getCount = (val: string, list: string[]): [string, number] => {
  const count = list.filter((x) => x === val).length;
  return [val, count];
};

export function popularWords(text: string, words: string[]) {
  const a = text
    .toLowerCase()
    .split(" ")
    .map((x) => {
      const l = x.replace("\n", " ").trim();
      return l.split(" ");
    });
  // const b = a.map((x) => x.split(" "));
  const b = a.flatMap((x) => x);
  const d = words.map((w) => getCount(w, b));
  const e = Object.fromEntries(d);
  return e;
}

/*
export function popularWords(text: string, words: string[]) {
  log("text: ", text);
  // your code here
  const a = text
    .toLowerCase()
    .split(" ")
    .map((x) => {
      return x.replace("\n", " ").trim();
    });
  log("a: ", a);
  const b = a.map((x) => x.split(" "));
  log("b: ", b);
  const c = b.flatMap((x) => x);
  log("c: ", c);
  const d = words.map((w) => getCount(w, c));
  log("d: ", d);
  const e = Object.fromEntries(d);
  log("e: ", e);
  return e;
}
*/

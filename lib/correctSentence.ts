const log = console.log;

const properCase = (word: string) => {
  const l = word.split("");
  const ltr1Cap = l[0].toUpperCase();
  const tail = l.slice(1, l.length);
  return [ltr1Cap, ...tail].join("");
};

const appendPeriod = (word: string) => {
  // return word.endsWith(".") ? word : `${word}.`;
  // log("word: ", `>${word}<`);
  const len = word.length;
  const lastLtr = word.substring(len - 1);
  return lastLtr === "." ? word : `${word}.`;
};

export function correctSentence(text: string): string {
  const a = text.split(", ");
  const first = properCase(a[0]);
  const second = appendPeriod(a[1]);
  const b = `${first}, ${second}`;
  log("b: ", b);
  return b;
}

const log = console.log;
export function allTheSame(elements: any[]): boolean {
  if ([0, 1].includes(elements.length)) return true;
  const val = elements[0];
  return elements.every((x) => x === val);
}

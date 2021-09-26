export function betweenMarkers(
  line: string,
  left: string,
  right: string
): string {
  // your code here
  const start = line.indexOf(left);
  const end = line.indexOf(right);
  return line.substring(start + 1, end);
}

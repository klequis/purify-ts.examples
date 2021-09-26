/*

 You are given a string and two markers (the initial and final). You have to find a substring enclosed between these two markers. But there are a few important conditions:

  1. The initial and final markers are always different.
  2. If there is no initial marker, then the first character should be considered the beginning of a string.
  3. If there is no final marker, then the last character should be considered the ending of a string.
  4. If the initial and final markers are missing then simply return the whole string.
  5. If the final marker comes before the initial marker, then return an empty string.


*/

const log = console.log;

const beginMarker = (text: string, begin: string): number => {
  const a = text.indexOf(begin); // + begin.length;
  return a !== -1 ? a + begin.length : 0;
};

const endMarker = (text: string, end: string): number => {
  const a = text.indexOf(end);
  return a !== -1 ? a : text.length;
};

export function betweenMarkers(
  text: string,
  begin: string,
  end: string
): string {
  // your code here
  const start = beginMarker(text, begin);
  const finish = endMarker(text, end);
  return start > finish ? "" : text.substring(start, finish);
}

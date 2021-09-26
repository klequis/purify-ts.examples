export const nearestValue = (values: number[], search: number) => {
  const a = values.map((v) => {
    return { val: v, diff: Math.abs(search - v) };
  });
  const b = a.reduce((prev, cur) => {
    // return prev.diff < cur.diff ? prev : cur;
    if (cur.diff < prev.diff) {
      return cur;
    } else if (cur.diff == prev.diff) {
      return cur.val < prev.val ? cur : prev;
    } else {
      return prev;
    }
  });
  return b.val;
};

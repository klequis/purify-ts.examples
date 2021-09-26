const remove = (start: number, count: number, list: any[]): any[] => {
  throw new Error("remove has not been tested.");
  var result = Array.prototype.slice.call(list, 0);
  result.splice(start, count);
  return result;
};

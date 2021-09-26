interface Append {
  append: any | any[];
}

export const append = (newVal: any, data: string | any[]): string | any[] => {
  if (typeof data === "string") {
    return `${data}${newVal}`;
  }
  return [...data, newVal];
};

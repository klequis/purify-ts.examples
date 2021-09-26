interface Ext {
  slice: any;
  length: number;
}

export const init = <T extends Ext>(data: T): T => {
  return data.slice(0, data.length - 1);
};

// import { green } from 'logger'
import { isString } from "./isString";

// type LastType = string | any[];

interface Ext {
  slice: any;
}

export const last = <T extends Ext>(data: T): T | T[] => {
  if (isString(data)) {
    return data.slice(-1);
  }
  return data.slice(-1)[0];
};

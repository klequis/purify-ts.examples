/*
    Variations
    // 1.cad
    // .aa
    // 1.
    // 1.aa.doc
    // .aa.doc
    
    Files without the extension should go before the files with one;

    1. { name: 'bla', ext: 'txt' }

    lastIdx === 0 -> '.' it is part of the file name
    lastIdx > 1 -> there is an ext
    lastIdx === -1 -> there is not ext

    ext can be : 3, 2, none, '.' but nothing after,

*/
import { getFileParts } from "./getFileParts";

const log = console.log;

export function sortByExt(files: string[]): string[] {
  // log(["z", "a", "", "d", "c"].sort((a, b) => (a > b ? 1 : -1)));
  const a = files.map((f) => getFileParts(f));
  const b = a.sort((a, b) => (a.ext < b.ext ? -1 : 0));
  return b.map((o) => `${o.name}${o.ext !== "" ? "." : ""}${o.ext}`);
}

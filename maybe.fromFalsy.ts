/*
    `Maybe.fromFalsy`
    Takes a value and returns Nothing if the value is falsy, otherwise 
    a Just is returned.
    Maybe.fromFalsy('') -> Nothing
    Maybe.fromFalsy(0) -> Nothing
    Maybe.fromFalsy(2).isJust() -> true

    Example
    - obj1 may not have obj2 || any other prop down the chain may be missing.
    - when expected prop does not exist Maybe.fromFalsy returns Nothing

*/

import { Maybe, Just, Nothing } from "purify-ts/Maybe";

const log = console.log;

interface Record {
  name: string;
  boolProperty?: boolean;
}

interface Obj2 {
  records: Record[];
}

interface Obj1 {
  obj2: Obj2;
}

const obj1: Obj1 = {
  obj2: {
    records: [
      {
        name: "a",
        // boolProperty: false,
      },
      {
        name: "b",
        // boolProperty: false,
      },
    ],
  },
};

const a = Maybe.fromFalsy(obj1?.obj2?.records).chainNullable((records) =>
  records.find((elem) => elem.boolProperty)
);

log("a", a === Nothing); // -> true

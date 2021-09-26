import { Either, Right, Left } from "purify-ts";

const log = console.log;

const isSix = (num: number): Either<string, number> => {
  return num === 6 ? Right(6) : Left("that isn't six");
};

const d = isSix(7);
log(
  "d: ",
  d.caseOf({
    Left: (x) => {
      console.log(x);
      return 0;
    },
    Right: (x: number) => x,
  })
);

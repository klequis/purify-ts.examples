/*
    Call it like this

    authFetch("http://localhost:3030/health").then((x) => log(x));
*/
import { Either, Right, Left } from "purify-ts";

const fn = (param: number): Either<string, string> => {
  if (param < 10) {
    return Right(`${param} is less than 10`);
  } else {
    return Left("number must be less than 10");
  }
};

export const eitherEx = () => {
  const x = [2, 11];
  x.forEach((val) => {
    const a = fn(val);
    a.ifRight((msg) => console.log(msg));
    a.ifLeft((msg) => console.log(msg));
  });
};

import { Maybe, Just, Nothing } from "purify-ts/Maybe";
const log = console.log;

const e = Maybe.mapMaybe((x) => (x > 1 ? Just(x) : Nothing), [1, 2, 3]);
log("e: ", e);

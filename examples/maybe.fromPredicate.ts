import { Maybe } from "purify-ts/Maybe";

const log = console.log;

/**
 *
 * @param {any} val
 * @returns val || Nothing
 * takes any value and returns it if the `typeof val` is "string"
 */
const hasType = (val: any): Maybe<any> =>
  Maybe.fromPredicate((x) => typeof x === "string", val);

const e = hasType("3");
log("e", e);

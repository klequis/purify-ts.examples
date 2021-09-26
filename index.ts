import { List } from "purify-ts/List";
import { Maybe, Just, Nothing } from "purify-ts/Maybe";
import { Either, Right, Left } from "purify-ts";
import { eitherEx } from "examples/either-ex";
import { authFetch } from "fetch-it";

const log = console.log;

const a = Maybe.fromFalsy(2).isJust();
log("a: ", a);

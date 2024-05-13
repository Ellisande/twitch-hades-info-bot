import { setWorldConstructor, BeforeAll } from "@cucumber/cucumber";
import * as sinon from "sinon";

const botMock = () => ({
  say: sinon.fake(),
});

const given = Symbol("given");
const when = Symbol("when");
const then = Symbol("then");
type Section = typeof given | typeof when | typeof then;

export class CustomWorld {
  [given]: { [key: string]: any } = {};
  [when]: { [key: string]: any } = {};
  [then]: { [key: string]: any } = {};
  mocks: { [key: string]: any };
  constructor() {
    this[given] = {};
    this[when] = {};
    this[then] = {};
    this.mocks = {
      bot: botMock(),
      user: sinon.fake(),
    };
  }

  setValue(
    storySection: Section,
    updateFunction: (
      old: CustomWorld[typeof storySection]
    ) => CustomWorld[typeof storySection]
  ) {
    this[storySection] = updateFunction(this[storySection]);
  }

  setGiven(
    updateFunction: (
      old: CustomWorld[typeof given]
    ) => CustomWorld[typeof given]
  ) {
    this.setValue(given, updateFunction);
  }

  setWhen(
    updateFunction: (old: CustomWorld[typeof when]) => CustomWorld[typeof when]
  ) {
    this.setValue(when, updateFunction);
  }

  setThen(
    updateFunction: (old: CustomWorld[typeof then]) => CustomWorld[typeof then]
  ) {
    this.setValue(then, updateFunction);
  }

  get given() {
    return { ...this[given] };
  }

  get when() {
    return { ...this[when] };
  }

  get then() {
    return { ...this[then] };
  }
}

setWorldConstructor(CustomWorld);

BeforeAll(function () {
  process.env.LOG_LEVEL = "error";
});

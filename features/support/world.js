const { setWorldConstructor } = require("cucumber");
const sinon = require("sinon");

const botMock = () => ({
  say: sinon.fake()
});

const given = Symbol("given");
const when = Symbol("when");
const then = Symbol("then");

class CustomWorld {
  constructor() {
    this[given] = {};
    this[when] = {};
    this[then] = {};
    this.mocks = {
      bot: botMock(),
      user: sinon.fake()
    };
  }

  setValue(storySection, updateFunction) {
    this[storySection] = updateFunction(this[storySection]);
  }

  setGiven(updateFunction) {
    this.setValue(given, updateFunction);
  }

  setWhen(updateFunction) {
    this.setValue(when, updateFunction);
  }

  setThen(updateFunction) {
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

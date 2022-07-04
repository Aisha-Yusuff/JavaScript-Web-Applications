class CounterModel {
  constructor() {
    this.counter = 0;
    console.log("hey");
    console.log("I'm hereeee");
  }

  getCounter() {
    return this.counter;
  }

  increment() {
    this.counter++;
  }
}

module.exports = CounterModel;

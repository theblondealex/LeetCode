type Counter = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

function createCounter(init: number): Counter {
  let val = init;
  return {
    increment: () => {
      val++;
      return val;
    },
    decrement: () => {
      val--;
      return val;
    },
    reset: () => {
      val = init;
      return val;
    },
  };
}

const counter = createCounter(5);
counter.increment(); // 6
console.log(counter);
counter.reset(); // 5
console.log(counter);
counter.decrement(); // 4
console.log(counter);

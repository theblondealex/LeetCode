function createCounter(n: number): () => number {
  let count = 0;
  return () => {
    const val = n + count;
    count++;
    return val;
  };
}

const counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

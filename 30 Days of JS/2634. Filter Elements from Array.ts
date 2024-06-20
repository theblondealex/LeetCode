type Fn = (n: number, i: number) => any;

function filter(arr: number[], fn: Fn): number[] {
  let i = 0;
  const result = [];
  for (const num of arr) if (fn(num, i++)) result.push(num);
  return result;
}

function greaterThan10(n: number) {
  return n > 10;
}

console.log(filter([0, 10, 20, 30], greaterThan10));

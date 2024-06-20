type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };

type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: number[], size: number): Obj[][] {
  const chunkedObj = [];
  for (let i = 0; i < arr.length; i += size) {
    chunkedObj.push(arr.slice(i, i + size));
  }
  return chunkedObj;
}

const output = chunk([8, 5, 3, 2, 6], 6);
console.log(output);

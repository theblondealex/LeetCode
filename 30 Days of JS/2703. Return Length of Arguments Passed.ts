type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };

function argumentsLength(...args: JSONValue[]): number {
  return args.length;
}

//or withour .length

function argumentsLengthNoLength(...args: JSONValue[]): number {
  let count = 0;
  while (args[count++] !== undefined) {}
  return count - 1;
}

/**
 * argumentsLength(1, 2, 3); // 3
 */

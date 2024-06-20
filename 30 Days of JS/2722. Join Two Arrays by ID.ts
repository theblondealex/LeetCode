type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type ArrayType = { id: number } & Record<string, JSONValue>;

function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
  const returnObj = {};
  for (let i = 0; i < arr1.length; i++) {
    returnObj[arr1[i].id] = arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    if (returnObj[arr2[i].id]) {
      for (const key in arr2[i]) {
        returnObj[arr2[i].id][key] = arr2[i][key];
      }
    } else {
      returnObj[arr2[i].id] = arr2[i];
    }
  }
  return Object.values(returnObj);
}

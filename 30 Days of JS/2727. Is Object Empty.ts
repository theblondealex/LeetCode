type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[];

function isEmpty(obj: Obj): boolean {
  return Boolean(Object.keys(obj).length === 0);
}

isEmpty({ x: 5, y: 42 });
isEmpty({});
isEmpty([null, false, 0]);

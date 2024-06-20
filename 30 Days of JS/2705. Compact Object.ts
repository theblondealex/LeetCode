type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

const compactObject = (obj) => {
  if (obj === null) return null;
  if (Array.isArray(obj)) return obj.filter(Boolean).map(compactObject);
  if (typeof obj !== "object") return obj;

  const compacted = {};
  for (const item in obj) {
    const val = compactObject(obj[item]);
    if (val) {
      compacted[item] = val;
    }
  }
  return compacted;
};

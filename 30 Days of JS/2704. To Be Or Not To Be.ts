type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
  return {
    toBe: (expected: any) => {
      if (expected === val) {
        return true;
      }
      throw new Error("Not Equal");
    },
    notToBe: (expected: any) => {
      if (expected !== val) {
        return true;
      }
      throw new Error("Equal");
    },
  };
}

console.log(expect(5).toBe(5));
expect(5).notToBe(5); // throws "Equal"

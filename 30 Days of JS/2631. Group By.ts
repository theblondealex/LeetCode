interface Array<T> {
  groupBy(fn: (item: T) => string): Record<string, T[]>;
}

Array.prototype.groupBy = function (fn) {
  const returnObj = {};
  for (const item of this) {
    const key = fn(item);
    if (returnObj[key]) {
      returnObj[key].push(item);
    } else {
      returnObj[key] = [item];
    }
  }
  return returnObj;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */

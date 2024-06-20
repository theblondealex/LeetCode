type Fn<T> = () => Promise<T>;

function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
  return new Promise((res, rej) => {
    const results: T[] = []; // Explicitly typing results as T[]
    let pending = functions.length;

    functions.forEach((func, i) => {
      func()
        .then((value) => {
          results[i] = value;
          pending--;
          if (pending === 0) {
            res(results);
          }
        })
        .catch((err) => {
          rej(err);
        });
    });
  });
}

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */

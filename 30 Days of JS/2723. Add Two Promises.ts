type P = Promise<number>;

const addTwoPromises = async (...a) => {
  return new Promise((res) =>
    Promise.all([...a]).then((r) => res(r.reduce((p, a) => p + a, 0)))
  );
};
/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */

type F = (x: number) => number;

//fn(x) = f(g(h(x))) to build need to do the functions from right of array to left with a pointer
function compose(functions: F[]): F {
  return (x) => {
    if (functions.length === 0) return x;
    let pointer = x;
    for (let i = functions.length - 1; i >= 0; i--) {
      pointer = functions[i](pointer);
    }
    return pointer;
  };
}

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

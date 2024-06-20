function createHelloWorld() {
  return (...args: any): string => "Hello World";
}

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */

const f = createHelloWorld();

console.log(f());

// Step 1: A fake "__esDecorate" mock 
function __esDecorate(target: any, decorators: Function[], kind: 'class' | 'method', key?: string) {
  if (kind === 'class') 
    for (const dec of decorators) {
      const result = dec(target);
      if (result) target = result;
    }
  return target;
}

// Step 2: A sample decorator
function logClass(value: any, context: { name: string; kind: string }) {
  console.log(`[Class Decorator] Applied to: ${context.name}`);
}

// Step 3: A sample method decorator
class Person {
  constructor(public name: string) {}

  greet(msg: string) {
    return `Hi ${this.name}, ${msg}`;
  }
}

// Manual expansion using your mock "__esDecorate"
let Person2 = class {
  constructor(public name: string) {}
  greet(msg: string) {
    return `Hi ${this.name}, ${msg}`;
  }
};
 
// Apply decorators manually
// @
Person2 = __esDecorate(Person2, [logClass], "class");

// Test
const p = new Person2("Rasel");
p.greet("welcome!");

🧠 Key fact why here we cant use @ 

The @ decorator syntax is not a runtime feature of JavaScript yet (it’s stage-3, part of TC39 decorators).
Node.js cannot execute @something unless:

you compile with TypeScript ("experimentalDecorators": true)

or use Babel / SWC with the decorators plugin enabled

So you cannot directly define or intercept @ syntax in pure runtime code —
because @ is parsed by the JavaScript parser, not the runtime engine.
You can’t “hook” or “polyfill” syntax at runtime in Node — it must already be valid JavaScript before execution.
// Property decorator (TC39)
function LogProperty(value: undefined, context: ClassFieldDecoratorContext) {
  return function (this: any, initialValue: any) {
    let val = initialValue;
    Object.defineProperty(this, context.name, {
      get() {
        console.log(`📖 Get → ${String(context.name)}:`, val);
        return val;
      },
      set(newVal) {
        console.log(`✏️  Set → ${String(context.name)}:`, newVal);
        val = newVal;
      },
      enumerable: true,
      configurable: true,
    });
  };
}

// Class decorator
function Logger(value: Function, context: ClassDecoratorContext) {
  console.log("Class created →", String(context.name));
}

// Method decorator
function LogMethod<T extends (...a: any[]) => any>(
  value: T,
  context: ClassMethodDecoratorContext
) {
  return function (this: any, ...args: Parameters<T>): ReturnType<T> {
    console.log(`➡️  ${String(context.name)} called with`, args);
    const out = value.apply(this, args);
    console.log(`⬅️  ${String(context.name)} returned`, out);
    return out;
  } as T;
}

@Logger
class Student {
  @LogProperty
  name = "Rasel";

  @LogMethod
  greet(msg: string) {
    return `Hi ${this.name}, ${msg}`;
  }
}

const s = new Student();
console.log(s.greet("welcome!"));
s.name = "Kawsar";
console.log(s.name);
// https://www.typescriptlang.org/docs/handbook/decorators.html
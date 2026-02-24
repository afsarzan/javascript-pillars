 export interface MasteryItem {
   cat: string;
   q: string;
   l: string;
   c: string;
 }
 
export const masteryData: MasteryItem[] = [
  { cat: "Scope", q: "Temporal Dead Zone", l: "Variables exist but are unreachable before declaration.", c: "console.log(x); // Error\nlet x = 5;" },
  { cat: "Scope", q: "Closures", l: "Functions 'remember' their birthplace scope.", c: "const add = (x) => (y) => x + y;\nconst addFive = add(5);\nconsole.log(addFive(3)); // 8" },
  { cat: "Scope", q: "Hoisting", l: "Function declarations move to top; vars move but stay undefined.", c: "sayHi(); // Works\nfunction sayHi() { console.log('Hi'); }" },

  { cat: "Scope", q: "Lexical Scope", l: "Scope chain is decided where code is written, not called.", c: "function outer() {\n  const x = 1;\n  function inner() { console.log(x); }\n  return inner;\n}" },
  { cat: "Scope", q: "Shadowing", l: "Inner vars can hide outer vars with the same name.", c: "let x = 1;\nfunction demo(){ let x = 2; console.log(x); } // 2" },

  { cat: "Async", q: "Event Loop (Micro vs Macro)", l: "Promises (Micro) always beat SetTimeout (Macro).", c: "setTimeout(()=>console.log('A'),0);\nPromise.resolve().then(()=>console.log('B'));\n// B then A" },
  { cat: "Async", q: "Async/Await", l: "Syntactic sugar for Promises, making code look synchronous.", c: "async function get() {\n  const res = await fetch(url);\n  return res.json();\n}" },
  { cat: "Async", q: "Promise.all vs allSettled", l: "all: fails if one fails. allSettled: waits for all regardless.", c: "Promise.all([p1, p2]).catch(err => ...);" },
  { cat: "Async", q: "Generators", l: "Functions that can be paused and resumed.", c: "function* gen() { yield 1; yield 2; }" },

  { cat: "Async", q: "Promise.race vs any", l: "race: first settled (even reject). any: first fulfilled or AggregateError.", c: "Promise.race([p1, p2]);\nPromise.any([p1, p2]);" },
  { cat: "Async", q: "Job Queue vs Call Stack", l: "Call stack runs sync; job queue lines up microtasks after each turn.", c: "queueMicrotask(() => console.log('micro')); // after current stack" },

  { cat: "Objects", q: "Prototype Chain", l: "Objects look up properties in their 'parent' objects.", c: "myObj.__proto__ === Parent.prototype" },
  { cat: "Objects", q: "this Keyword", l: "Value depends on *how* a function is called.", c: "obj.func(); // this is obj\nfunc(); // this is window/undefined" },
  { cat: "Objects", q: "Call, Apply, Bind", l: "Manually setting 'this' for a function.", c: "func.call(thisArg, arg1, arg2);\nfunc.apply(thisArg, [args]);" },
  { cat: "Objects", q: "New Keyword", l: "Creates an object, links prototype, sets this, returns it.", c: "const user = new User();" },
  { cat: "Objects", q: "Object.freeze vs Seal", l: "Freeze: No changes. Seal: Can change existing, no new props.", c: "Object.freeze(user);" },

  { cat: "Objects", q: "Object.create vs assign", l: "create: set prototype. assign: copy properties.", c: "const child = Object.create(parent);\nconst clone = Object.assign({}, obj);" },
  { cat: "Objects", q: "Classes & Extends", l: "Syntactic sugar over prototypes with cleaner inheritance.", c: "class A {}\nclass B extends A {}" },
  { cat: "Objects", q: "Getters & Setters", l: "Control property access like methods, use like fields.", c: "const user = { get full(){...}, set full(v){...} };" },
  { cat: "Objects", q: "Symbols & Hidden Keys", l: "Symbols create mostly-unique keys that don’t clash.", c: "const id = Symbol('id'); obj[id] = 123;" },

  { cat: "FP", q: "Pure Functions", l: "Same input = same output, no side effects.", c: "const add = (a, b) => a + b;" },
  { cat: "FP", q: "Currying", l: "Breaking a function into a series of single-argument calls.", c: "const f = a => b => c => a+b+c;" },
  { cat: "FP", q: "Higher-Order Functions", l: "Functions that take or return other functions.", c: "arr.map(x => x * 2);" },

  { cat: "FP", q: "Immutability", l: "Don't change data; return new copies instead.", c: "const next = [...state, item];" },
  { cat: "FP", q: "Memoization", l: "Cache results for same inputs to avoid recompute.", c: "const cache = {}; function fib(n){ if(cache[n]) return cache[n]; /* calc */ }" },
  { cat: "FP", q: "Compose & Pipe", l: "Chain functions left-to-right or right-to-left.", c: "const compose = (f,g) => x => f(g(x));" },

  { cat: "Logic", q: "Nullish Coalescing (??)", l: "Only defaults if null or undefined (keeps 0 and '').", c: "let x = 0 ?? 10; // x is 0" },
  { cat: "Logic", q: "Short-Circuiting", l: "Stop evaluating once the result is certain.", c: "isUser && showProfile();" },
  { cat: "Logic", q: "Strict Equality (===)", l: "Checks value AND type without coercion.", c: "5 === '5' // false" },
  { cat: "Logic", q: "Spread vs Rest", l: "Spread expands; Rest collects.", c: "...args // Rest in params\n{...obj} // Spread in literals" },

  { cat: "Logic", q: "Optional Chaining (?.)", l: "Safely walk nested props without crashing.", c: "const city = user?.address?.city;" },
  { cat: "Logic", q: "Destructuring", l: "Pick pieces from arrays/objects into variables.", c: "const { name, age } = user;\nconst [first] = list;" },
  { cat: "Logic", q: "Default Params", l: "Give function args fallback values.", c: "function greet(name = 'Guest'){ console.log(name); }" },

  { cat: "DOM", q: "Event Delegation", l: "Listen on parent for child events (better memory).", c: "parent.onclick = (e) => if(e.target.is('button'))" },
  { cat: "DOM", q: "Bubbling vs Capturing", l: "Bubbling: Inside -> Out. Capturing: Outside -> In.", c: "el.addEventListener('click', fn, true); // true = Capture" },

  { cat: "DOM", q: "Passive Listeners", l: "Tell browser you won’t call preventDefault for faster scroll.", c: "el.addEventListener('touchmove', onMove, { passive: true });" },
  { cat: "DOM", q: "requestAnimationFrame", l: "Schedule DOM work right before paint.", c: "requestAnimationFrame(() => box.style.left = '10px');" },

  { cat: "Performance", q: "Debouncing", l: "Wait for a 'pause' in action before firing.", c: "clearTimeout(timer);\ntimer = setTimeout(fn, 300);" },
  { cat: "Performance", q: "Throttling", l: "Fire once per time interval.", c: "if (!waiting) { fn(); waiting = true; ... }" },

  { cat: "Performance", q: "Lazy Loading", l: "Load code/resources only when needed.", c: "import('./heavy.js').then(m => m.run());" },
  { cat: "Performance", q: "Big O Intuition", l: "Know if your algo scales OK (O(n), O(n²), etc.).", c: "// Prefer single loops to nested where possible" },

  { cat: "Memory", q: "Shallow vs Deep Copy", l: "Shallow copies only top level; Deep copies everything.", c: "const deep = JSON.parse(JSON.stringify(obj));" },
  { cat: "Memory", q: "Memory Leaks", l: "Forgotten timers or global variables that stay in RAM.", c: "setInterval(() => { /* forgotten code */ }, 100);" },

  { cat: "Memory", q: "WeakMap & WeakSet", l: "Hold weak refs so GC can still clean keys.", c: "const cache = new WeakMap(); cache.set(obj, data);" },

  { cat: "Data", q: "Map vs Object", l: "Map is for key-value, any key type; remembers insertion order.", c: "const m = new Map([[1,'a']]);" },
  { cat: "Data", q: "Set & Uniqueness", l: "Set only keeps unique values.", c: "const uniq = [...new Set(arr)];" },

  { cat: "Meta", q: "IIFE", l: "Run a function immediately and create a private scope.", c: "(function(){ const secret = 42; })();" },
  { cat: "Meta", q: "Module Pattern", l: "Use closures to expose a tiny public API.", c: "const counter = (function(){ let x=0; return { inc:()=>++x }; })();" },
  { cat: "Meta", q: "Proxy & Reflect", l: "Intercept operations like get/set on objects.", c: "const p = new Proxy(obj, { get(t, k){ ... } });" }
];

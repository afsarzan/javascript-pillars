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
   { cat: "Async", q: "Event Loop (Micro vs Macro)", l: "Promises (Micro) always beat SetTimeout (Macro).", c: "setTimeout(()=>console.log('A'),0);\nPromise.resolve().then(()=>console.log('B'));\n// B then A" },
   { cat: "Async", q: "Async/Await", l: "Syntactic sugar for Promises, making code look synchronous.", c: "async function get() {\n  const res = await fetch(url);\n  return res.json();\n}" },
   { cat: "Async", q: "Promise.all vs allSettled", l: "all: fails if one fails. allSettled: waits for all regardless.", c: "Promise.all([p1, p2]).catch(err => ...);" },
   { cat: "Objects", q: "Prototype Chain", l: "Objects look up properties in their 'parent' objects.", c: "myObj.__proto__ === Parent.prototype" },
   { cat: "Objects", q: "this Keyword", l: "Value depends on *how* a function is called.", c: "obj.func(); // this is obj\nfunc(); // this is window/undefined" },
   { cat: "Objects", q: "Call, Apply, Bind", l: "Manually setting 'this' for a function.", c: "func.call(thisArg, arg1, arg2);\nfunc.apply(thisArg, [args]);" },
   { cat: "Objects", q: "New Keyword", l: "Creates an object, links prototype, sets this, returns it.", c: "const user = new User();" },
   { cat: "FP", q: "Pure Functions", l: "Same input = same output, no side effects.", c: "const add = (a, b) => a + b;" },
   { cat: "FP", q: "Currying", l: "Breaking a function into a series of single-argument calls.", c: "const f = a => b => c => a+b+c;" },
   { cat: "FP", q: "Higher-Order Functions", l: "Functions that take or return other functions.", c: "arr.map(x => x * 2);" },
   { cat: "Logic", q: "Nullish Coalescing (??)", l: "Only defaults if null or undefined (keeps 0 and '').", c: "let x = 0 ?? 10; // x is 0" },
   { cat: "Logic", q: "Short-Circuiting", l: "Stop evaluating once the result is certain.", c: "isUser && showProfile();" },
   { cat: "DOM", q: "Event Delegation", l: "Listen on parent for child events (better memory).", c: "parent.onclick = (e) => if(e.target.is('button'))" },
   { cat: "DOM", q: "Bubbling vs Capturing", l: "Bubbling: Inside -> Out. Capturing: Outside -> In.", c: "el.addEventListener('click', fn, true); // true = Capture" },
   { cat: "Performance", q: "Debouncing", l: "Wait for a 'pause' in action before firing.", c: "clearTimeout(timer);\ntimer = setTimeout(fn, 300);" },
   { cat: "Performance", q: "Throttling", l: "Fire once per time interval.", c: "if (!waiting) { fn(); waiting = true; ... }" },
   { cat: "Memory", q: "Shallow vs Deep Copy", l: "Shallow copies only top level; Deep copies everything.", c: "const deep = JSON.parse(JSON.stringify(obj));" },
   { cat: "Memory", q: "Memory Leaks", l: "Forgotten timers or global variables that stay in RAM.", c: "setInterval(() => { /* forgotten code */ }, 100);" },
   { cat: "Logic", q: "Strict Equality (===)", l: "Checks value AND type without coercion.", c: "5 === '5' // false" },
   { cat: "Objects", q: "Object.freeze vs Seal", l: "Freeze: No changes. Seal: Can change existing, no new props.", c: "Object.freeze(user);" },
   { cat: "Async", q: "Generators", l: "Functions that can be paused and resumed.", c: "function* gen() { yield 1; yield 2; }" },
   { cat: "Logic", q: "Spread vs Rest", l: "Spread expands; Rest collects.", c: "...args // Rest in params\n{...obj} // Spread in literals" }
 ];
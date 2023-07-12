// any is a type that disables type checking and effectively allows all types to be used. No Type Safety
let name: any = "suriya"
name = 24
console.log(name) // no error

/* unknown is similar to any but safer alternative to any.
   unknown is best used when you don't know the type of data being typed. To add a type later, you'll need to cast it.
*/
let variable: any = 3;
console.log(variable.foo())  // no type error but run time shows error 

let variable2: unknown = 3;
// console.log(variable2.foo())   type error by this way unknown provides safety than any


// undefined  and null

let variableUndefined: undefined = undefined;
let variableNull: null = null;


// Function returning undefined
function doSomething(): void {
    // ...
}

// Function returning null
function getSomething(): string | null {
    // ...
    return null;
}

export { }
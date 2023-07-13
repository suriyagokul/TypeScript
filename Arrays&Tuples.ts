// Type Inference  TypeScript can infer the type of an array if it has values. implicit assignment array type
const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error

// Ex 2
const details2 = [24, "suriya"]   // inferred to type number || string

details2.push(30)
details2.push("sai")
// details.push(true) Argument of type 'boolean' is not assignable to parameter of type 'string | number'


const names: string[] = []  // we have to provide only string values
names.push("rohit")
// names.push(20) type error

// readonly array  The readonly keyword can prevent arrays from being changed.
const employees: readonly string[] = ["emp1", "emp2"]
// employees.push("emp3") error It's readonly array we can't change 

// union operator | we can give number or string in an array in any order
const details1: (number | string)[] = [1, "suriya"]

// Tuples [string, number]
const details3: [string, number] = ["rohit", 20] // pass in same order
details3.push(23) // no error. but when we initialize as ["rohit", 20 ,20] it gives error



export { }
const names: string[] = []

names.push("rohit")

names.push(20) // type error


// readonly array  The readonly keyword can prevent arrays from being changed.
const employees: readonly string[] = ["emp1", "emp2"]
employees.push("emp3") // error It's readonly array we can't change 


// Type Inference  TypeScript can infer the type of an array if it has values
const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error

// Ex 2
const details = [24, "suriya"]   // inferred to type number || string

details.push(30)
details.push("sai")

details.push(true) // Argument of type 'boolean' is not assignable to parameter of type 'string | number'

interface Parent {
    skinTone: string,
    address: string,
    Land: boolean
    getProperties(): string
}

const person: Parent = {
    skinTone: "white",
    address: "Hyderabad",
    Land: false,
    getProperties: () => {
        return "Apartment, Sites"
    }
}

console.log(person)


// Re-Opening the Interface
interface User {
    name: string,
    age: number,
    Hobbies?: string
}

// reopening the interface means adding new properties to interface which can't done by typealiases.
interface User {
    status: boolean  // adding status property to User without touching to original interface
}

const user: User = { name: "suriya", age: 20, status: true }


// Inheritance

interface Child extends Parent {
    readonly _id?: number
    properties: boolean,
}

const children: Child = {
    ...person,   // all the parent properties
    properties: false,
}

console.log(children)


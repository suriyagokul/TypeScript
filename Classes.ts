class User {
    name: string;
    email: string
    constructor(name: string, email: string) {
        this.name = name,
            this.email = email
    }
}

let user = new User("pant", "pant@gmail.com")
console.log(user.name, user.email)

// Inheritance
class Red extends User {
    age: number
    constructor(name: string, email: string, age: number) {
        super(name, email)
        this.age = age
    }
}


let red = new Red("Jaiswal", "Jaiswal@gmail.com", 24)
console.log(red.name, red.email, red.age)
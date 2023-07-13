type User = string

const user: User = "suriya"  // here User is alias name for string 
const add: User = "sad"

type User2 = string | number
const user2: User2 = 20
const user3: User2 = "sai"

type Address = {
    City: string,
    Village: string,
    Hno: number
}

function Employee(address: Address) {  // we must pass 3 parameters because it's Address type which contains 3 properties.
    console.log(address)
}

Employee({ City: "Hyd", Village: "Hafizpet", Hno: 131 })
// Employee({ City: "Hyd", Village: "Hafizpet" }) Error If we don't pass any one of the property gives error 


function Employee2(address: Address): Address {  // function is type Address so we must have to return those 3 properties in the Address
    return { City: address.City, Village: address.Village, Hno: address.Hno }
}

console.log(Employee2({ City: "Vijayawada", Village: "Ramavarappadu", Hno: 179 }))

type fruits = string[]
let arr: fruits = ["Apple", "Mango"]

console.log(arr)
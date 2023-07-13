/* Type aliases and interfaces are very similar, and in many cases you can choose between them freely. Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties
*/

// reopening will work in interface not in type Ex:
interface Random {
    no: number
}

interface Random {
    empid: number
}

// Now in interface we have two properties no and empid
const rand: Random = { no: 10, empid: 234 }
console.log(rand)  // o/p: { no: 10, empid: 234 }

type RandomType = {
    floorNo: number
}

// type RandomType = {
//     ceilNo: number
// }  ERROR ADDING PROPERTIES NOT ALLOWED IN TYPE


// WE CAN ACHIEVE INHERITANCE IN CASE OF INHERITANCE AS WELL AS TYPE EX:

// Using Interface
interface Animal {
    name: string
}
interface Bear extends Animal {
    honey: boolean
}


// Using Type
type Animal1 = {
    name: string
}
type Lion = Animal1 & {
    forelegsPower: string
}
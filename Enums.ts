// by default enum gives value for first property as 0 and then auto increments to 1,2,3...
enum Address {
    village,
    street,
    hno,
}

console.log(Address.village, Address.street, Address.hno) //o/p: 0 1 2

enum Address2 {
    village = 20,
    street,        // auto increments to 21
    hno,           // auto increments to 22
}

console.log(Address2.village, Address2.street, Address2.hno) //o/p: 20 21 22


enum Address3 {
    village = "Khandavalli",
    street = "xyz",
    hno = 20,
}

/* If you want to change enum values gives error
    
    Address3.hno="1-132"  error Cannot assign to 'hno' because it is a read-only property
*/


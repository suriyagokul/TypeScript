// by default access modifier in typescirpt is public.


class Employee {
    photoURL: string // by default it is public
    public age: number
    private paymentId: number
    protected paymentAmount: number
    constructor(photoURL: string, age: number) {
        this.photoURL = photoURL,
            this.age = age,
            this.paymentId = 1222
        this.paymentAmount = 2000
    }

    fetching = () => {
        console.log(this.paymentId)
    }
}
let emp = new Employee("htpps://img1.png", 24)
emp.fetching() // o/p: 1222 we can access private variable using public method of that class
// emp.paymentAmount  error
// emp.paymentId error
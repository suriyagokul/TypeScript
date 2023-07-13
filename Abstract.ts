// class SuperHeros {
//     constructor(public powers: string[]) {  // It's like powers:string, this.powers = powers
//     }
//     getHeros() {
//         console.log(this.powers)
//     }
// }

// let obj = new SuperHeros(["Shield", "Hammer"])
// obj.getHeros() o/p; [ 'Shield', 'Hammer' ]


// ABSTRACT CLASS CONTAINS ABSTRACT METHODS and concrete methods.. Whereas interface contains public and abstract methods only. 
// An ABSTRACT CLASS CAN IMPLEMENT ONE OR MORE INTERFACES

interface Actors {
    getTotalMovies(): number
}

abstract class SuperHeros implements Actors {
    constructor(public powers: string[]) {  // It's like powers:string, this.powers = powers
    }
    getTotalMovies(): number {      // implementing interface 
        return 20
    }
    getLatestMovie(): void { }  // public abstract method
}

// let obj = new SuperHeros(["Shield", "Hammer"]) ERROR FOR ABSTRACT CLASS WE MUST NOT CREATE OBJECT. INSTEAD WE CRETE CHILD OF IT AND CREATE NEW OBJECT TO IT..
// obj.getHeros()

// An abstract class can implement one or more interface.
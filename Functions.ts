// By default function return type is void. we can also explicit give void type
function superHeros(): void {
    console.log("I am void type! Cannot Return any Value!")
}

//function that never returns or always throws an exception then we can use the never type on that function.
function superHeros2(): never {
    for (; ;) { }   // an infinite loop is example of never
}

function superHeros3(): string {
    return "Returning String"
}

function superHeros4(): number {
    return 20
}

function superHeros5(): { name: string, age: number } {
    return { name: "virat", age: 20 }
}

type PlayersDetails = {
    name: string,
    centuries: number
}

function IndianPlayers(): PlayersDetails {
    return { name: "Hitman", centuries: 40 }
}


console.log(IndianPlayers())
superHeros()
superHeros3()
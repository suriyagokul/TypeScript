let number: unknown = 'hello'

console.log((number as string).length) // 5


console.log((<string>number).indexOf("o")) // 4

// This type of casting will not work with TSX, such as when working on React files.

// Force casting To override type errors that TypeScript may throw when casting, first cast to unknown, then to the target type.

console.log(((number as unknown) as string).toUpperCase())

export { }
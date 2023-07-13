// Instead of using (string | number | string[] ...) we using Type T,x,y anything.More Generic

// If we pass number then it is number Type, If we pass string then it is string type
function pick<T>(data: T) {
    console.log(data)
}

pick(29)
pick("dsjb")
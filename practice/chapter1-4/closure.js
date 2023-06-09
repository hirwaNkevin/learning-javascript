// a closure is a function that is able to reference bindings of local scopes around it.
// closure is the feature of being able to reference a specific instance of a local binding in an enclosing scope.

let myClosure = function (toy){
    return color => color + toy;
}

let aCar = myClosure('car');
aCar('green ');
console.log(aCar("blue "))
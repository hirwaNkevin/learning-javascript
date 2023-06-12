function flatten(array) {
    return array.reduce(
        (flatArray, innerArray) => {
            for (let item of innerArray) {
                flatArray.push(item);// concat is not working
            }
            return flatArray
        }, []
    );
}

// a higher order function smthng like a for loop
function loop(value, test, update, body) {
    let allowed = false;
    do {
        if (test(value)) {
            allowed = true;
            body(value);
        }
        else { return undefined }

        value = update(value);
    } while (allowed)
}

function every_SomeVersion(array,predicate){
    return !array.some(predicate);
}
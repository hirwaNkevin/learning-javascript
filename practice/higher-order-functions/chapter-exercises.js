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
            console.log(allowed);
            body(value);
        }
        else { return undefined }

        value = update(value);
        console.log(value);
    } while (allowed)
}
loop(7, (value) => value > 0, (value) => { value--; }, (value) => { console.log(value) });
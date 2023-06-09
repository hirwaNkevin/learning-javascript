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

function every_LoopVersion(array,predicate){
    let result = true;
    for (let item of array) {
        if(predicate(item)){result = result && true;}
        else{result = result && false;}
    }
    return result;
}

function dominantWritingDirection(text) {
    let scripts = countBy(text, (char) => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.direction : 'none';
    }).filter(({ direction }) => direction != "none");

    let total = scripts.reduce((n, { count }) => n + count, 0);
    if (total == 0) return 'no scripts found';

    return scripts.reduce((a, b) => a.count > b.count ? a : b);

}
// console.log(dominantWritingDirection('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
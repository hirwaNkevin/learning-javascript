let replaceString = function (word = "word", letter = "o", character = "*") {
    return (word.split(letter).join(character));

}

function repeat(nberOfTimes, what) {
    let repeated = [];
    for (let i = 0; i < nberOfTimes; i++) {
        repeated.push(what());
    }
    return repeated;
}

function scramble(name) {
    let replaceString = function (word = "word", letter = "o", character = "*") {
        return (word.split(letter).join(character));

    }
    return replaceString(name, 'a', 'u');
}
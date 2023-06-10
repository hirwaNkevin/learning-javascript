function getCharCodes(string) {
    let charCodes = [];
for(let char of string){charCodes.push(char.codePointAt(0))}
    return charCodes;
}
let size = 6;
let string = "";
for (let i=0;i<size;i++){
    for(let j=0;j<(size/2);j++){
        if((i%2)===0){string += "# ";}
        else {string+=" #"}
    }
    string += "\n";
}
console.log(string);
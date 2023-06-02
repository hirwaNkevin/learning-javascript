let printPyramid = function (size=7, character="^"){
    let out = "";
for (let i=0;i<size;i++){
    let padCount = 0;
    let padding = "";
    while(padCount<(size-i)){
        
        padding += " ";
        padCount++;
    }
    
    if(i==0){
        out+=`${character}`;
        console.log(padding+out);
    }
    else{
        out+=` ${character}`;
        console.log(padding+out);
    }
}
}

printPyramid(3,"#")
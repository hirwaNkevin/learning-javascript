function flatten(array){
    return array.reduce(
        (flatArray,innerArray)=>{
            for (let item of innerArray) {
                flatArray.push(item);// concat is not working
            }
            return flatArray
        },[]
    );
}
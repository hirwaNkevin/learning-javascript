let tries = 3;
let guess = 3;
let num = null;
if(!Number.isNaN(num)){
    for(let count = 0; count < tries; count = count + 1) {
       num = Number(prompt("I am thinking of a number. If you can guess it I'll reward you."))
        if(num === guess){
        console.log(`You guessed right here is your reward 🍕`);
            break;
    } else if(num > guess){
        console.log(`Too high`);
            console.log(count);
    } else if(num < guess){
        console.log(`Too low.`);
            console.log(count);
    }  
        count === tries - 1 ? console.log("Out of Tries") : null;
    }
} 
else {
    console.log(`That's not a number`);
}

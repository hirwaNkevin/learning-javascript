let tries = 3;
let guess = 3;
let num = null;
if(!Number.isNaN(num)){
    do {
       num = Number(prompt("I am thinking of a number. If you can guess it I'll reward you."))
        if(num === guess){
        console.log(`You guessed right here is your reward 🍕`);
            break;
    } else if(num > guess){
        console.log(`Too high`);
            tries = tries - 1;
    } else if(num < guess){
        console.log(`Too low.`);
            tries = tries - 1;
    }    
    } while (tries > 0)
    tries===0?console.log("Out of Tries"):null;
} 
else {
    console.log(`That's not a number`);
}
VM499:14 Too low.
VM499:14 Too low.
VM499:14 Too low.
VM499:18 Out of Tries
undefined

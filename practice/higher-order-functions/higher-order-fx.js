// What's a higher-order function? One that takes as parameters and returns as other functions as values
function toThePowerOf(n) {
    return (m)=>m**n;
}
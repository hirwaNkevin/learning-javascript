// methods
let cow = { position: [0, 0], walk };

function walk(distance, direction) {
    if (direction === "y"&&distance<0) {
        this.position[1] <= 0 ? this.position : this.position[1] += distance;
        return this.position;
    }
    else if (direction === "x") {
        this.position[0] += distance;
        return this.position
    }
    else {
        this.position[1] += distance;
        return this.position;
    }
}

// prototypes
let animal = {position:[0,0],walk,sound:(sound)=>sound};
let dog = Object.create(animal);
dog.kind = 'Dog';
dog.walk(1);

// Classes
function Dog(breed) {
    this.breed = breed;
}

Dog.prototype = Object.create(animal);

let dog4 = new Dog("Boa bull");
// dog4.breed returns > 'Boa bull'
let dog3 = new Dog("German shepherd");
dog3.sound('BARK!'); // 'BARK!'
dog3.walk(3,'y'); // '[0,3]'

// Maps

let children=[
    {name: 'kev',age:2},
    {name: 'Henry',age:5},
    {name: 'Kate',age:1},
    {name: 'Linda',age:7}
];

let admittance = new Map();
admittance.set(children[0],true);
admittance.set(children[1],true);
admittance.set(children[2],true);
admittance.set(children[3],true);
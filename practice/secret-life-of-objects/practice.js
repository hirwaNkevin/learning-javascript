// methods
let cow = { position: [0, 0], walk };

function walk(distance, direction) {
    if (direction === "y") {
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
let animal = { kind: 'animal', position: [0, 0], sound(sound) { return sound }, walk };
let dog = Object.create(animal);
dog.kind = 'Dog';
dog.walk(1);

// Classes
function Dog(breed) {
    this.breed = breed;
}

Dog.prototype.sound = function (sound) {
    return sound;
}

let dog4 = new Dog("Boa bull");
// dog4.breed returns > 'Boa bull'
let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
};

let descriptions = {
    work: "Went to work",
    "touched tree": "Touched a tree"
};

descriptions.pizza = "Ate pizza";
console.log(descriptions.pizza);

descriptions.unwantedProperty = "unwanted";
console.log(descriptions.unwantedProperty);
delete descriptions.unwantedProperty;
console.log(descriptions.unwantedProperty);
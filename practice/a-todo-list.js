let toDo = [];
function remember(task){
    toDo.push(task);
}

function getTask(){
    return toDo.shift();
}

function rememberUgent(task){
    toDo.unshift(task);
}

remember("Kids");
remember("Groceries");
remember("Jogging");
rememberUgent("Report at work");
getTask();
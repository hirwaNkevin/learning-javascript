
let cow = {position: [0,0],walk};

function walk(distance,direction) {
    if(direction==="y"){
        this.position[1]<=0 ? this.position : this.position[1]+=distance;
        return this.position;
    }
    else if(direction==="x"){
        this.position[0]+=distance;
        return this.position
    }
    else {
        this.position[1]+=distance;
        return this.position;
    }
}
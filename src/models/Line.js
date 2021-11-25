import React from 'react';

class Line {


    constructor(p){
        this.p = p;
        this.x1 = 0;
        this.y1 = 0;
        this.x2 = 0;
        this.y2 = 0;
    }

    display(){
        // this.x1 = x1;
        // this.y1 = y1;
        // this.x2 = x2;
        // this.y2 = y2;
        console.log("X1: "+this.x1+" Y1: "+this.y1);
        this.p.line(this.x1, this.y1, this.x2, this.y2);
    }

    setX1(x1){
        this.x1 = x1;
    }
    
};

export default Line;
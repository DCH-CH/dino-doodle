import React from 'react';


class Ellipse {


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
        //console.log();
        this.p.ellipse(this.x1, this.y1, this.x2, this.y2);
    }
    
};

export default Ellipse;
class Block {
    constructor(x,y,width,height) {
        var options = {
            isStatic : true
        }
        this.box=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.box);
        this.width=width;
        this.height=height;
    }

    display() {
        var pos = this.box.position;
        push();
        translate(pos.x,pos.y);
        fill("red");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
}
}
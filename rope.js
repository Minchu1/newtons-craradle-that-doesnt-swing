class Rope{
    constructor(bodyA,xOffset,bodyB){
        var options = {
            bodyA:bodyA,
            pointA:{x:xOffset,y:0},
            bodyB:bodyB,
            stiffness:0.04,
            length: 10


        }
        this.chain=Constraint.create(options);
        this.xOffset=xOffset;
        World.add(world,this.chain);

       
    }
    display(){
        var pointA= this.chain.bodyA.position;
        var pointB= this.chain.bodyB.position;
        strokeWeight(4);
        stroke("pink");
        line(pointA.x+this.xOffset,pointA.y,pointB.x,pointB.y);

    }
}

class SlingShot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.01,
            length:31
        }
        this.sling =Constraint.create(options)
        World.add(world,this.sling)
    }
    fly(){
        this.sling.bodyA=null;
    }
    display(){
        if(this.sling.bodyA){
            var pointA=this.sling.bodyA.position
            var pointB=this.sling.pointB

            push();
            strokeWeight(3)
            fill("black")
            line(pointA.x,pointA.y, pointB.x,pointB.y)
            pop();
        }
        
    }
}
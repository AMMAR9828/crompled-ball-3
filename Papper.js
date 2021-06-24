class Papper {
    constructor(){
        var options={
            isStatic:false,
            'restitution':0.5,
            'friction':0.2,
            'density':0.5
        }
        this.body= Bodies.circle(40,5,20,options)
        this.radius= 20
        this.image=loadImage("paper.png")

        World.add(world,this.body);
    }
    display(){
        var pos= this.body.position
         
        push()
        imageMode(RADIUS)
        translate(pos.x,pos.y,this.body,this.radius)
        //fill("green")
        //stroke("red")
        image(this.image,0,0,4*this.radius,4*this.radius);
        pop()
    }
};
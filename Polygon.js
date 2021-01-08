class Polygon{
    constructor(x,y,r){
        var options={
            density:1,
            friction:1,
            restitution:0.3
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("polygon.png")
        this.body=Bodies.circle(this.x,this.y,this.r,options)
        World.add(world,this.body)
    }
    display(){
       
        push();
       
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.r/2,this.r/2)
        pop();
    }
}

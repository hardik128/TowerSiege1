class Box{
    constructor(x,y,width,height){
        var options={
            density:0.8,
            friction:1,
            restitution:0.5
        }     
        this.width=width;
        this.height=height;
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        this.body=Bodies.rectangle(x,y,this.width,this.height,options)
        World.add(world,this.body)
    }
    display(){
       
        push();
        fill(this.color)
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
        pop();
    }
}
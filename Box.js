class Box{
    constructor(x,y,width,height){
        var options={
            density:1,
            friction:1,
            restitution:0.5
        }     
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options)
        World.add(world,this.body)
    }
    display(){
       
        push();
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
        pop();
    }
}
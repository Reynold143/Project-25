class Paper{
    constructor(x,y){
     var options= {
         isStatic: false,
         restitution:0.3,
         friction:0.5,
         density:1.2
     }    
     this.body= Bodies.circle(x,y,20,options)
     this.image = loadImage("paper.png")
     World.add(world,this.body)
    }
    display(){
        var pos =this.body.position
        imageMode(RADIUS)
        image(pos.x,pos.y,20,20);
        //ellipseMode(RADIUS)
        //fill("pink")
    
        //ellipse(pos.x,pos.y,20,20);
    }
}
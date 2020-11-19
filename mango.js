class Mango {
  constructor(x, y, r) {
    var options = {
        isStatic: false,
        'restitution':0,
        'friction':1.0
        
    }
   this.x=x
   this.y=y
    this.r=60

   

    this.body = Bodies.circle(this.x, this.y, 60/2, options);
    this.image=loadImage("images/mango.png")
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    //var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
   // rotate(angle);
   imageMode(CENTER);
    fill(255);
  image(this.image,0, 0, this.r, this.r);
    pop();
  }
};

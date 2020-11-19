class Stone {
    constructor(x, y, r) {
      var options = {
          isStatic: true,
          'restitution':0,
          'friction':1,
          'density':1.2
      }
     this.x=x
     this.y=y
      this.r=80

      this.body = Bodies.circle(this.x, this.y, this.r/2, options);
      this.image=loadImage("images/stone.png")
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
       //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
     // rotate(angle);
      imageMode(CENTER);
      fill(255);
      image(this.image,0, 0, this.r, this.r);
      pop();
    }
  };
  
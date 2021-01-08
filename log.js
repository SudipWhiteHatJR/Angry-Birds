class Log {
    constructor(x, y,height,angle) {
      var options = {
          'restitution':0.8,
          'friction':2,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 15, height, options);
      Body.setAngle(this.body,angle);
      this.width = 15;
      this.height = height;
      
      World.add(Sudipworld, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      angleMode(RADIANS);
      fill("yellow");
      rect(0, 0, this.width, this.height);
      pop();
    }
  }
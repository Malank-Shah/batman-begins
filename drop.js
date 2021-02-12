class drop {
  constructor(x, y) {
    var options = {
      restitution: 0.1,
      friction: 0.1,
      density: 4,
    };
    this.body = Bodies.circle(x, y, 8, options);
    this.radius = 8;
    World.add(world, this.body);
  }

  changePosition() {
    if (this.body.position.y > height + 500) {
      Matter.Body.setPosition(this.body, {
        x: random(0, 500),
        y: random(0, 400),
      });
    }
  }

  display() {
    
    
    fill("blue");
    ellipseMode(CENTER);
    ellipse(
      this.body.position.x,
      this.body.position.y,
      this.radius,
      this.radius
    );
  }
}

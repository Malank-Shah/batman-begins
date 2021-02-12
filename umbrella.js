class umbrella {
  constructor(x, y, width) {
    var options = {
      isStatic: true,
    };
    this.body = Bodies.circle(x, y, width - 50, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display() {
 
  }
}

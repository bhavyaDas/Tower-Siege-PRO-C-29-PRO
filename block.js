///////////////////////////Code Started//////////////////////////////

// Made a class block in js file with name here given as Block
class Block {

  //Used to constructor to construct the object
  constructor(x, y, width, height) {

    //Made a rectangular body inside this.body
    this.body = Bodies.rectangle(x, y, width, height);

    //Set value this.width as equal width 
    this.width = width;

    //Set value this.height as equal to height
    this.height = height;

    //Added this.body to world
    World.add(world, this.body);

  }

  //Display the object using display function
  display() {

    //Variable (angle) is equal to this.body ' s angle
    var angle = this.body.angle;

    //Variable (pos) is equal to this.body ' s position
    var pos = this.body.position;

    // Started the implementation of steps here
    push();

    //Translated this. body 's X position and Y also//
    translate(pos.x, pos.y);

    //Rotated the angle of the figure
    rotate(angle);

    //rect Mode is set as CENTER
    rectMode(CENTER);

    //Displayed physical object in rectangular shape
    rect(0, 0, this.width, this.height);

    //Stopped the implementation of steps here 
    pop();

  }

}

///////////////////////////Code Ended//////////////////////////////


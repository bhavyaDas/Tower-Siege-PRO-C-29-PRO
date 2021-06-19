///////////////////////////Code Started//////////////////////////////

// Made a class polygon in js file with name here given as Polygon
class Polygon {

  //Used to constructor to construct the object  
  constructor(x, y, radius) {

    //Created a variable options and set it's  values 
    var options = {

      //Object is  not static of this class  
      isStatic: false

    }

    //Made a circular body inside this.body
    this.body = Bodies.circle(x, y, radius, options);

    //Set value this.radius as equal radius
    this.radius = radius

    //Loaded an image inside this.image
    this.image = loadImage("polygon.png")

    //Added this.body to image
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

    //Translated this. body 's X position and Y also
    translate(pos.x, pos.y);

    //Rotated the angle of the figure
    rotate(angle);

    //Displayed the object as it has image in it
    image(this.image, 0, 0, this.radius, this.radius);

    //Stopped the implementation of steps here
    pop();

  }

}

  ///////////////////////////Code Ended//////////////////////////////
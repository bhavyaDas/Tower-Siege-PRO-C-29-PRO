///////////////////////////Code Started//////////////////////////////

// Made a class slingShot in js file with name here given as SlingShot
class SlingShot {

    //Used to constructor to construct the object  
    constructor(bodyA, pointB) {

        //Created a variable options and set it's  values
        var options = {

            //Set bodyA as bodyA only
            bodyA: bodyA,

            //Set poinB as pointB only
            pointB: pointB,

            //Set stiffness as 0.04 units
            stiffness: 0.04,

            //Set length as 20 units
            length: 20

        }

        //this.pointB value is set as pointB
        this.pointB = pointB

        //Created constraint through options of this.sling
        this.sling = Constraint.create(options);

        //Added this.sling to World
        World.add(world, this.sling);
    }

    //Created fly function
    fly() {

        //Set this.sling ' s body A to be null
        this.sling.bodyA = null;

    }

    //Display the object using display function
    display() {

        //Set outline weightage as 9 pixels here
        strokeWeight(9);

        //Stroke color as set 64,228,220 here
        stroke(64, 228, 220)

        //Put a if condition  ;the bodyA is there then what should happen
        if (this.sling.bodyA) {

            //pointA stores this.sling ' s position
            var pointA = this.sling.bodyA.position;

            //pointB stores this.pointB 's position
            var pointB = this.pointB;

        }

    }

}

///////////////////////////////Code Ended//////////////////////////////////
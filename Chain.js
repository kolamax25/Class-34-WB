class Chain{

    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 100,
            length: 100
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        push()

        strokeWeight(5)
        fill(70, 87, 96)
        line(pointA.x, pointA.y, pointB.x, pointB.y)
        pop()
    }

}
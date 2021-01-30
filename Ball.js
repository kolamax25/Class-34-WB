class Ball{

    constructor(x, y, r){

        var options = {

            'friction': 10,
            'density' : 50
        }

        this.body = Bodies.circle(x, y, r, options);
        this.r = r
        World.add(world, this.body);
    }

    display(){

        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill(70, 87, 96)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);
        pop();
    }
}
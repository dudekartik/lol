class Bob
{
    constructor(x,y,r)
    {
        var options={
            isStatic:false,
            restitution:0.9,
            friction:0.2,
            density:0.3
            

        }

        this.r=r;
        this.body=Bodies.circle(x,y,r,options);
        World.add(world,this.body);

    }
    display()
    {
    var paperpos=this.body.position;

    push()
    ellipseMode(RADIUS);
    strokeWeight(3);
    fill("grey");
    ellipse(paperpos.x,paperpos.y,this.r,this.r);
    pop()

    }
    
}
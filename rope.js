class Ropec{

    constructor(body1,body2, offsetX,offsetY){

      this.offsetX=offsetX;
      this.offsetY=offsetY;

    var options={
      bodyA:body1,
      bodyB:body2,
      pointB:{x:this.offsetX,y:this.offsetY}
    }
    this.rope=Matter.Constraint.create(options);
    World.add(world,this.rope);
}
display(){
  var anchorx=this.rope.bodyB.position.x+this.offsetX
  var anchory=this.rope.bodyB.position.y+this.offsetY
    line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,anchorx,anchory);
}
}
class SlingShot{
    constructor(point1,body2)
    {
        var options=
        {
          pointA:point1,
          bodyB:body2,
          length:10,
          stiffness:0.04
        }
        this.sling=Constraint.create(options)
        World.add(world,this.sling)
    }
    fly()
    {
        this.sling.bodyB=null
    }
    attach(body)
    {
        this.sling.bodyB=body
    }


    display()
    {
        if(this.sling.bodyB!==null)
        {

       
        var pointA =this.sling.pointA
        var pointB =this.sling.bodyB.position
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        }
    }
}
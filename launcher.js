class launcher{
    constructor(bodyA,PointB){
        var op={
            lenght:10,
            stiffness:0.05,
            bodyA:bodyA,
            pointB:PointB
        }
        this.pointB=PointB
        this.launcherobject=Constraint.create(op)
        World.add(world,this.launcherobject)
    }
        display(){
            strokeWeight(3)
            if(this.launcherobject.bodyA){
            line(this.launcherobject.bodyA.position.x,this.launcherobject.bodyA.position.y,this.pointB.x,this.pointB.y)
             }
        }
        
        fly(){
        this.launcherobject.bodyA=null
      }
      attach(bodyA){
          this.launcherobject.bodyA=bodyA
      }
}
class Launcher{
constructor(bodyA,pointB) {
    var option = {
        bodyA:bodyA,pointB:pointB,stiffness:0.04,
        length: 1

     }
this.launch = Matter.Constraint.create(option)
this.pointB = pointB
World.add(world,this.launch)
}
fly(){
this.launch.bodyA=null

}
attach(body){
this.launch.bodyA=body
}
display(){
    if(this.launch.bodyA) {

        var pointA = this.launch.bodyA.position
        var pointB = this.pointB
        strokeWeight(5)
        line(pointA.x,pointA.y,pointB.x, pointB.y)

    }
}
}
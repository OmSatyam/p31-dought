class Rain{
   constructor(x,y,radius){
     var options = {
        'isStatic': false,
        'friction':0.1
     }  
   this.body = Bodies.circle(x,y,radius,options);
   this.radius = radius;
   World.add(world,this.body);
   }

display(){
    if(this.body.position.y > height){
    Matter.Body.setPosition(this.drop,{x:random(0,400),y:random(0,400)})
    }
    var pos = this.body.position;  
    fill("blue");
    push();
    translate(pos.x,pos.y);
    ellipseMode(RADIUS);   
    ellipse(0,0,this.radius,this.radius); 
    pop();
}
}
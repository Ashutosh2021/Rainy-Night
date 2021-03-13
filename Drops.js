class Drops {

    constructor(x,y){

        var options={

             isStatic : false,
             restitution: 0.1,
             friction : 0.0001,
             density : 1
        }

        
        this.rain=Bodies.circle(x,y,20/2,options);
        this.x=x;
        this.y=y;
        this.radius=20/2;

        World.add(world,this.rain);
    }

    display(){

        var pos=this.rain.position;
        var angle= this.rain.angle;
        
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        strokeWeight(2);
        fill("blue");
        circle(0,0,this.radius,this.radius);
        
        if(pos.y>height){

            Matter.Body.setPosition(this.rain,{x: random(0,400), y : random(0,400)});
        }
    
        pop();

        
        
    
    }
}
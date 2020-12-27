class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    //this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory =[];

    this.bird = loadImage("sprites/bird.png");
    this.birdB = loadImage("sprites/bluebird.png");
    this.birdy = loadImage("sprites/yellowbird.png");
    
    this.visibility = 255
  }

  displayred(){
    var angle = this.body.angle;
    push()
    translate (this.body.position.x,this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.bird, 0,0, this.width,this.height)
    pop()
  }
  displayblue(){
    var angle = this.body.angle;
    push()
    translate (this.body.position.x,this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.birdB, 0,0, this.width,this.height)
    pop()
  }
  displayyellow(){
    var angle = this.body.angle;
    push()
    translate (this.body.position.x,this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.birdy, 0,0, this.width,this.height)
    pop()
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    //super.display();

    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
   

    for(var i=0; i<this.trajectory.length; i++){
      push();
      //this.visibility = this.visibility - 3;
     // tint(255,this.visibility)
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
      pop();
    }
  }
}

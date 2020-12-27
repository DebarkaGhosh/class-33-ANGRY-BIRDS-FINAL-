const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var bgimage;

var gameState = "onSling";

var birds = [];


function preload() {
     getBgImage();
     //birdsselectSound = loadSound("sprites/bird_select.mp3");
    // birdsflyingSound = loadSound("sprites/bird_flying.mp3");
}

function setup(){
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);
    birdB = new Bird(150,170);
    birdy = new Bird(100,170);

    birds.push(birdy)
    birds.push(birdB)
    birds.push(bird);


    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});

    refresh = createImg("sprites/refresh.png");
    refresh.position(15,10);
}



function draw(){

   

     if(bgimage)
    background(bgimage);

    textSize(16);
    fill("red");
    if(birds.length > 0)
    text("press SPACE key to use the next bird ",723,40);
    else{
        fill("black")
        textFont("algerian")
        text("click on RELOAD key in the left top corner to reset",723,40);
    }
   // text(mouseX + "," + mouseY, mouseX,mouseY)
 push();
    textSize(20);
    fill("purple");
    textFont("cavolini");
    text("Drag the bird and hit the blocks",334,23)
    pop();


    refresh.mousePressed(reset);    
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();  
    
    bird.displayred();
    birdB.displayblue();
    birdy.displayyellow();


    bird.display();
    birdB.display();
    birdy.display();
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(birds[birds.length-1].body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
    birds.pop();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(birds[birds.length-1].body);
        gameState="onSling";
    }
}

async function getBgImage(){
    //var response = await fetch("http://worldclockapi.org/api/timezone/Asia/Kol");
    var response = await fetch("https://worldclockapi.com/api/json/cet/now");
    var responseJson = await response.json()
    console.log(responseJson);
    var datetime = responseJson. currentDateTime;
    var hour = datetime.slice(11,13);
    console.log(hour);

    if(hour>=05 &&  hour <= 18){
        bg = "sprites/bg.png";

    }
    else{
        bg = "sprites/bg2.jpg";
    }
 bgimage = loadImage(bg);
 console.log(bgimage);


}

function reset(){

    location.reload();
}


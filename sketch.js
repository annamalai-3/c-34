var ball,ball1;
var database;
var position;
function setup(){
    createCanvas(500,500);
    database = firebase.database();
    ball = createSprite(250,250,10,10);
    ball1 = createSprite(300,300,10,10);
    ball1.shapeColor = "yellow"
    database.ref('ball/position').on("value",function readposition(data){
    position = data.val()
    ball1.x = position.x;
    ball1.y = position.y;
    })
    ball.shapeColor = "red";
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        
        writeposition(-1,0)
    }
    else if(keyDown(RIGHT_ARROW)){
      
        writeposition(1,0)
    }
    else if(keyDown(UP_ARROW)){
       
        writeposition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
     
        writeposition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
function writeposition(xpox,ypox){

    database.ref('ball/position').set({
     x:xpox +position.x ,
     y:ypox +position.y  
    })
}

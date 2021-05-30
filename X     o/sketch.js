var sq1,sq2,sq3,sq4,sq5,sq6,sq7,sq8,sq9;
var line1,line2,line3,line4;
var imgx,imgo,spritex,spriteo;
var player="x";
var sqbg;
var xc1=0,xc2=0,xc3=0,xc4=0,xc5=0,xc6=0,xc7=0,xc8=0,xc9=0;
var oc1=0,oc2=0,oc3=0,oc4=0,oc5=0,oc6=0,oc7=0,oc8=0,oc9=0;
var gameState="play";
var playerwon="W";
var num=0,count=0;

function preload(){
  imgx=loadImage("Black-X-Letter.png")
  imgo=loadImage("letter_o_PNG24.png")
}

function setup(){
  createCanvas(600,700);

  sqbg=createSprite(300,400,600,600);
  sqbg.shapeColor="white"
  spritex=createSprite(200,50,180,50);
  spriteo=createSprite(400,50,180,50);

  sq1=createSprite(100,200,200,200);
  sq1.shapeColor="white";
  sq2=createSprite(300,200,200,200);
  sq2.shapeColor="white";
  sq3=createSprite(500,200,200,200);
  sq3.shapeColor="white";
  sq4=createSprite(100,400,200,200);
  sq4.shapeColor="white";
  sq5=createSprite(300,400,200,200);
  sq5.shapeColor="white";
  sq6=createSprite(500,400,200,200);
  sq6.shapeColor="white";
  sq7=createSprite(100,600,200,200);
  sq7.shapeColor="white";
  sq8=createSprite(300,600,200,200);
  sq8.shapeColor="white";
  sq9=createSprite(500,600,200,200);
  sq9.shapeColor="white";

  line1=createSprite(200,400,1,600);
  line1.shapeColor="black";
  line2=createSprite(400,400,1,600);
  line2.shapeColor="black";
  line3=createSprite(300,300,600,1);
  line3.shapeColor="black";
  line4=createSprite(300,500,600,1);
  line4.shapeColor="black";




}

function draw(){
  background(0);

if(gameState==="play"){


  if(mousePressedOver(spritex)){
    player="x";
  }
  else if(mousePressedOver(spriteo)){
    player="o";
  }

  if(mousePressedOver(sq1) && player==="x" && xc1===0){
    sq1.addImage(imgx);
    sq1.scale=0.3;
    oc1+=1;
    num+=1
    console.log(num)
  }

  if(mousePressedOver(sq2) && player==="x" && xc2===0){
    sq2.addImage(imgx);
    sq2.scale=0.3
    oc2+=1;
    num+=1
    console.log(num)
  }

  if(mousePressedOver(sq3) && player==="x" && xc3===0){
    sq3.addImage(imgx);
    sq3.scale=0.3
    oc3+=1;
    num+=1
    console.log(num)
  }

  if(mousePressedOver(sq4) && player==="x" && xc4===0){
    sq4.addImage(imgx);
    sq4.scale=0.3
    oc4+=1;
    num+=1
    console.log(num)
  }

  if(mousePressedOver(sq5) && player==="x" && xc5===0){
    sq5.addImage(imgx);
    sq5.scale=0.3
    oc5+=1;
    num+=1
    console.log(num)
  }

  if(mousePressedOver(sq6) && player==="x" && xc6===0){
    sq6.addImage(imgx);
    sq6.scale=0.3
    oc6+=1;
    num+=1
    console.log(num)
  }

  if(mousePressedOver(sq7) && player==="x" && xc7===0){
    sq7.addImage(imgx);
    sq7.scale=0.3
    oc7+=1;
    num+=1
    console.log(num)
  }

  if(mousePressedOver(sq8) && player==="x" && xc8===0){
    sq8.addImage(imgx);
    sq8.scale=0.3
    oc8+=1;
    num+=1
    console.log(num)
  }

  if(mousePressedOver(sq9) && player==="x" && xc9===0){
    sq9.addImage(imgx)
    sq9.scale=0.3
    oc9+=1;
    num+=1
    console.log(num)
  }

  if(mousePressedOver(sq1) && player==="o"&& oc1===0){
    sq1.addImage(imgo);
    sq1.scale=0.25
    xc1+=1
    num+=1
    console.log(num)
  }

  if(mousePressedOver(sq2) && player==="o"&& oc2===0){
    sq2.addImage(imgo);
    sq2.scale=0.25
    xc2+=1
    num+=1
    console.log(num)
  }

  if(mousePressedOver(sq3) && player==="o"&& oc3===0){
    sq3.addImage(imgo);
    sq3.scale=0.25
    xc3+=1
    num+=1
    console.log(num)
  }

  if(mousePressedOver(sq4) && player==="o"&& oc4===0){
    sq4.addImage(imgo);
    sq4.scale=0.25
    xc4+=1
    num+=1
    console.log(num)
  }

  if(mousePressedOver(sq5) && player==="o"&& oc5===0){
    sq5.addImage(imgo);
    sq5.scale=0.25
    xc5+=1
    num+=1
    console.log(num)
  }

  if(mousePressedOver(sq6) && player==="o"&& oc6===0){
    sq6.addImage(imgo);
    sq6.scale=0.25
    xc6+=1
    num+=1
    console.log(num)
  }

  if(mousePressedOver(sq7) && player==="o"&& oc7===0){
    sq7.addImage(imgo);
    sq7.scale=0.25
    xc7+=1
    num+=1
    console.log(num)
  }

  if(mousePressedOver(sq8) && player==="o"&& oc8===0){
    sq8.addImage(imgo);
    sq8.scale=0.25
    xc8+=1
    num+=1
    console.log(num)
  }

  if(mousePressedOver(sq9) && player==="o" && oc9===0){
    sq9.addImage(imgo)
    sq9.scale=0.25
    xc9+=1
    num+=1
    console.log(num)
  }

  

if((xc1>0 && xc2>0 && xc3>0) || (xc4>0 && xc5>0 && xc6>0) || (xc7>0 && xc8>0 && xc9>0) ||(xc1>0 && xc4>0 && xc7>0) || 
(xc1>0 && xc5>0 && xc9>0) || (xc2>0 && xc5>0 && xc8>0) || (xc3>0 && xc6>0 && xc9>0) || (xc3>0 && xc5>0 && xc7>0)){
  gameState="end";
  playerwon="O";
}
if((oc1>0 && oc2>0 && oc3>0) || (oc4>0 && oc5>0 && oc6>0) || (oc7>0 && oc8>0 && oc9>0) ||(oc1>0 && oc4>0 && oc7>0) || 
(oc1>0 && oc5>0 && oc9>0) || (oc2>0 && oc5>0 && oc8>0) || (oc3>0 && oc6>0 && oc9>0) || (oc3>0 && oc5>0 && oc7>0)){
  gameState="end";
  playerwon="X";
}

}
  drawSprites();

if(gameState==="end"){
  textSize(130);
  fill("grey");
  text(playerwon+" WIN ",50,350);
}

  textSize(30);
  fill ("black");
text("X",130,60);
text("O",330,60)

if(playerwon==="W" && num>32){
  textSize(120);
  fill("grey");
  text(" DRAW ",50,350);



}




}
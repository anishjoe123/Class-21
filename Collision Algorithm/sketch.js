var a,b;
var q,w,e,r;
function setup() {
  createCanvas(800,400);
  a = createSprite(400, 200, 50, 50);
  a.shapeColor="red";
  b = createSprite(455,200,50,50);
  b.shapeColor="blue";
  a.debug=true;
  b.debug=true;
  q = createSprite(35,100,50,50);
  q.shapeColor="blue";
  q.debug=true;
  w = createSprite(535,355,50,50);
  w.shapeColor="blue";
  w.debug=true;
  e = createSprite(135,200,50,50);
  e.shapeColor="blue";
  e.debug=true;
  r = createSprite(635,10,50,50);
  r.shapeColor="blue";
  r.debug=true;
}

function draw() {
  background(0);  
  a.y=mouseY;
  a.x=mouseX;
  if(isTouching(a,r))
  {
    a.shapeColor="white";
    r.shapeColor="yellow";
  }
  else
  {
    a.shapeColor="red";
    r.shapeColor="blue";
  }
  drawSprites();
}


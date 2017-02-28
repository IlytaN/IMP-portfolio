var canvas = document.getElementById("drawCanvas");
var drawingContext = canvas.getContext("2d");
var score = 0;
document.getElementById("score").innerHTML= score;
function getRandomNumber(max)
{
  return Math.floor(Math.random() * max);
}
function veikkosMouseDown(event)
{
  randomPoint = drawSomething(canvas,event);
  clickingPoint = getMousePos(canvas, event);
  var x_size = randomPoint.random_x+30;
  var y_size = randomPoint.random_y+30;
  console.log(randomPoint.random_x,randomPoint.random_y,x_size,y_size);
  console.log(clickingPoint.x,clickingPoint.y);
  if (clickingPoint.x>randomPoint.random_x && clickingPoint.x<x_size
        && clickingPoint.y>randomPoint.random_y && clickingPoint.y<y_size) {
    score+1;
    console.log(score);
    document.getElementById("score").innerHTML= score;
  }
}
// random canvases
var drawCounter = 0;
function drawSomething()
{
  if (drawCounter < 100)
  {
    drawCounter++;
    var x = getRandomNumber(200);
    var y = getRandomNumber(200);
    var size = 30;
    drawingContext.rect(x,y,size,size);
    drawingContext.fill();
    return{
      random_x: x,
      random_y: y
    }
  }
  else {
    drawCounter = 0;
    drawingContext.beginPath();
    drawingContext.clearRect(0,0, canvas.width, canvas.height);
  }
}
// take mousepointer's coordinate
function getMousePos(canvas, evt)
{
  var rect = canvas.getBoundingClientRect();
  return{
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  }
}
canvas.addEventListener("mousedown", veikkosMouseDown);

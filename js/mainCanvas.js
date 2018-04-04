//new test
var canvas = document.querySelector("#main-canvas");
var ctx = canvas.getContext("2d");
var ballRadius = 5;
var x = 300;
var y = 230;
var directionX = 1;
var directionY = -1;
var dx = 0.1;
var dy = 0.1;
var brickRowCount = 8;
var brickColumnCount = 8;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 5;
var brickOffsetTop = 5;
var brickOffsetLeft = 30;

if (score === undefined) {
  var score = 0;
}

function collisionDetection() {
  for (c = 0; c < brickColumnCount; c++) {
    for (r = 0; r < brickRowCount; r++) {
      var b = bricks[c][r];
      if (b.status == 1) {
        if (
          x > b.x &&
          x < b.x + brickWidth &&
          y > b.y &&
          y < b.y + brickHeight
        ) {
          directionY = -directionY;
          b.status = 0;
          score++;
          if (score == brickRowCount * brickColumnCount) {
            drawBricks();
            collisionDetection();
          }
        }
      }
    }
  }
}

//moving ball
function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#00ff99";
  ctx.fillStroke = "#0033FF";
  ctx.fill();
  ctx.closePath();
}

var bricks = [];
for (c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 }; //add the brickCounter
  }
}
//Brick
function drawBricks() {
  for (c = 0; c < brickColumnCount; c++) {
    for (r = 0; r < brickRowCount; r++) {
      if (bricks[c][r].status == 1) {
        var brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
        var brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = "#c93424";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

function drawScore() {
  // ctx.font = "16px Arial";
  // ctx.fillStyle = "#0095DD";
  // //ctx.fillText("Score: " + score, 8, 20);
  $(".score").html(score);
  if (score === 64) {
    //alert("congratz");
    console.log("gg");
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  drawBall();
  drawScore();
  collisionDetection();

  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    directionX = -directionX;
  }
  if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
    directionY = -directionY;
  }

  x += dx * directionX;
  y += dy * directionY;
  $(".speed").html(dx);
}

setInterval(draw, 30);

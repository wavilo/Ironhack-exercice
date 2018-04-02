//new test
var canvas = document.querySelector("#main-canvas");
var ctx = canvas.getContext("2d");
var ballRadius = 9;
var x = 300;
var y = 200;
var dx = 2;
var dy = -2;
var brickRowCount = 2;
var brickColumnCount = 6;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 100;
var brickOffsetLeft = 100;

var bricks = [];
for (c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 }; //add the brickCounter
  }
}

//moving ball
function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#00ff99";
  ctx.fillStroke = "#0033FF";
  ctx.Stroke = "10";
  ctx.fill();
  ctx.closePath();
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
        //test for the color of the bricks
        // for (c = 0; c < brickColumnCount; c++) {
        //   for (r = 0; r < brickRowCount; r++) {
        //     var b = bricks[c][r];
        //     if (b.brickCounter == 750) {
        //       ctx.fillStyle = "#c93424";
        //     } else if (b.brickCounter <= 749) {
        //       ctx.fillStyle = "#74f442";
        //     } else if (b.brickCounter <= 749) {
        //       ctx.fillStyle = "#";
        //     }
        //   }
        // }

        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

//function for collision and brickCounter test
// function collisionDetection() {
//   for (c = 0; c < brickColumnCount; c++) {
//     for (r = 0; r < brickRowCount; r++) {
//       var b = bricks[c][r];
//       if (b.brickCounter > 0) {
//         if (
//           x > b.x &&
//           x < b.x + brickWidth &&
//           y > b.y &&
//           y < b.y + brickHeight
//         ) {
//           dy = -dy;
//           b.brickCounter = b.brickCounter - 1;
//         }
//       } else if ((b.brickCounter = 0)) {
//         b.status = 0;
//       }
//     }
//   }
// }

//this collision is working
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
          dy = -dy;
          b.status = 0;
        }
      }
    }
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  drawBall();
  collisionDetection();

  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
    dy = -dy;
  }

  x += dx;
  y += dy;
}

setInterval(draw, 10);

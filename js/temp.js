// //the 9 fix balls
// function drawFixBall1() {
//   ctx.beginPath();
//   ctx.arc(x1, y1, fixBallRadius, 0, Math.PI * 2);
//   ctx.fillStyle = "#c9200e";
//   ctx.fill();
//   ctx.closePath();
// }

// function drawFixBall2() {
//   ctx.beginPath();
//   ctx.arc(75, 170, fixBallRadius, 0, Math.PI * 2);
//   ctx.fillStyle = "#c9200e";
//   ctx.fill();
//   ctx.closePath();
// }

// function drawFixBall3() {
//   ctx.beginPath();
//   ctx.arc(200, 200, fixBallRadius, 0, Math.PI * 2);
//   ctx.fillStyle = "#c9200e";
//   ctx.fill();
//   ctx.closePath();
// }

// function drawFixBall4() {
//   ctx.beginPath();
//   ctx.arc(240, 60, fixBallRadius, 0, Math.PI * 2);
//   ctx.fillStyle = "#c9200e";
//   ctx.fill();
//   ctx.closePath();
// }

// function drawFixBall5() {
//   ctx.beginPath();
//   ctx.arc(300, 150, fixBallRadius, 0, Math.PI * 2);
//   ctx.fillStyle = "#c9200e";
//   ctx.fill();
//   ctx.closePath();
// }

// function drawFixBall6() {
//   ctx.beginPath();
//   ctx.arc(450, 80, fixBallRadius, 0, Math.PI * 2);
//   ctx.fillStyle = "#c9200e";
//   ctx.fill();
//   ctx.closePath();
// }

// function drawFixBall7() {
//   ctx.beginPath();
//   ctx.arc(430, 170, fixBallRadius, 0, Math.PI * 2);
//   ctx.fillStyle = "#c9200e";
//   ctx.fill();
//   ctx.closePath();
// }

// function drawFixBall8() {
//   ctx.beginPath();
//   ctx.arc(600, 70, fixBallRadius, 0, Math.PI * 2);
//   ctx.fillStyle = "#c9200e";
//   ctx.fill();
//   ctx.closePath();
// }

// function drawFixBall9() {
//   ctx.beginPath();
//   ctx.arc(560, 170, fixBallRadius, 0, Math.PI * 2);
//   ctx.fillStyle = "#c9200e";
//   ctx.fill();
//   ctx.closePath();
// }

// // ///////////////////////////
// // //Main Ball
// // ///////////////////////////
// // var canvas = document.querySelector("#main-canvas");
// // var ctx = canvas.getContext("2d");

// // var ball = {
// //   x: 110,
// //   y: 110,
// //   vx: 5,
// //   vy: 5,
// //   radius: 9,
// //   color: "#2e7d32",
// //   draw: function() {
// //     ctx.beginPath();
// //     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
// //     ctx.closePath();
// //     ctx.fillStyle = this.color;
// //     ctx.fill();
// //   }
// // };

// // ball.draw();

// // //ball moving

// // function update() {
// //   ctx.clearRect(0, 0, canvas.width, canvas.height);
// //   ball.draw();
// //   ball.x += ball.vx;
// //   ball.y += ball.vy;
// // }

// // setInterval(update, 20);

// // //boundaries

// // function update() {
// //   ctx.clearRect(0, 0, canvas.width, canvas.height);
// //   ball.draw();
// //   ball.x += ball.vx;
// //   ball.y += ball.vy;
// //   if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
// //     ball.vy *= -1;
// //   }
// //   if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
// //     ball.vx *= -1;
// //   }
// // }

// // ///////////////////////////
// // //Fix balls
// // ///////////////////////////

// //ball1
// // var canvas = document.querySelector("#main-canvas");
// // var ctx = canvas.getContext("2d");

// // var ballFix1 = {
// //   x: 90,
// //   y: 70,
// //   hitPoint: 1000,
// //   radius: 22,
// //   color: "red",
// //   draw: function() {
// //     ctx.beginPath();
// //     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
// //     ctx.closePath();
// //     ctx.fillStyle = this.color;
// //     ctx.fill();
// //     ctx.fillText(1000, this.x, this.y);
// //   }
// // };

// // ballFix1.draw();

// // //ball2
// // var canvas = document.querySelector("#main-canvas");
// // var ctx = canvas.getContext("2d");

// // var ballFix2 = {
// //   x: 75,
// //   y: 170,
// //   hitPoint: 1000,
// //   radius: 22,
// //   color: "red",
// //   draw: function() {
// //     ctx.beginPath();
// //     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
// //     ctx.closePath();
// //     ctx.fillStyle = this.color;
// //     ctx.fill();
// //   }
// // };

// // ballFix2.draw();

// // //ball3
// // var canvas = document.querySelector("#main-canvas");
// // var ctx = canvas.getContext("2d");

// // var ballFix3 = {
// //   x: 200,
// //   y: 200,
// //   hitPoint: 1000,
// //   radius: 22,
// //   color: "red",
// //   draw: function() {
// //     ctx.beginPath();
// //     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
// //     ctx.closePath();
// //     ctx.fillStyle = this.color;
// //     ctx.fill();
// //   }
// // };

// // ballFix3.draw();

// // //ball4
// // var canvas = document.querySelector("#main-canvas");
// // var ctx = canvas.getContext("2d");

// // var ballFix4 = {
// //   x: 240,
// //   y: 60,
// //   hitPoint: 1000,
// //   radius: 22,
// //   color: "red",
// //   draw: function() {
// //     ctx.beginPath();
// //     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
// //     ctx.closePath();
// //     ctx.fillStyle = this.color;
// //     ctx.fill();
// //   }
// // };

// // ballFix4.draw();

// // //ball5
// // var canvas = document.querySelector("#main-canvas");
// // var ctx = canvas.getContext("2d");

// // var ballFix5 = {
// //   x: 300,
// //   y: 150,
// //   hitPoint: 1000,
// //   radius: 22,
// //   color: "red",
// //   draw: function() {
// //     ctx.beginPath();
// //     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
// //     ctx.closePath();
// //     ctx.fillStyle = this.color;
// //     ctx.fill();
// //   }
// // };

// // ballFix5.draw();

// // //ball6
// // var canvas = document.querySelector("#main-canvas");
// // var ctx = canvas.getContext("2d");

// // var ballFix6 = {
// //   x: 450,
// //   y: 80,
// //   hitPoint: 1000,
// //   radius: 22,
// //   color: "red",
// //   draw: function() {
// //     ctx.beginPath();
// //     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
// //     ctx.closePath();
// //     ctx.fillStyle = this.color;
// //     ctx.fill();
// //   }
// // };

// // ballFix6.draw();

// // //ball7
// // var canvas = document.querySelector("#main-canvas");
// // var ctx = canvas.getContext("2d");

// // var ballFix7 = {
// //   x: 430,
// //   y: 170,
// //   hitPoint: 1000,
// //   radius: 22,
// //   color: "red",
// //   draw: function() {
// //     ctx.beginPath();
// //     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
// //     ctx.closePath();
// //     ctx.fillStyle = this.color;
// //     ctx.fill();
// //   }
// // };

// // ballFix7.draw();

// // //ball8
// // var canvas = document.querySelector("#main-canvas");
// // var ctx = canvas.getContext("2d");

// // var ballFix8 = {
// //   x: 600,
// //   y: 70,
// //   hitPoint: 1000,
// //   radius: 22,
// //   color: "red",
// //   draw: function() {
// //     ctx.beginPath();
// //     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
// //     ctx.closePath();
// //     ctx.fillStyle = this.color;
// //     ctx.fill();
// //   }
// // };

// // ballFix8.draw();

// // //ball9
// // var canvas = document.querySelector("#main-canvas");
// // var ctx = canvas.getContext("2d");

// // var ballFix9 = {
// //   x: 560,
// //   y: 170,
// //   hitPoint: 1000,
// //   radius: 22,
// //   color: "red",
// //   draw: function() {
// //     ctx.beginPath();
// //     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
// //     ctx.closePath();
// //     ctx.fillStyle = this.color;
// //     ctx.fill();
// //   }
// // };

// // ballFix9.draw();

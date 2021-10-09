Array(16).join("wat" - 1) + " batman!";
const CANVAS_WIDTH = 300;
const CANVAS_HEIGHT = 300;
const canvas = document.getElementById("sandbox");
const CANVAS_CONTEXT = canvas.getContext("2d");
canvas.style.width = CANVAS_WIDTH + "px";
canvas.style.height = CANVAS_HEIGHT + "px";

const context = CANVAS_CONTEXT;
var score = 0;
var balls = [];
var paddle = { x: 50, y: 100, w: 5, h: 60 };
var Key = {
  DOWN: 40,
  UP: 38,
};
function addBall() {
  const randomPosition = {
    x: 250,
    y: 150,
  };

  const randomVelocity = {
    x: -2,
    y: -2,
  };
  const newBall = {
    position: randomPosition,
    velocity: randomVelocity,
  };
  balls.push(newBall);
}

window.addEventListener("keydown", (event) => {
  const distance = 10;
  switch (event.keyCode) {
    case Key.UP:
      paddle.y -= distance;
      break;
    case Key.DOWN:
      paddle.y += distance;
      break;
  }
});

function drawPong() {
  context.fillStyle = "black";
  context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  context.fillStyle = "wheat";
  context.fillRect(2, 2, CANVAS_WIDTH - 4, CANVAS_HEIGHT - 4);

  context.fillStyle = "green";
  context.fillRect(paddle.x, paddle.y, paddle.w, paddle.h);

  balls.forEach((ball) => {
    context.fillStyle = "black";
    context.beginPath();
    context.arc(ball.position.x, ball.position.y, 5, 0, 2 * Math.PI);
    context.stroke();
    context.fill();

    // check for walls

    // check for left and right walls
    if (ball.position.x < 0 || ball.position.x > CANVAS_WIDTH) {
      ball.velocity.x *= -1;
    }
    // check for top and bottom walls
    if (ball.position.y < 0 || ball.position.y > CANVAS_HEIGHT) {
      ball.velocity.y *= -1;
    }

    // check for collisions
    var newPosition = {
      x: ball.position.x + ball.velocity.x,
      y: ball.position.y + ball.velocity.y,
    };

    const paddleRightSide = paddle.x + paddle.w;
    const paddleBottomSide = paddle.y + paddle.h;
    const hHitTest =
      newPosition.x > paddle.x && newPosition.x < paddleRightSide;
    const vHitText =
      newPosition.y > paddle.y && newPosition.y < paddleBottomSide;
    // if new ball position hits the paddle at all
    if (hHitTest && vHitText) {
      const ballWillIntersectLeftPaddlePosition =
        ball.position.x < paddle.x && newPosition.x > paddle.x;
      const ballWillIntersectRightPaddlePosition =
        ball.position.x > paddleRightSide && newPosition.x < paddleRightSide;
      if (
        ballWillIntersectLeftPaddlePosition ||
        ballWillIntersectRightPaddlePosition
      ) {
        ball.velocity.x *= -1;
      }
      const ballWillIntersectTopPaddlePosition =
        ball.position.y < paddle.y && newPosition.y > paddle.y;
      const ballWillIntersectBottomPaddlePosition =
        ball.position.y > paddleBottomSide && newPosition.y < paddleBottomSide;
      if (
        ballWillIntersectTopPaddlePosition ||
        ballWillIntersectBottomPaddlePosition
      ) {
        ball.velocity.y *= -1;
      }
    }

    ball.position.x += ball.velocity.x;
    ball.position.y += ball.velocity.y;
    if (ball.position.x < 20) {
      count = 0;
      score = 0;
      console.log(score);
    }
    if (ball.position.x > 280) {
      count++;
    }
    if (count === 21) {
      score++;
      count = 0;
      console.log(score);
    }
  });

  window.requestAnimationFrame(drawPong);
}

// const width = 300;
// const height = 300;

// const canvas = document.getElementById("sandbox");
// canvas.style.width = width + "px";
// canvas.style.height = height + "px";

// function draw() {
//   const context = canvas.getContext("2d");
//   for (var i = 0; i < 150; i++) {
//     context.fillStyle = "#" + Math.floor(Math.random() * 16777215).toString(16);
//     context.fillRect(i, i, i, i);
//   }
// }
var dice = 10;
var p = 125;
var count = 0;
var elapsedQuarterSeconds = 0;

function startDrawing() {
  window.requestAnimationFrame(drawAnimation);
}

function draw() {
  context.fillStyle = "white";
  context.fillRect(0, 0, 300, 300);

  context.lineWidth = 5;

  // var offset = count * 0.1;
  context.beginPath();
  context.arc(125, 125, 100, 0, 2 * Math.PI);
  // context.strokeStyle = "red";
  context.stroke();
  context.fillStyle = "tan";
  context.fill();

  context.beginPath();
  context.arc(125, 150, 50, 0, Math.PI);
  // context.strokeStyle = "blue";
  context.stroke();

  context.beginPath();
  context.arc(75, 100, 20, 0, 2 * Math.PI);
  context.stroke();
  context.fillStyle = "white";
  context.fill();

  context.beginPath();
  context.arc(175, 100, 20, 0, 2 * Math.PI);
  context.stroke();
  context.fill();

  context.beginPath();
  context.arc(70, 100, 12.5, 0, 2 * Math.PI);
  context.stroke();
  context.fillStyle = "blue";
  context.fill();

  context.beginPath();
  context.arc(170, 100, 12.5, 0, 2 * Math.PI);
  context.stroke();
  context.fill();

  context.beginPath();
  context.arc(70, 100, 5, 0, 2 * Math.PI);
  context.stroke();
  context.fillStyle = "black";
  context.fill();

  context.beginPath();
  context.arc(170, 100, 5, 0, 2 * Math.PI);
  context.stroke();
  context.fill();

  // console.log("finished rendering frame ", count);
  // count++;
  // window.requestAnimationFrame(draw);
}

function clearCanvas() {
  console.log("clear");
  context.fillStyle = "white";
  context.fillRect(0, 0, 300, 300);

  context.lineWidth = 5;
}

function drawAnimation() {
  context.fillStyle = "white";
  context.fillRect(0, 0, 300, 300);

  context.lineWidth = 5;

  // var offset = count * 0.1;
  context.beginPath();
  context.arc(125, 125, 100, 0, 2 * Math.PI);
  // context.strokeStyle = "red";
  context.stroke();
  context.fillStyle = "tan";
  context.fill();

  context.beginPath();
  context.arc(125, 150, 50, 0, Math.PI);
  // context.strokeStyle = "blue";
  context.stroke();

  context.beginPath();
  context.arc(75, 100, 20, 0, 2 * Math.PI);
  context.stroke();
  context.fillStyle = "white";
  context.fill();

  context.beginPath();
  context.arc(175, 100, 20, 0, 2 * Math.PI);
  context.stroke();
  context.fill();
  if (elapsedQuarterSeconds < 1) {
    context.beginPath();
    context.arc(70, 100, 12.5, 0, 2 * Math.PI);
    context.stroke();
    context.fillStyle = "blue";
    context.fill();

    context.beginPath();
    context.arc(170, 100, 12.5, 0, 2 * Math.PI);
    context.stroke();
    context.fill();

    context.beginPath();
    context.arc(70, 100, 5, 0, 2 * Math.PI);
    context.stroke();
    context.fillStyle = "black";
    context.fill();

    context.beginPath();
    context.arc(170, 100, 5, 0, 2 * Math.PI);
    context.stroke();
    context.fill();
  }

  if (elapsedQuarterSeconds === 1) {
    context.beginPath();
    context.arc(70, 95, 12.5, 0, 2 * Math.PI);
    context.stroke();
    context.fillStyle = "blue";
    context.fill();

    context.beginPath();
    context.arc(170, 95, 12.5, 0, 2 * Math.PI);
    context.stroke();
    context.fill();

    context.beginPath();
    context.arc(70, 95, 5, 0, 2 * Math.PI);
    context.stroke();
    context.fillStyle = "black";
    context.fill();

    context.beginPath();
    context.arc(170, 95, 5, 0, 2 * Math.PI);
    context.stroke();
    context.fill();
  }

  if (elapsedQuarterSeconds === 2) {
    context.beginPath();
    context.arc(75, 95, 12.5, 0, 2 * Math.PI);
    context.stroke();
    context.fillStyle = "blue";
    context.fill();

    context.beginPath();
    context.arc(175, 95, 12.5, 0, 2 * Math.PI);
    context.stroke();
    context.fill();

    context.beginPath();
    context.arc(75, 95, 5, 0, 2 * Math.PI);
    context.stroke();
    context.fillStyle = "black";
    context.fill();

    context.beginPath();
    context.arc(175, 95, 5, 0, 2 * Math.PI);
    context.stroke();
    context.fill();
  }

  if (elapsedQuarterSeconds === 3) {
    context.beginPath();
    context.arc(80, 95, 12.5, 0, 2 * Math.PI);
    context.stroke();
    context.fillStyle = "blue";
    context.fill();

    context.beginPath();
    context.arc(180, 95, 12.5, 0, 2 * Math.PI);
    context.stroke();
    context.fill();

    context.beginPath();
    context.arc(80, 95, 5, 0, 2 * Math.PI);
    context.stroke();
    context.fillStyle = "black";
    context.fill();

    context.beginPath();
    context.arc(180, 95, 5, 0, 2 * Math.PI);
    context.stroke();
    context.fill();
  }
  if (elapsedQuarterSeconds === 4) {
    context.beginPath();
    context.arc(80, 100, 12.5, 0, 2 * Math.PI);
    context.stroke();
    context.fillStyle = "blue";
    context.fill();

    context.beginPath();
    context.arc(180, 100, 12.5, 0, 2 * Math.PI);
    context.stroke();
    context.fill();

    context.beginPath();
    context.arc(80, 100, 5, 0, 2 * Math.PI);
    context.stroke();
    context.fillStyle = "black";
    context.fill();

    context.beginPath();
    context.arc(180, 100, 5, 0, 2 * Math.PI);
    context.stroke();
    context.fill();
  }
  if (elapsedQuarterSeconds === 5) {
    context.beginPath();
    context.arc(80, 105, 12.5, 0, 2 * Math.PI);
    context.stroke();
    context.fillStyle = "blue";
    context.fill();

    context.beginPath();
    context.arc(180, 105, 12.5, 0, 2 * Math.PI);
    context.stroke();
    context.fill();

    context.beginPath();
    context.arc(80, 105, 5, 0, 2 * Math.PI);
    context.stroke();
    context.fillStyle = "black";
    context.fill();

    context.beginPath();
    context.arc(180, 105, 5, 0, 2 * Math.PI);
    context.stroke();
    context.fill();
  }

  if (elapsedQuarterSeconds > 5) {
    draw();
    elapsedQuarterSeconds = 0;
    window.requestAnimationFrame();
    return;
  }
  // console.log("finished rendering frame ", count);
  count++;
  if (count % 2.5 === 0) {
    elapsedQuarterSeconds++;
    console.log("elapsed quarter seconds ", elapsedQuarterSeconds);
  }
  window.requestAnimationFrame(drawAnimation);
}

// function drawPong() {
//   var p = 125;

//   context.fillStyle = "white";
//   context.fillRect(0, 0, 300, 300);

//   context.beginPath();
//   context.fillStyle = "black";
//   context.fillRect(255, p, 5, 50);
//   context.stroke();

//   context.beginPath();
//   context.fillRect(0, 0, 2, 300);
//   context.stroke();

//   context.beginPath();
//   context.fillRect(0, 298, 300, 2);
//   context.stroke();

//   context.beginPath();
//   context.fillRect(0, 0, 300, 2);
//   context.stroke();

//   context.beginPath();
//   context.fillRect(298, 0, 2, 298);
//   context.stroke();
// }

// function up() {
//   p = p - 15;
//   context.fillStyle = "white";
//   context.fillRect(0, 0, 300, 300);

//   context.beginPath();
//   context.fillStyle = "black";
//   context.fillRect(255, p, 5, 50);
//   context.stroke();

//   context.beginPath();
//   context.fillRect(0, 0, 2, 300);
//   context.stroke();

//   context.beginPath();
//   context.fillRect(0, 298, 300, 2);
//   context.stroke();

//   context.beginPath();
//   context.fillRect(0, 0, 300, 2);
//   context.stroke();

//   context.beginPath();
//   context.fillRect(298, 0, 2, 298);
//   context.stroke();

//   if (p < 5) {
//     p = p + 15;
//     console.log("going up", p);
//   }
// }

// function down() {
//   p = p + 15;
//   context.fillStyle = "white";
//   context.fillRect(0, 0, 300, 300);

//   context.beginPath();
//   context.fillStyle = "black";
//   context.fillRect(255, p, 5, 50);
//   context.stroke();

//   context.beginPath();
//   context.fillRect(0, 0, 2, 300);
//   context.stroke();

//   context.beginPath();
//   context.fillRect(0, 298, 300, 2);
//   context.stroke();

//   context.beginPath();
//   context.fillRect(0, 0, 300, 2);
//   context.stroke();

//   context.beginPath();
//   context.fillRect(298, 0, 2, 298);
//   context.stroke();

//   if (p > 245) {
//     p = p - 15;
//     console.log("going down", p);
//   }
// }
function SSB(params) {
  context.fillstyle = "black";
  context.fillrect(0, 0, 150, 150);
}

function rollADie() {
  context.fillStyle = "white";
  context.fillRect(0, 0, 300, 300);

  var diceRoll = Math.floor(Math.random() * 6 + 1);
  context.beginPath();
  context.arc(diceRoll * 30, dice, 10, 0, 2 * Math.PI);
  context.stroke();
  context.fillStyle = "black";
  context.fill();
  dice = dice + 0.5;
  console.log("the number is", diceRoll);
  // window.requestAnimationFrame(rollADie);
  // count++;
  // if (count % 100 === 0) {
  //   window.requestAnimationFrame();
  //   return;
}

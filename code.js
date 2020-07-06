Array(16).join("wat" - 1) + " batman!";

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
const width = 300;
const height = 300;
var dice = 10;
var p = 125;
var count = 0;
var elapsedQuarterSeconds = 0;
const canvas = document.getElementById("sandbox");
const context = canvas.getContext("2d");
canvas.style.width = width + "px";
canvas.style.height = height + "px";

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
// function clear() {
//   context.fillStyle = "blue";
//   context.fillRect(0, 0, 300, 300);

//   context.lineWidth = 5;
// }

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
function drawPong() {
  var p = 125;

  context.fillStyle = "white";
  context.fillRect(0, 0, 300, 300);

  context.beginPath();
  context.fillStyle = "black";
  context.fillRect(255, p, 5, 50);
  context.stroke();

  context.beginPath();
  context.fillRect(0, 0, 2, 300);
  context.stroke();

  context.beginPath();
  context.fillRect(0, 298, 300, 2);
  context.stroke();

  context.beginPath();
  context.fillRect(0, 0, 300, 2);
  context.stroke();

  context.beginPath();
  context.fillRect(298, 0, 2, 298);
  context.stroke();
}

function up() {
  p = p - 15;
  context.fillStyle = "white";
  context.fillRect(0, 0, 300, 300);

  context.beginPath();
  context.fillStyle = "black";
  context.fillRect(255, p, 5, 50);
  context.stroke();

  context.beginPath();
  context.fillRect(0, 0, 2, 300);
  context.stroke();

  context.beginPath();
  context.fillRect(0, 298, 300, 2);
  context.stroke();

  context.beginPath();
  context.fillRect(0, 0, 300, 2);
  context.stroke();

  context.beginPath();
  context.fillRect(298, 0, 2, 298);
  context.stroke();
}

function down() {
  p = p + 15;
  context.fillStyle = "white";
  context.fillRect(0, 0, 300, 300);

  context.beginPath();
  context.fillStyle = "black";
  context.fillRect(255, p, 5, 50);
  context.stroke();

  context.beginPath();
  context.fillRect(0, 0, 2, 300);
  context.stroke();

  context.beginPath();
  context.fillRect(0, 298, 300, 2);
  context.stroke();

  context.beginPath();
  context.fillRect(0, 0, 300, 2);
  context.stroke();

  context.beginPath();
  context.fillRect(298, 0, 2, 298);
  context.stroke();
}

if (m > 280) {
  p = p - 15;
  console.log("going down", p);
}
if (p < 5) {
  p = p + 15;
  console.log("going up", p);
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
  // }
}

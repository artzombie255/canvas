// Array(16).join("wat" - 1) + " batman!";

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

var count = 0;
const canvas = document.getElementById("sandbox");
canvas.style.width = width + "px";
canvas.style.height = height + "px";

function startDrawing() {
  window.requestAnimationFrame(draw);
}

function draw() {
  const context = canvas.getContext("2d");
  context.fillStyle = "white";
  context.fillRect(0, 0, 300, 300);

  context.lineWidth = 5;

  var offset = count * 0.1;
  context.beginPath();
  context.arc(125 + offset, 125, 100, 0, 2 * Math.PI);
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

  console.log("finished rendering frame ", count);
  count++;
  window.requestAnimationFrame(draw);
}

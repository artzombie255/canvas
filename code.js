const width = 300;
const height = 300;

const canvas = document.getElementById("sandbox");
canvas.style.width = width + "px";
canvas.style.height = height + "px";

function draw() {
  const context = canvas.getContext("2d");
  for (var i = 0; i < 150; i++) {
    context.fillStyle = "#" + Math.floor(Math.random() * 16777215).toString(16);
    context.fillRect(i, i, i, i);
  }
}

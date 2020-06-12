const canvas = document.getElementById("sandbox");
canvas.style.width = "600px";
canvas.style.height = "300px";

function draw() {
  const context = canvas.getContext("2d");
  context.fillStyle = "#" + Math.floor(Math.random() * 16777215).toString(16);
  context.fillRect(
    Math.random() * 300,
    Math.random() * 300,
    Math.random() * 300,
    Math.random() * 300
  );
}

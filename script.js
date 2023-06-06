let allDots = [];
let button = document.querySelector("button");
let dotID = 0;

function genRand(min, max, decimalPlaces) {
  var rand =
    Math.random() < 0.5
      ? (1 - Math.random()) * (max - min) + min
      : Math.random() * (max - min) + min; // could be min or max or anything in between
  var power = Math.pow(10, decimalPlaces);
  return Math.floor(rand * power) / power;
}

document.addEventListener("click", () => {
  let e = window.event;
  console.log(e.clientX, e.clientY);
  console.log(allDots);

  let colors = ["blue", "lightblue", "cornflowerblue", "darkblue"];

  newDot = document.createElement("div");
  newDot.setAttribute("id", "dot");
  newDot.setAttribute("class", dotID);
  newDot.style.left = e.clientX + "px";
  newDot.style.top = e.clientY + "px";
  let size = genRand(30, 150, 0);
  console.log(size);
  newDot.style.height = size / 5 + "px";
  newDot.style.width = size / 5 + "px";
  newDot.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];

  document.body.append(newDot);

  allDots.push(newDot);
  dotID++;

  if (allDots.length > 10) {
    document.querySelectorAll("#dot")[0].style.opacity = "0";
    setTimeout(() => {
      document.querySelectorAll("#dot")[0].remove();
    }, 500);
  }
});

button.addEventListener("click", () => {
  document.body.replaceChildren();
});
